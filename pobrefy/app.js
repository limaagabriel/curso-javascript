var express = require("express");
var app = express();
var formidable = require("formidable");
var mysql = require("mysql2");

app.set("view engine", "ejs");

app.get("/", function(request, response) {
	response.render("index");
});

app.get("/login", function(request, response) {
	response.render("login");
});

app.post("/login", function(request, response) {
	//pegar os dados do formulário
	var connection = mysql.createConnection({
		host: "localhost",
		database: "pobrefy",
		user: "root",
		password: ""
	});

	var form = formidable.IncomingForm();
	form.parse(request, function(err, fields) {
		//verificar se ele está cadastrado
		connection.query("SELECT * FROM usuarios " +
			"WHERE email = ?", [fields.email],
			function(err, resultados) {
				console.log(resultados);
		});
		//verificar a senha
		//redirecionar para o lugar certo
		response.redirect("/login");	
	});
});

app.get("/cadastro", function(request, response) {
	response.render("cadastro");
});

app.post("/cadastrar", function(request, response) {
	//ler o formulário
	var form = formidable.IncomingForm();
	var connection = mysql.createConnection({
		host: "localhost",
		database: "pobrefy",
		user: "root",
		password: ""
	});
	
	form.parse(request, function(error, fields) {
		//Eu tenho os dados do formulário! YAY
		
		//salvar no banco de dados
		connection.query("INSERT INTO usuarios" +
			"(firstName, lastName," +
			"email, password)" +
			"VALUES (?,?,?,?)", [fields.firstName,
			fields.lastName, fields.email,
			fields.password], function(err) {
				if(err) {
					console.log("deu merda");
				}
				console.log("inseri!");
				connection.close();
			});	

		//manda pra tela de login
		response.redirect("/");
	});
});

app.listen(3000);