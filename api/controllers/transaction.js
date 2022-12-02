const Transaction = require("../models/transaction.models")
const User = require("../models/user.models")
const requireLogin = require("../middlewares/requireLogin")

const deposit = async (req, res)=>{
    let {amount} = req.body;
    let details ={
        amount:amount,
        user: req.user,
        approval: true,
        type: 1
    }
    new Transaction(details).save()
    .then(resp => res.status(200).json(resp))
    .catch(err => res.status(400).json(err))
}

const requestForWithdrawal = async (req, res)=>{
    let {amount} = req.body;
    let details ={
        amount:amount,
        user: req.user,
        approval: true,
        type: 2
    }
    new Transaction(details).save()
    .then(resp => res.status(200).json(resp))
    .catch(err => res.status(400).json(err))
}

const approveWithdrawal = async (req, res)=>{

}

const getUserTransactions = async (req, res)=>{
    let user = req.user;
    Transaction.find({user: user})
    .then(resp => res.status(200).json(resp))
    .catch(err => res.status(400).json(err))
}

const getTransaction = async (req, res)=>{
    const {id} = req.params.id;
    Transaction.findById(id)
    .then(resp => res.status(200).json(resp))
    .catch(err => res.status(400).json(err))
}

const getAllTransactions = async (req, res)=>{
    Transaction.find()
    .then(resp => res.status(200).json(resp))
    .catch(err => res.status(400).json(err))
}

module.exports = {
    deposit,
    requestForWithdrawal,
    approveWithdrawal,
    getUserTransactions,
    getTransaction,
    getAllTransactions
}