const router = require('express').Router();
const News = require("../models/broadnew.model")

router.route("/").get((req,res)=>{
    News.find()
    .then(news => res.json(news))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/").post((req,res)=>{
    News.findById(req.body._id)
    .then(news => res.json(news))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/add").post((req,res)=>{
    let news = new News(req.body)
    news.save()
    .then(()=>res.json("added!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/delete').delete((req,res)=>{
    News.findByIdAndDelete(req.body._id)
    .then(news=>res.json(news + "deleted!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/update").put((req,res)=>{
    let filter = {"_id":req.params.id}
    let update = req.body.json
    News.findByIdAndUpdate(filter,update)
    .then(()=>res.json("updated!"))
    .catch(err => res.status(400).json('Error: '+err))
})

module.exports = router