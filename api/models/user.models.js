const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {type: String},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    phoneNumber: {type: String},
    address: {type: String},
    verificationId: {type: String},
    accountNumber: {type: Number},
    bankName: {type: String},
    balance: {type:Number},
    plan: {type:Number},
    dps: {type: Date},
    pin: {type: Number}
},
{
    timestamps: true
})

const User = mongoose.model("User", userSchema);
module.exports = User;