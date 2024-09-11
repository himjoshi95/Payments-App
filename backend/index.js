const express = require('express')
const mainRouter = require('./routes/index')

const app = express()

// all requests to /api/v1 goes to mainRouter
app.use('/api/v1', mainRouter)


app.listen(3000, function (req, res) {
    console.log('Server Running on port 3000')
})

