var mongoose=require("mongoose");

var formSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

var Form=mongoose.model("Form",formSchema);

module.exports=Form;