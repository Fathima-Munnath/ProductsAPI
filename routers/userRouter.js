const express = require('express')
const userRouter = express.Router()  
const {addUser,login, Getlogin}= require('../controllers/userController.js')



userRouter.post('/',addUser) 
userRouter.post('/login',login) 
userRouter.get('/login',Getlogin) 

module.exports =userRouter
