var data = new Date();
var horaAtual = data.getHours();
var papelDeParede;
var wallpaper = require("wallpaper");

if(horaAtual >= 6 && horaAtual < 12) {
	papelDeParede = "morning.png";
}
else if(horaAtual >= 12 && horaAtual < 18) {
	papelDeParede = "late-afternoon.png";
}
else if(horaAtual >= 18 && horaAtual < 24) {
	papelDeParede = "late-evening.png";
}
else {
	papelDeParede = "late-night.png";
}

//Alterar o papel de parede
wallpaper.set(papelDeParede).then(function() {
	console.log("wallpaper definido");
});