const router = require('express').Router();
const Transaction = require("../models/transaction.model")
const Homestay = require("../models/homestay.model")

router.route("/").get((req,res)=>{
    Transaction.find()
    .then(transaction => res.json(transaction))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/getOne").post((req,res)=>{
    Transaction.findById(req.body._id)
    .then(transaction => res.json(transaction))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/").post((req,res)=>{
    let user_id = req.body.user_id
    let homestay_id = req.body.homestay_id
    let amount = req.body.amount
    let payment = 0
    
    Homestay.findById(homestay_id)
    .then(homestay => {
        payment = homestay.price*amount
        homestay_name = homestay.name

        const transaction = new Transaction({user_id,homestay_id,homestay_name,amount,payment})    
        transaction.save()
        .then(transaction => res.json(transaction))
        .catch(err => res.status(400).json('Error: '+err))
    })
})

router.route('/').delete((req,res)=>{
    Transaction.findByIdAndDelete(req.body._id)
    .then(transaction=>res.json(transaction + "deleted!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/history').post((req,res)=>{
    Transaction.find({'user_id':req.body.user_id})
    .then(history=>res.json(history))
    .catch(err => res.status(400).json('Error: '+err))
})

module.exports = router