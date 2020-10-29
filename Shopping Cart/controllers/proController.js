
//const  replaceOne  = require("./database/schema");
const proRepo = require("./repo");

const cartRepo  = require("./repo")

exports.createProduct = async(req,res) =>{
    try{
        let payload = {
            name : req.body.item,
            price : req.body.price
        }
        let product = await proRepo.createProduct(req.body);
        res.status(200).json({
            status:true,
            data: product,
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            error:err,
            status:false,
        })
    }
}
exports.getProducts = async(req,res) =>{
    try{
        let products = await proRepo.products();
        res.status(200).json({
            status:true,
            data : products
        })
    }
    catch(err){
        res.status(500).json({
            error :err,
            status :false
        })
    }
}
exports.getProductById = async(req,res) =>{
    try{
        let id = req.prams.id
        let productDeatils = 
        await proRepo.productById(id);
        res.status(200).json({
            status:true,
            data : products
        })
    }
    catch(err){
        res.status(500).json({
            error :err,
            status :false
        })
    }
}
exports.removeProduct = async(req,res) =>{
    try{
        let id = req.prams.id
        let productDeatils = 
        await proRepo.productById(id);
        res.status(200).json({
            status:true,
            data : products
        })
    }
    catch(err){
        res.status(500).json({
            error :err,
            status :false
        })
    }
}
