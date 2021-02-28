const mongodb = require("mongoose")
const Schema = mongodb.Schema

const ReviewSchema = new Schema({
    homestay_id:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    content:{type:String,required:true},
    created:{type:Date,default:new Date()}
})

const Review = mongodb.model("Review", ReviewSchema)
module.exports = Review