var app = require("./config/express");
var routes = require("./app/routes")(app);

app.listen(3000);