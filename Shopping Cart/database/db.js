const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Shoppingdb",{ useUnifiedTopology:true, useNewUrlParser:true},function(err,doc){
    if(!err){
        console.log("Success");
    }
    else{
        console.log("Error"+err);
    }
});
module.exports = mongoose; 