const express = require('express')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose');

const app = express()

// mongoose.Schema.Types.Boolean.convertToFalse.add("");

// mongoose.connect("mongodb://localhost/api", {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// })

// const db = mongoose.connection;
// db.on("error", error => console.error(error));
// db.once("open", () => console.log("Connected to database"));


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json())

// const catalogRoutes = require("./routes/catalog")
// app.use("/api/catalog", catalogRoutes)


module.exports = app
