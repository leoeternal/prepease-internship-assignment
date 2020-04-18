var mongoose=require("mongoose");

var cartSchema=new mongoose.Schema({
    products:[{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        },
        productName:{
            type:String
        },
        price:{
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
    }],
    numberOfProdcuts:{
        type:Number
    },
    totalPrice:{
        type:Number
    }
});

var Cart=mongoose.model("Cart",cartSchema);

module.exports=Product;