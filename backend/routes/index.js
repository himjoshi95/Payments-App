const express = require("express")
const router = express.Router()
const userRouter = require('./user')

// api/v1/user/(anything) goes to userRouter defined in ./user.js
router.use('/user',userRouter)



module.exports = router