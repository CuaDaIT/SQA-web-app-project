const router = require('express').Router();
let User = require("../models/user.model")

router.route("/").get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/").post((req,res)=>{
    User.findById(req.body._id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/add").post((req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const address = req.body.address
    const password = req.body.password

    let user = new User({name,email,phone,address,password})
    user.save()
    .then(()=>res.json("added!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/delete').delete((req,res)=>{
    User.findByIdAndDelete(req.body._id)
    .then(user=>res.json(user + "deleted!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/update").put((req,res)=>{
    let filter = {"_id":req.params.id}
    let update = req.body.json
    User.findByIdAndUpdate(filter,update)
    .then(()=>res.json("updated!"))
    .catch(err => res.status(400).json('Error: '+err))
})

module.exports = router