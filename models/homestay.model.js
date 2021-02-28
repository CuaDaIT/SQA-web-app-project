const { Mongoose } = require("mongoose");

const mongodb = require("mongoose")
const Schema = mongodb.Schema

const HomestaySchema = new Schema({
    catalog_name:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    address:{type:String,required:true},
    description:{type:String},
    roomtype:{type:Array},
    image_link:{type:Array}
})

const Homestay = mongodb.model("Homestay", HomestaySchema)
module.exports = Homestay