const mongodb = require("mongoose")
const Schema = mongodb.Schema

const newSchema = new Schema({
    title:{type:String,require:true},
    content:{type:String,require:true},
    image_link:{type:String,require:true},
    address:{type:String,require:true},
    created:{type:Date,default:new Date()}
})

const BoardNew = mongodb.model("New", newSchema)
module.exports = BoardNew