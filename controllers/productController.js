const Product = require('../models/productModel');
//get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({message:'error fatching products'})
  }
}
//get product by id
exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: 'error fatching products' });
  }
}

//create new product
exports.createProduct = async(req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct)
  } catch (error) {
     res.status(5400).json({ message: 'error creating products' });
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "product not found" });
    res.json(updated)
  } catch (error) {
    res.status(400).json({ message: 'error updating products' });
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "product not found" });
    res.json({message:"product deleted successfully"});
  } catch (error) {
    res.status(400).json({message:"error deleting products"})
  }
}

