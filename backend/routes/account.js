const express = require('express')
const router = express.Router()
const {authMiddleware} = require('../middleware')
const { Account } = require('../db')
const z = require('zod')
const { default: mongoose } = require('mongoose')

router.get('/balance',authMiddleware ,async function (req, res) {
    const account = await Account.findOne({
        userId:req.userId
    })
    res.status(200).json({
        balance : account.balance
    })
})

const transferSchema = z.object({
    to: z.string(),
    amount:z.number().positive()
})

router.post('/transfer', authMiddleware,async function (req, res) {
    const {success} = transferSchema.safeParse(req.body)    
    if (!success) {
        return res.status(411).json({
            message: "Invalid input/amount"
        })
    }
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body
    
    const account = await Account.findOne({ userId: req.userId }).session(session)
    
    if (!account || account.balance < amount) {
        await session.abortTransaction()
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({ userId: to }).session(session)

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid Account"
        })
    }

    await Account.updateOne({userId: req.userId}, {$inc:{balance:-amount}}).session(session)
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session)
    
    await session.commitTransaction();
    res.status(200).json({
        message: "Transfer successful"
    })    
})


module.exports = router







// https://projects.100xdevs.com/tracks/oAjvkeRNZThPMxZf4aX5/heWTf4Qw2ebu8MRaQv5C