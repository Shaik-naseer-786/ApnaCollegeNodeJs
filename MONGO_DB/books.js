const mongoose = require('mongoose');

main().then((res)=>{
    console.log("connection succesfull!")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema=new mongoose.Schema({
    tittle:{
        type:String,
        require:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    }
    
})

const Book=new mongoose.model("Book",bookSchema);
let b1=new Book({tittle:"KGF",author:"abdul",price:1200});
b1.save().then((res)=>{
    console.log("res");
}).catch((err)=>{
    console.log(err);
});