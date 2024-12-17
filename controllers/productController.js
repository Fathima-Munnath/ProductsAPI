

const ProductData = require('../models/product')
const getProducts = async (req,res)=>{
   try{
    const products = await ProductData.find()
    res.status(200).json(products)

   } catch (error){
    res.status(500).json({error:error.message})

   }


}

//get product basesd on id
const getProductById = async (req,res)=>{
    try{
        const productID = req.params.id
        const product = await ProductData.findById(productID)
        if(!product)return res.status(404).json({message:'Product not found'})
        res.status(200).json(product)
    
       } catch (error){
        res.status(500).json({error:error.message})
    
       }

}
//create
const createProduct = async(req,res)=>{
    try{
        const {name,price,description,image} = req.body
        const newProduct = new ProductData({name,price,description,image})
        await newProduct.save()
        res.status(201).json(newProduct)
    }catch (error){
        res.status(500).json({error:error.message})

    }

}
//update
const updateProduct = async (req,res)=>{
    try{
        const productID = req.params.id
        const product = await ProductData.findByIdAndUpdate(productID,req.body,{new:true})
        if(!product)return res.status(404).json({message:'Product not found'})
        res.status(200).json(product)
    
       } catch (error){
        res.status(500).json({error:error.message})
    
       }

}

//delete
const deleteProduct = async (req,res)=>{
    try{
        const productID = req.params.id
        const product = await ProductData.findByIdAndDelete(productID,req.body,{new:true})
        if(!product)return res.status(404).json({message:'Product not found'})
        res.status(200).json({message:"Product deleted successfully"})
    
       } catch (error){
        res.status(500).json({error:error.message})
    
       }

}

module.exports = {getProducts,getProductById,createProduct,updateProduct,deleteProduct}