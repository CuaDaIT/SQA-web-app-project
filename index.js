const express = require('express');
const cors = require('cors');
const mongodb = require('mongoose');

const app = express();
const port = 5000;

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

app.use("/user",user)
app.use("/admin",admin)
app.use("/homestay",homestay)
app.use("/broad",broad)
app.use("/review",review)

app.listen(port,()=>{
    console.log("server running on port"+port)
});