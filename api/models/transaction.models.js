const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    type: {type: Number, default: 0},
    approval: {type: Boolean, default: false},
    amount: {type: Number, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User"}
},
{
    timestamps: true
});