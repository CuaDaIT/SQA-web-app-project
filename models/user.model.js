const mongodb = require("mongoose")
const Schema = mongodb.Schema

const UserSchema = new Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    phone:{type:String,require:true},
    address:{type:String,require:true},
    password:{type:String,require:true},
    created:{type:Date,default:new Date()}
})

const User = mongodb.model("User", UserSchema)
module.exports = User