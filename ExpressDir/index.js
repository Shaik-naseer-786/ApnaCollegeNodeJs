const express = require('express')
const app = express()

// console.dir(app);
let port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.use((req,res)=>{
//     console.log("req recived!");
//     res.send("this is a basic response!")
// })


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)
app.get("/",(req,res)=>{
    res.send("welcome,this is a root !")
})
// app.get('/naseer',(req,res)=>{
//     res.send("goodmornig,.hello this is naseer")
// })
// app.get("*",(req,res)=>{
//     res.send("this path is not exits")
// })
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`wlcome,hello this is @${username}`);
})
