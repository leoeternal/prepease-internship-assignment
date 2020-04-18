var mongoose=require("mongoose");

var productSchema=new mongoose.Schema({
    productName:{
        type:String
    },
    productDescription:{
        type:String
    },
    price:{
        type:Number
    },
    quantityLeft:{
        type:Number
    },
    discount:{
        type:Number
    },
    modelNumber:{
        type:String
    },
    productImage:{
        type:String
    }
});

var Product=mongoose.model("Product",productSchema);

module.exports=Product;