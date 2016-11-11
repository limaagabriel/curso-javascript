var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var botao = document.getElementById('botao');
var resultado = document.getElementById('resultado');

var calculaImc = function() {
	//pega os valores
	var pesoPessoa = parseInt(peso.value);
	var alturaPessoa = parseFloat(altura.value);

	//calcula
	var imc = pesoPessoa/(alturaPessoa * alturaPessoa);

	//mostra o resultado
	resultado.textContent = imc;
}

botao.addEventListener('click', calculaImc)

var pesos = [80, 58, 58];
var alturas = [1.8, 1.54, 1.54];

for(var y = 0; y < 3; y++) {
	var imc = pesos[y]/(alturas[y] * alturas[y]);
	console.log("O imc da pessoa " + y + ": " + imc);
}
