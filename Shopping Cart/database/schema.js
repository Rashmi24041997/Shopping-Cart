const mongoose = require('./db.js');

var schema = new mongoose.Schema({    

    item :{ 
        type : String,

        required : true 
    },

    price: { 
        type : String,

        required : true 
    }

    
});

var itemSchema = new schema({
   productId:{
        type: mongoose.schema.Type.ObjectId,
        ref:"Product"
    },
    quantity:{
        type : Number,
        required :true,
        min:[1,'Quantity can not be less then 1.']
    },
    price:{
        type : Number,
        required : true
    },
    total:{
        type : Number,
        required : true
    }
},{
    timestamps :true
})
const cartSchema = new schema({
    items :[itemSchema],
    subTotal :{
        default : 0,
        type : Number
    }
},{
    timestamps:true
})   
module.exports = mongooose.model('cart',CartSchema);

module.exports = mongoose.model("order",schema);