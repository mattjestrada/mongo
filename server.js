var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var mongojs = require("mongojs");


// port is the host's designated port or 3000 when ran on your local machine
var PORT = process.env.PORT || 3000;

// initiate express app
var app = express();

// set up express router
var router = express.Router();

// require routes file pass our router object
require("./config/routes")(router);

// set up static folders. This tells app to look in public folder
// and display main at the root
app.engine("handlebars", expressHandlebars ({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// database configuration
var databaseURL = "scraper";
var collections = ["scrapedData"];

// use bodyParser in our app
app.use(bodyParser.urlencoded({
    extended: false
}));

// every request should go through our router middleware
app.use(express.static('public'));

// if deployed use deployed database. Otherwise use the local mongoHeadlines
var databaseUri = "mongodb://localhost/mongoHeadlines";

if (process.env.MONGODB_URI) {
	mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds255767.mlab.com:55767/heroku_225zrcbh")
} else {
	mongoose.connect(databaseUri);
}

var db = mongoose.connection;

db.on('error', function(err) {
	console.log('Mongoose Error: ', err);
});

db.once('open', function() {
	console.log('Mongoose connection successful.');
});

//listen on port 3000
app.listen(PORT, function(){
    console.log("App running on" + PORT);
});
