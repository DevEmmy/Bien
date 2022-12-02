const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
require('dotenv').config()
const bodyParser = require("body-parser")
const userRouter = require("./routes/userRoutes")

const app = express()
const port = process.env.PORT || 2322
const uri = process.env.DB_URI || "mongodb://127.0.0.1:27017/bien"

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: false}));

app.use(cors({
    origin: process.env.FRONTEND_URL || "*",
}))

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection
connection.once('open', ()=>{console.log('Database running Successfully')})

app.use("/auth", userRouter)


app.listen(port, () => console.log(`Server is now running on: http://localhost:${port}`))