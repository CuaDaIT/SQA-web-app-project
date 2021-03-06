const express = require('express');
const cors = require('cors');
const mongodb = require('mongoose');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const uri = "mongodb+srv://root:admin@cluster0.cs2pv.mongodb.net/homestayDatabase?retryWrites=true&w=majority";
mongodb.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongodb.connection;
connection.once('open', ()=>{
    console.log('MongoDB database connection established successfully')
});

const user = require("./routes/user.router")
const admin = require("./routes/admin.router")
const homestay = require("./routes/homestay.router")
const broad = require("./routes/broadnew.router")
const review = require("./routes/review.router")
const transaction = require("./routes/transaction.router")

app.use("/user",user)
app.use("/admin",admin)
app.use("/homestay",homestay)
app.use("/broad",broad)
app.use("/review",review)
app.use("/transaction",transaction)

app.get("/", function(req,res){
    res.sendFile("./index.html",{ root: __dirname })
})

app.listen(process.env.PORT || 5000)