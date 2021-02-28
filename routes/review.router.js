const router = require('express').Router();
const Review = require("../models/review.model")

router.route("/").get((req,res)=>{
    Review.find()
    .then(review => res.json(review))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/").post((req,res)=>{
    Review.findById(req.body._id)
    .then(review => res.json(review))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/add").post((req,res)=>{
    let review = new Review(req.body)
    review.save()
    .then(()=>res.json("added!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/delete').delete((req,res)=>{
    Review.findByIdAndDelete(req.body._id)
    .then(review=>res.json(review + "deleted!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/update").put((req,res)=>{
    let filter = {"_id":req.params.id}
    let update = req.body.json
    Review.findByIdAndUpdate(filter,update)
    .then(()=>res.json("updated!"))
    .catch(err => res.status(400).json('Error: '+err))
})

module.exports = router