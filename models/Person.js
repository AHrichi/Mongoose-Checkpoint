const mongoose=require('mongoose')
const Person_Prototype= new mongoose.Schema({
    name:{type:String,required:true},
    age: Number,
    favoriteFoods: [String]
})
module.exports=Person=mongoose.model("Person",Person_Prototype)
