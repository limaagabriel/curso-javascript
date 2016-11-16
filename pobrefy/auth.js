module.exports = function(req, res, next) {
	//verifica se usuario está logado 
	if(req.session && req.session.user) {
		//continua o fluxo
		next();
	}
	else {
		res.redirect("/login");
	}
};