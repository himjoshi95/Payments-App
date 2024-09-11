const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://himanshujoshi1012:Pl7K9hr6KtTagiNq@cluster0.fjnbm.mongodb.net/paytm');

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