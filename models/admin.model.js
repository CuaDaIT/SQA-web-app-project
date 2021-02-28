const mongodb = require("mongoose")
const Schema = mongodb.Schema

const AdminSchema = new Schema({
    username:{type:String,required:true,unique:true,dropDups: true},
    password:{type:String,required:true}
})

const Admin = mongodb.model("Admin", AdminSchema)
module.exports = Admin