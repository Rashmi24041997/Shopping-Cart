const Shopping = require("./database/schema");

exports.products = async () =>{
    const product = await Shopping.find();
    return products; 
}

exports.productById = async id  =>{
    const product = await Shopping.findById(id);
    return product; 
}
exports.createProduct = async payload =>{
    const newProduct = await Shopping.create(payload);
    return newProduct; 
}
exports.removeProduct = async id  =>{
    const product = await Shopping.findByIdAndRemove(id);
    return product; 
}
const cart = require("./schema");
exports.cart = async()=>{
    const carts = await cart.find().populate({
        path : "items.productId",
        select : " name price total "
    });
    return carts[0];
}
exports.addItem = async payload =>{
    const newItem  = await cart.create(payload);
    return newItem;
}