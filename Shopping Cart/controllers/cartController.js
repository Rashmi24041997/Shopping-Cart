const cartRepo = require('./repo')
exports.addItemToCart = async(req,res)=>{
    const {
        productId
    } = req.body;

    const quantity = 
    Number.parseInt(req.body.quantity);
    try{
        let cart = await cartRepo.cart();
        let productDetails = await 
        proRepo.productById(productId);
        if(!productDetails){
            return res.status(500).json({
                type :"not found",
                message : "Invalid request"
            })
        }
        if(cart){
            const found = cart.items.findIndex(
                item => item.productId.id == productId);
            
            }
            if(found != -1 && quantiity <= 0){
                cart.items.splice(found,1);
                if(cart.items.length == 0){
                cart.subTotal = 0 ;
            }
            else{
                cart.subTotal = cart.items.map(
                    item => item.total).reduce((acc,next)=>
                    acc+next);
            }
        }
        else if(found!=-1){
            cart.items[found].quantity = 
            cart.items[found].quantity+quantity;
            cart.items[found].total = 
            cart.items[found].quantity*
            productDetails.price;
            cart.items[found].price = 
            productDetails.price;  
            cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
        }
//----Check if quantity is greater than 0 then add item to items array ----
        else if (quantity > 0) {
            cart.items.push({
                productId: productId,
                quantity: quantity,
                price: productDetails.price,
                total: parseInt(productDetails.price * quantity)
            })
            cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
        }
//----If quantity of price is 0 throw the error -------
        else {
            return res.status(400).json({
                type: "Invalid",
                msg: "Invalid request"
            })
        }
        let data = await cart.save();
        res.status(200).json({
            type: "success",
            mgs: "Process Successful",
            data: data
        })    
    }
    
//------------ This creates a new cart and then adds the item to the cart that has been created------------
        
    catch (err) {
            console.log(err)
            res.status(400).json({
                type: "Invalid",
                msg: "Something Went Wrong",
                err: err
            })
        }
        finally {
            const cartData = {
                items: [{
                productId: productId,
                quantity: quantity,
                total: parseInt(productDetails.price * quantity),
                price: productDetails.price
                }],
                subTotal: parseInt(productDetails.price * quantity)
            }
        cart = await cartRepository.addItem(cartData)
            // let data = await cart.save();
                res.json(cart);
        }
    
    
exports.getCart = async (req, res) => {
    try {
        let cart = await cartRepository.cart()
        if (!cart) {
            return res.status(400).json({
                type: "Invalid",
                msg: "Cart not found",
        })
}
res.status(200).json({
        status: true,
        data: cart
    })
} 
catch (err) {
        console.log(err)
        res.status(400).json({
            type: "Invalid",
            msg: "Something went wrong",
            err: err
        })
    }
}
exports.emptyCart = async (req, res) => {
try {
        let cart = await cartRepository.cart();
        cart.items = [];
        cart.subTotal = 0
        let data = await cart.save();
        res.status(200).json({
            type: "Success",
            mgs: "Cart has been emptied",
            data: data
        })
    } 
catch (err) {
            console.log(err)
            res.status(400).json({
            type: "Invalid",
            msg: "Something went wrong",
            err: err
        })
    }
}
}
