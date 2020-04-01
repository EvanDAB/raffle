var port = 4000;
var mysql = require("mysql");
var express = require('express')
var app = express()
var methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static("public"));

var attendeeRoutes = require('./routes/attendees.js');
app.use('/attendees', attendeeRoutes);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))