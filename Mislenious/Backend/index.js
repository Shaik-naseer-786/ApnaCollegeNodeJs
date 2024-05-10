const express=require('express');
const app=express();
let port=3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/register",(req,res)=>{
    let {user,pass}=req.query;
    
    res.send(`get method ,welcome ${user}`);
})
app.listen(port,()=>{
    console.log(`listening port number ${port}`);
})
app.post("/register",(req,res)=>{
    // console.log(req.body);
    let {user,pass}=req.body;

    res.send(`post method ,welcome  ${user}`)
})