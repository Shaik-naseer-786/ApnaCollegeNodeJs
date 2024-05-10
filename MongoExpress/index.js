const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));



main().then((res)=>{
    console.log("connection succesfull!")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatpsapp');
}


app.listen(3000,(req,res)=>{
    console.log("listening port number 3000");

})
app.get("/",(req,res)=>{
    res.send("working fine!");
})