const mongoose = require('mongoose');
const { find } = require('./models/Person');
require("dotenv").config()
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    err ? console.log(err) : console.log("connectet to tata base")
});
const Person = require('./models/Person')
// const wajih=new Person({
//     name:"wajih",
//     age:25,
//     favoriteFoods:["mlo5iya","pizza"]
// })
// wajih.save().then((el)=>console.log(el)).catch((err)=>console.log(err))
// Person.create([{
//     name: "Salem",
//     age: 80,
//     favoriteFoods: ["morga", "kosksi"]
// }, {
//     name: "sama7",
//     age: 21,
//     favoriteFoods: ["lobya", "kosksi","pizza"]

// }, {
//     name: "7lima",
//     age: 30,
//     favoriteFoods: ["morga", "kosksi","frikasé"]

// }, {
    
//     name: "mongi",
//     age: 45,
//     favoriteFoods: ["morga", "kosksi","jben","lobya"]

// }])
// Person.find().then((el)=>console.log(el)).catch((err)=>console.log(err))

//Person.find({name:'mongi'},(err,docs)=>{if (err) {console.log(err) }else {console.log(docs)}})

//Person.findOne({favoriteFoods:"kosksi"},(err,docs)=>{if (err) {console.log(err) }else {console.log(docs)}})

//Person.findById('60e046dd81ea33241c949253',(err,docs)=>{if (err) {console.log(err) }else {console.log(docs)}})

//Person.findById('60e046dd81ea33241c949253',(err,docs)=>{if (err) {console.log(err) }else {console.log(docs.favoriteFoods.push('hamburger'));docs.save();console.log(docs)}})

//Person.findOneAndUpdate({name:'mongi'},{$set:{age:18}},{ new: true },(err,docs)=>{if (err) {console.log(err)}else {console.log(docs)}})

//Person.findByIdAndRemove('60e046dd81ea33241c949253',(err,docs)=>{if (err) {console.log(err) }else {console.log(docs)}})

//Person.remove({name:'mongi'},(err,docs)=>{if (err) {console.log(err) }else {console.log(docs)}})
//Person.findOne({name:'mongi'},(err,docs)=>{if (err) {console.log(err) }else {console.log(docs)}})

//Person.find({favoriteFoods:'kosksi'}).sort({name:1}).limit(2).select({age:0}).exec(done=(err,docs)=>{if (err) {console.log(err) }else {console.log(docs)}})

