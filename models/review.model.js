const mongodb = require("mongoose")
const Schema = mongodb.Schema

const ReviewSchema = new Schema({
    homestay_id:{type:String,require:true},
    name:{type:String,require:true},
    email:{type:String,require:true},
    content:{type:String,require:true},
    created:{type:Date,default:new Date()}
})

const Review = mongodb.model("Review", ReviewSchema)
module.exports = Review