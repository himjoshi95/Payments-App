const express = require('express')
const router = express.Router()
const z = require('zod')
const { User } = require('../db')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')

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

module.exports = router