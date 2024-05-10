const express=require("express");
const app=express();
const path=require("path");

const port=3000;
app.listen(port,()=>{
    console.log(`port is listening ${port}`);
})
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
// app.get("/",(req,res)=>{
//     res.render("home.ejs");
// })
app.get("/",(req,res)=>{
    res.send("Hello guys!");
})
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    res.render("instagram.ejs",{username});
})
app.get("/naseer",(req,res)=>{
    res.send("hello naseer")
})