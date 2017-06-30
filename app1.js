var express = require("express");
var app = express();
var mongoose = require("mongoose");
var config = require("./config");
var setupController = require("./controllers/setupController.js");
var apiController = require("./controllers/apiController");

var port = 3000;
app.use ("/assets", express.static(__dirname+"/public"));
app.set("view engine","ejs");
app.listen(port);

mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);

app.get("/text", function(req,res){
    res.send("<h1>hello world once again....<h1>");
});