const transaction = require("../models/transaction.models")
const User = require("../models/user.models")
const jwt_secret = process.env.JWT_SECRET
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signIn = async (req, res)=>{
    const {email, password} = req.body;
    await User.findOne({email})
    .then(user=>{
        if(!user){
            res.json({message: "There is no user with this message"})
        }
        else{
            bcrypt.compare(password, user.password)
            .then(doMatch =>{
                if(doMatch){
                    const token = jwt.sign({_id: user._id}, jwt_secret)
                    res.json({token: token, message: "Signed In Successfully", user: user})
                }
                else{
                    res.status(403).json({message: "Wrong Password"})
                }
            })
        }
    })
    .catch(err => res.status(400).json(err))
}

const signUp = async (req, res)=>{
    const userDetails = req.body;
    // console.log(userDetails)
    const {password} = req.body
    User.findOne({email: userDetails.email})
    .then(resp =>{
        if(!resp){
            console.log(password)
            bcrypt.hash(password, 8)
        .then(hashedPassword => {
        userDetails.password = hashedPassword;
        const newUser = new User(userDetails);
        newUser.save()
        .then(resp =>{
            User.findById(resp._id)
            .then(user=>{
                if(!user){
                    res.json({message: "An Error Occured"})
                }
                else{
                    bcrypt.compare(password, user.password)
                    .then(doMatch=>{
                        if(doMatch){
                            const token = jwt.sign({_id:user._id}, jwt_secret);
                            res.json({token: token, message:"Successful", user: user})
                        }
                        else{
                            res.json({message: "Wrong Password"})
                        }
                    })
                }
            })
        })
        .catch(err => res.status(400).json({
            error: err, 
            message: "An Error Occured"
        }))
    }).catch(err => res.status(400).json({
        error: err, 
        message: "An Error Occured"
    }))
    }
    else{
        res.status(403).json({message: "This email is attached to an account"})
    }

    })
    .catch(err => res.status(400).json({
    error: err, 
    message: "An Error Occured"
        }))
    }

const update = async (req, res)=>{
    const user = req.user
    const details = req.body;
    User.findOneAndUpdate({_id: user._id}, details, {new: true})
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json(err))
}

module.exports = {
    signIn,
    signUp,
    update
}