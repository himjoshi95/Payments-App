const express = require('express')
const mainRouter = require('./routes/index')

const app = express()

// all requests to /api/v1/(anything) goes to mainRouter defined in routes/index.js
app.use('/api/v1', mainRouter)


// structure a chunck of your api to go to a single file and then another chunck to go to a single file

// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changePassword

// /api/v1/account/transferMoney
// /api/v1/account/balance


app.listen(3000, function (req, res) {
    console.log('Server Running on port 3000')
})

