const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
require('dotenv').config()

const app = express()
const port = process.env.PORT || 2322

app.listen(() => console.log(`Server is now running on: http://localhost:${port}`))