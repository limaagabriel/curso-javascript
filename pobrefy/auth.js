module.exports = function(req, res, next) {
	//verifica se usuario está logado 
	if(req.session && req.session.user) {
		//continua o fluxo
		res.locals.user = req.session.user;
		next();
	}
	else {
		res.redirect("/login");
	}
};