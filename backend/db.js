const mongoose = require('mongoose');
const dotenv = require("dotenv")

dotenv.config()

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fjnbm.mongodb.net/paytm`);

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String
});

const User = mongoose.model('User', userSchema);


module.exports = {
    User
};