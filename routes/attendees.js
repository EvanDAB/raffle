var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql');

//you need this to be able to process information sent to a POST route
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

var path = require("path");

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "raffle_sei_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})
router.get('/test', function(req, res){
    console.log('test page running');
});

router.get('/attendees', function(req, res){
  connection.query('SELECT * FROM attendees', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

router.get('/new', function(req, res){
	res.sendFile(path.join(__dirname, "../public/new.html"));
});

router.post('/create', function(req, res){
	console.log(req.body);

	var query = connection.query(
	  "INSERT INTO attendees SET ?",
	  req.body,
	  function(err, response) {
	    res.redirect('/');
	  }
	);
})

module.exports = router;