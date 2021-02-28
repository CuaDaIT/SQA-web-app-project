const router = require('express').Router();
let User = require("../models/user.model");
const { route } = require('./admin.router');

router.route("/").get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/getOne").post((req,res)=>{
    User.findById(req.body._id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/").post((req,res)=>{
    let user = new User(req.body)
    user.save()
    .then(()=>res.json("added!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/').delete((req,res)=>{
    User.findByIdAndDelete(req.body._id)
    .then(user=>res.json(user + "deleted!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/").put((req,res)=>{
    let filter = {"_id":req.params.id}
    let update = req.body.json
    User.findByIdAndUpdate(filter,update)
    .then(()=>res.json("updated!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/login").post((req,res)=>{
    User.findOne({"email":req.body.email})
    .then(user => {
        if(user.password === req.body.password){
            res.json(user)
        }else{
            res.json("false")
        }
    })
    .catch(() => res.json("Not Found!"))
})

module.exports = router