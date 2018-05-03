var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}


titulo.addEventListener("click", function (){
	console.log("Eu fui clicado por uma função anonima!!!");
});


var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function() {	
	event.preventDefault(); // previne o comportamento padrão
	

	var form = document.querySelector("#form-adiciona");

	console.log(form.altura.value);
	console.log(form.peso.value);

	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value




	form.reset();
	form.nome.focus();

	var pessoa {
		nome: "",
		teste: "",
		seiLa: ""
	}

	console.log("Nome: " + nome 
		+ "\nPeso: " 
		+ peso 
		+ "\nAltura: " 
		+ altura 
		+ "\ngordura: " 
		+ gordura);

	/*peguei todos os dados para adicionar um novo paciente*/

	/*usar a função create element*/

	var pacienteTr = document.createElement("tr");

	var pesoTd = document.createElement("td");
	var nomeTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	pesoTd.textContent = peso;
	nomeTd.textContent = nome;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = imc;


	pacienteTr.appendChild(nomeTd)
	pacienteTr.appendChild(pesoTd)
	pacienteTr.appendChild(alturaTd)
	pacienteTr.appendChild(gorduraTd)
	pacienteTr.appendChild(imcTd)


	var nomeTd = monstarTd(nomeTd, "info-nome");
	
	console.log(pacienteTr);

	var tbody = document.querySelector("#tabela-pacientes");

	tbody.appendChild(pacienteTr);


	console.log(pacienteTr);


});


function calculaImc(peso, altura) {
	var imc = 0;
	imc - peso / (altura * altura);

	return imc.toFixed(2);
}

function monstarTd(dado, classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);


	return td;
}


function monstarTrPaciente(paciente) {
	var pacienteTr = document.createElement("tr");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calculaImc(peso, altura);

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	/*adicionando class.add*/

	pacienteTr.classList.add('paciente');
	nomeTd.classList.add('info-nome');

	return pacienteTr;	
}