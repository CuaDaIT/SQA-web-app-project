const mongodb = require("mongoose")
const Schema = mongodb.Schema

const newSchema = new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    image_link:{type:String,required:true},
    address:{type:String,required:true},
    created:{type:Date,default:new Date()}
})

const BoardNew = mongodb.model("New", newSchema)
module.exports = BoardNew