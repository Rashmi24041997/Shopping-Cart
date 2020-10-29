const express = require("express");

const app = express();

const bodyparser = require("body-parser");

const path = require("path");

const pctrlr = require("./controllers/proController")

var order = require("./database/schema");

//const proRepo = require("../repo/repo");

app.engine("html",require("ejs").renderFile);

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended : true }));

app.use(express.static("public"));

app.set("view engine","ejs");

app.set("views", __dirname + "/views"); 

app.post("/",pctrlr.createProduct)

app.get("/",pctrlr.getProducts);

app.get("/:id",pctrlr.getProductById);
 
//app.get(/)
app.delete("/:id",pctrlr.removeProduct);

/*app.post("/create",function(req,res){

    console.log("done");
    var obj = new order(req.body);

    console.log(req.body);

    res.render("create.ejs");

    obj.save().then((data) => {

        res.send(data);
    } );
   /* catch((err) => {
        res.status(500).send({
            message : " Sorry, error occurred " +err
        });
    }
});*/
app.listen(3000,(err)=>{
    if(!err){
        console.log("Server listening on port 3000");
    }
    else
        message : " Error occurred" + err;
});
