const mongoose = require('mongoose');

main().then((res)=>{
    console.log("connection succesfull!")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema);
// User.insertMany([
//     {name:"äbdul",email:"abch@gmail.com",age:33},
//     {name:"naveen",email:"skdnks@gmail.com",age:30},
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// User.find().then((data)=>{
//     console.log(data);
// })
// User.find({age:{$gt:30}}).then((res)=>{
//     console.log(res);
// })

// User.updateOne({name:"naveen"},{age:40}).then((res)=>{
//     console.log(res);
// })

// User.updateMany({age:{$gt:20}},{age:21}).then((res)=>{
//     console.log(res);
// })

// User.findOneAndUpdate({name:"naveen"},{age:35},{new:true}).then((res)=>{
//     console.log(res);
// })

User.deleteOne({name:"naveen"}).then((res)=>{
    console.log(res);
})