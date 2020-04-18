var mongoose=require("mongoose");

var userSchema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    profileimage:{
        type:String,
        default:'we can specify here any dummy userphoto link now and later update this link when user will upload the photo'
    },
    date:{
        type:Date,
        default:Date.now
    },
    address:{
        type:String
    },
    cart:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Cart"
        },
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
    }
});

var User=mongoose.model("User",userSchema);

module.exports=User;