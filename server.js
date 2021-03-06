
//TODO - Have full CRUD functionality
/* 
  CRUD Functionality
  C-reate
  R-ead
  U-pdate
  D-estroy
*/

// External Modules
const express = require("express");
const methodOverride = require("method-override");
const db = require("./models")

// Internal Modules
const controller = require("./controllers")  //? ./controllers/movieController.js
// Instanced Modules
const app = express();

// Configuration Variables
const PORT = 4001
require("dotenv").config();

// App Configuration
app.set("view engine", "ejs")

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));


// Session middleware takes in a config object

// Logger Middleware (helper tool) - make sure to pass in req object, resp object, and next

// Controllers


app.use("/actors", controller.actorRoute);
app.use("/movies", controller.movieRoute);


// Homepage
app.get("/", function (req, res) {
    res.render("home")
})

// Server Bind
app.listen(PORT, () => {console.log("Server is up and running")});




