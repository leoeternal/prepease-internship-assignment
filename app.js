var express=require("express");
var bodyParser=require("body-parser");
var mongoose=require("mongoose");

var app=express();

var port=process.env.POPT || 3000;

var Form=require("./models/form");

app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","ejs");

mongoose.connect('mongodb+srv://abc:abc@cluster0-daaap.mongodb.net/test?retryWrites=true&w=majority');

app.get("/",function(req,res)
{
    res.render("login",{errorMessage:""});
})

app.post("/details",function(req,res)
{
    var name=req.body.name;
    var password=req.body.password;
    Form.find({},function(err,findAllUsers){
        if(err)
        {
            console.log(err);
        }
        else
        {
            for(var i=0;i<findAllUsers.length;i++)
            {
                if(findAllUsers[i].name==name)
                {
                    return res.render("login",{errorMessage:"Name is invalid or already taken"})
                }
            }
            Form.create({name:name,password:password},function(err,formcreated){
                if(err){
                    return console.log(err);
                }else{
                    res.redirect("/show/users");
                }
            })
        }
    })
})

app.get("/show/users",function(req,res)
{
    Form.find({},function(err,userShow){
        if(err)
        {
            return console.log(err);
        }
        else{
            res.render("home",{userShow:userShow});
        }
    })
})

app.listen(port,function(){
    console.log("server has started on port "+port );
})