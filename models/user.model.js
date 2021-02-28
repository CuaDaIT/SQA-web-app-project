const mongodb = require("mongoose")
const Schema = mongodb.Schema

const UserSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true,dropDups: true},
    phone:{type:String,required:true},
    address:{type:String,required:true},
    password:{type:String,required:true},
    created:{type:Date,default:new Date()}
})

const User = mongodb.model("User", UserSchema)
module.exports = User