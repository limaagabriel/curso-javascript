var express = require("express");
var session = require("express-session");
var app = express();

app.use(session({
	secret: "salnoolhodocamarao",
	resave: false,
	saveUninitialized: false
}));

app.set("view engine", "ejs");

module.exports = app;