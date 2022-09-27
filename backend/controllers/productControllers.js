const Product = require("../models/productModel");

const createProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getProduct = async(req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
      } catch (err) {
        res.status(500).json(err);
    }
}

const updateProduct = async(req, res) => {
    const title = req.body.title;
    const id = req.body.id;
    // console.log(title)
    try {
        if(title){
            await Product.findById(id, (error, updateProd)=>{
                updateProd.title = title;
                updateProd.save();
            })
            res.status(200).json("Product Updated");
        } else{
            res.status(400).json("Invalid Input!")
        }      
      } catch (err) {
        res.status(500).json(err);
    }
}

const deleteProduct = async(req, res) => {
    const id = req.params.id;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json("The product has been deleted!");
      } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {createProduct, getProduct, updateProduct, deleteProduct}