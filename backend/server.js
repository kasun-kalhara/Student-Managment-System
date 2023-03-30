const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const port = process.env.port || 8070;

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
       //useCreateIndex: true,
       //useNewUrlParser: true,
       //useUnifiedTopologyL: true,
       //useFindAndModify: false

});

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb connection succeful");
})

const studentrouter = require("./routes/students.js");
app.use("/student",studentrouter);

app.listen(port,() => {
    console.log('server is up and running on port')
})