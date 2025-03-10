//aqui se hacen todos los metodos del crud
//select, insert, update, delete


//crear un array de funciones
const productsController = {};
import productsModel from "../models/Products.js"

//SELECT*************************************************
productsController.getProducts = async (req, res) =>{
    const products =await productsModel.find()
    res.json(products)
}

//INSERT*************************************************
productsController.insertProducts = async (req, res) =>{
    const { name, description, price, stock } =req.body;
    const newProduct = new productsModel({name, description, price, stock})
    await newProduct.save()

    res.json({message: "Product saved"})
}

//DELETE*************************************************
productsController.deleteProducts = async (req, res) =>{
    await productsModel.findByIdAndDelete(req.params.id)

    res.json({message: "Product deleted"})
}

//UPDATE*************************************************
productsController.updateProducts = async (req, res) =>{
    const { name, description, price, stock } =req.body;
    const updateProducts = await productsModel.findByIdAndUpdate(req.params.id, {name, description, price, stock}, {new:true})

    res.json({message: "Products updated successfully"})
};

export default productsController;
