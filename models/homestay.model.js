const { Mongoose } = require("mongoose");

const mongodb = require("mongoose")
const Schema = mongodb.Schema

const HomestaySchema = new Schema({
    catalog_name:{type:String,require:true},
    name:{type:String,require:true},
    price:{type:Number,require:true},
    address:{type:String,require:true},
    description:{type:String},
    image_link:{type:String}
})

const Homestay = mongodb.model("Homestay", HomestaySchema)
module.exports = Homestay