const mongoose = require('mongoose');
const dotenv = require("dotenv");


dotenv.config()

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fjnbm.mongodb.net/paytm`);

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required:true
    }
})

const User = mongoose.model('User', userSchema)
const Account = mongoose.model('Account',accountSchema)


module.exports = {
    User,
    Account
};