// const express = require('express')
// const dotenv = require('dotenv')  in place of this we use import because ES6 version of js are allow to use that
import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'

import bookroute from './route/book.route.js'
import userroute from './route/user.route.js'

const app = express()

app.use(cors());

dotenv.config();
app.use(express.json())

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI

try{
  await mongoose.connect(URI)
console.log("connected to mongodb")

}
catch(error)
{
  console.log("error", error);
}

//defining routes
app.use('/book',bookroute)
app.use('/user',userroute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
