var formidable = require("formidable");
var mysql = require("mysql2");
var auth = require("../auth");

module.exports = function(app) {
	app.get("/", function(request, response) {
		response.render("index");
	});

	app.get("/login", function(request, response) {
		response.render("login");
	});

	app.get("/dashboard", auth, function(request, response) {
		response.render("bemvindo");
	});

	app.get("/logout", auth, function(request, response) {
		delete request.session.user;
		response.redirect("/login");
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
					if(resultados.length == 0) {
						response.redirect("/cadastro");
					}
					else {
						var usuario = resultados[0];
						if(usuario.password == fields.password) {
							request.session.user = usuario;
							response.redirect("/dashboard");
						}
						else {
							response.redirect("/login");
						}
					}
				});
			//verificar a senha
			//redirecionar para o lugar certo
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
}