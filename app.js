const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const cors = require('cors')
require('dotenv').config()




const app =express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())
app.post('/login',(req,res)=>{
  //Authenticate
  
  //token creation
  const username = req.body.username
  const user = {name:username}
  const secretKey = process.env.JWT_SECRET_KEY
  const token = jwt.sign(user,secretKey)
  res.json({accesstoken:token})


})


const productRouter = require('./routers/productRouter')
const userRouter = require('./routers/userRouter')

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/products', productRouter)
app.use('/users', userRouter)


const mongourl = process.env.MONGODB_URL

async function main() {
  await mongoose.connect(mongourl);
}

main()
.then(()=>console.log("Database connected"))
.catch(err => console.log(err));


//const productData = require('./models/product')


app.listen(3000,()=>{
    console.log ("Server started")

})