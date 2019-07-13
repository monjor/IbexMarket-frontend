//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));


app.get("/", function(req, res) {
res.render("index");
});



app.get("/contact", function(req, res) {
res.render(__dirname+'/views/contact');
});


app.get("/categories", function(req, res) {
res.render(__dirname+'/views/categories');
});



app.get("/single", function(req, res) {
res.render(__dirname+'/views/single');
});

app.get("/signin", function(req, res) {
res.render(__dirname+'/views/signIn');
});

app.get("/signup", function(req, res) {
res.render(__dirname+'/views/signUp');
});


app.listen(4000, function() {
  console.log("Server stated on port 4000");
});
