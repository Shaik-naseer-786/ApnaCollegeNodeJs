const fs=require('fs');

// fs.readFile('example.txt','utf8',(err,data)=>{
//     if(err){
//         console.log("error");
//         return;
//     }
//     else{
//         console.log(data);
//     }
// })

// writing into filesystem

fs.writeFile('example.txt','Hello  this is naseer once again ',(err)=>{
    if(err){
        console.log("error");
        return        
    }
    else{
        console.log("writed successfully")
    }
});