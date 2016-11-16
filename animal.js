var cao = {
	raca: "pit bull",
	nome: "bull",
	idade: 2,
	sexo: "masculino",
	latir: function() {
		console.log("woof");
	},
	comer: function() {
		console.log("yuuummm");
	}
};

console.log(cao);
console.log(cao.raca);
console.log(cao.nome);
console.log(cao.idade);
console.log(cao.sexo);
cao.latir();
cao.comer();