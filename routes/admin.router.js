const router = require('express').Router();
const Admin = require("../models/admin.model")

router.route("/").get((req,res)=>{
    Admin.find()
    .then(admins => res.json(admins))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/").post((req,res)=>{
    Admin.findById(req.body._id)
    .then(admin => res.json(admin))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/add").post((req,res)=>{
    let username = req.body.name
    let password = req.body.password

    let admin = new Admin({username,password})

    admin.save()
    .then(()=>res.json("added!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/delete').delete((req,res)=>{
    Admin.findByIdAndDelete(req.body._id)
    .then(admin=>res.json(admin + "deleted!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/update").put((req,res)=>{
    let filter = {"_id":req.params.id}
    let update = req.body.json
    ADmin.findByIdAndUpdate(filter,update)
    .then(()=>res.json("updated!"))
    .catch(err => res.status(400).json('Error: '+err))
})

module.exports = router