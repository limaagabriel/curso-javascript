var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(request, response) {
	response.render("index");
});

app.get("/login", function(request, response) {
	response.end("página de login");
});

app.listen(3000);