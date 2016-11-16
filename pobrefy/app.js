var express = require("express");
var app = express();
var formidable = require("formidable");

app.set("view engine", "ejs");

app.get("/", function(request, response) {
	response.render("index");
});

app.get("/login", function(request, response) {
	response.end("página de login");
});

app.get("/cadastro", function(request, response) {
	response.render("cadastro");
});

app.post("/cadastrar", function(request, response) {
	//ler o formulário
	var form = formidable.IncomingForm();
	
	form.parse(request, function(error, fields) {
		//	Eu tenho os dados do formulário! YAY
		console.log(fields.email);
	});

	//salvar no banco de dados
	//manda pra tela de login
});

app.listen(3000);