const mongodb = require("mongoose")
const Schema = mongodb.Schema

const TransactionSchema = new Schema({
    user_id:{type:String,require:true},
    homestay_id:{type:String,require:true},
    payment:{type:Number},
    amount:{type:Number,require:true},
    created:{type:Date,default:new Date()}
})

const Transaction = mongodb.model("Transaction",TransactionSchema)
module.exports = Transaction