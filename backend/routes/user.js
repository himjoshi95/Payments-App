const express = require('express')
const router = express.Router()
const z = require('zod')
const { User,Account } = require('../db')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')
const {authMiddleware} = require('../middleware')

const signupSchema = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password:z.string()
})

router.post('/signup',async function (req, res) {    
    const data = signupSchema.safeParse(req.body)
    if (!data.success) {
        return res.status(411).json({
            message: "Incorrect Inputs"
        })        
    }

    const userExists =await User.findOne({ username:req.body.username })    
    if (userExists) {
        return res.status(411).json({
            message: "Email already taken"            
        })        
    }
    
    const user = await User.create({
        username:req.body.username,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password
    })

    const userId = user._id

    await Account.create({
        userId: userId,
        balance: Math.floor(Math.random()*10000 + 1)
    })

    const token = jwt.sign({userId},JWT_SECRET)
    
    res.status(200).json({
        message: "User created Successfully",
        token:token
    })
})

const signinSchema = z.object({
    username: z.string().email(),
    password: z.string()
})
router.post('/signin', async function (req,res) {
    const {success} = signinSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }

    const userFound = await User.findOne({ username: req.body.username, password: req.body.password })
    if (userFound) {
        const token = jwt.sign({userId:userFound._id},JWT_SECRET)
        res.status(200).json({
            token            
        })
    } else {
        res.status(411).json({
            message: "Error while logging in"
        })       
    }
})

const updateSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password:z.string().optional()
})

router.put('/', authMiddleware ,async function (req, res) {
    const { success } = updateSchema.safeParse(req.body)
    
    if (!success) {
        return res.status(411).json({
            message: "Error while updating"
        })
    }
    // const userUpdate = await User.findByIdAndUpdate(req.userId, req.body)
    await User.updateOne({_id:req.userId},req.body)
    res.json({
        message: "Updated successfully"
    })
    
})

router.get('/bulk',authMiddleware ,async function (req, res) {
    const filterQuery = req.query.filter || ""
    

    const filterUser = await User.find({
        $or: [{
            firstName: {"$regex" :filterQuery }
        }, {
            lastName: {"$regex" :filterQuery }
        }]
    })
    
    res.status(200).json({
        users: filterUser.map(user => ({
            firstName: user.firstName,
            lastName: user.lastName,
            _id:user._id
        }))
    })
})

router.get('/me', authMiddleware,async function (req,res) {
    const userId = req.userId
    const user = await User.findOne({ _id: userId })
    const account = await Account.findOne({userId:userId})
    res.status(200).json({
        user,
        account,
        loggedin:true
    })

})
module.exports = router