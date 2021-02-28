const router = require('express').Router();
const Homestay = require("../models/homestay.model")

router.route("/").get((req,res)=>{
    Homestay.find()
    .then(homestay => res.json(homestay))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/getOne").post((req,res)=>{
    Homestay.findById(req.body._id)
    .then(homestay => res.json(homestay))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/").post((req,res)=>{
    let homestay = new Homestay(req.body)
    homestay.save()
    .then(homestay => res.json(homestay))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/').delete((req,res)=>{
    Homestay.findByIdAndDelete(req.body._id)
    .then(homestay=>res.json(homestay + "deleted!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route("/").put((req,res)=>{
    let filter = {"_id":req.params.id}
    let update = req.body.json
    Homestay.findByIdAndUpdate(filter,update)
    .then(()=>res.json("updated!"))
    .catch(err => res.status(400).json('Error: '+err))
})

router.route('/many').post((req,res)=>{
    try {
        let array = req.body
        for( let i =0; i<array.length;i++){
            let homestay = new Homestay(array[i])
            homestay.save()
        }
        res.json("added")
    } catch (error) {
        res.status(400).json(error)
    }
})

router.route("/deleteall").delete((req,res)=>{
    Homestay.remove()
    .then(()=>res.json("deleted all record!"))
    .catch(err => res.status(400).json('Error: '+err))
})

module.exports = router