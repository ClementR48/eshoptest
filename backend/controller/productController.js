const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error){
    res.status(500).json({message:"error server"});
  }
}


const getProductsById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.json(product);
  } catch (error){
    res.status(500).json({message:"error server"});
  }
}

module.exports= {
  getAllProducts,
  getProductsById,
}