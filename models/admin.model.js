const mongodb = require("mongoose")
const Schema = mongodb.Schema

const AdminSchema = new Schema({
    username:{type:String,require:true},
    password:{type:String,require:true}
})

const Admin = mongodb.model("Admin", AdminSchema)
module.exports = Admin