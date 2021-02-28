const mongodb = require("mongoose")
const Schema = mongodb.Schema

const TransactionSchema = new Schema({
    user_id:{type:String,required:true},
    homestay_id:{type:String,required:true},
    payment:{type:Number},
    amount:{type:Number,required:true},
    created:{type:Date,default:new Date()}
})

const Transaction = mongodb.model("Transaction",TransactionSchema)
module.exports = Transaction