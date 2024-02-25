class guardarApuesta {
	constructor(apuesta, fichas) {
		this.apuesta = apuesta;
		this.fichas = fichas;
	}
}

class numeroObj {
	constructor(numero, veces, porcentaje) {
		this.numero = numero;
		this.veces = veces;
		this.porcentaje = porcentaje;
	}
}

// Variables

//Variable para la hora
var interHora = "";
//Variable sobre la ficha que seleccionamos
var fichaSeleccionada = "";
//Lista numeros
var lstnumeros = [];
//Lista de ultimos numeros con algunos numeros aleatorios
var ultNumeros = ["-", "-", "-", "-", "-"];
//Lista numeros calientes
var hot = [];
//Lista numeros frios
var cold = [];
//Numero de tiradas
var tiradas = 0;
//Cantidad de fichas que tenemos
var misFichas = document.getElementById("misFichas").innerHTML;
//Fichas que tenemos apostadas
var apuesta = 0;
//Posible ganancia con la apuesta
var posGanancia = 0;
//Total ganado esta sesion
var ganancias = 0;
//Bola que se juega
var bola = 0;

//Variable del tiempo
var intervaloB;

// Inicia un contador desde 30 hacia 0
var valorActual = 30;

//Variables de los grupos de numeros. Gracias ChatGPT por hacerlo por mi.
var impares = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
var pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
var primeros12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var segundos12 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var ultimos12 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
var primerosDieciocho = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var ultimosDieciocho = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
var numerosRojos = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
var numerosNegros = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
var linea1 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
var linea2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
var linea3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
//Lista que guardara las apuestas
var miApuesta = [];

//Llamada a la musica de fondo

var musica = new Audio("sound/bgmusic.mp3")
musica.volume = 0.1;

//CREACION DE LOS NUMEROS COMO OBJETOS
var num0 = new numeroObj(0, 0, 0);
var num1 = new numeroObj(1, 0, 0);
var num2 = new numeroObj(2, 0, 0);
var num3 = new numeroObj(3, 0, 0);
var num4 = new numeroObj(4, 0, 0);
var num5 = new numeroObj(5, 0, 0);
var num6 = new numeroObj(6, 0, 0);
var num7 = new numeroObj(7, 0, 0);
var num8 = new numeroObj(8, 0, 0);
var num9 = new numeroObj(9, 0, 0);
var num10 = new numeroObj(10, 0, 0);
var num11 = new numeroObj(11, 0, 0);
var num12 = new numeroObj(12, 0, 0);
var num13 = new numeroObj(13, 0, 0);
var num14 = new numeroObj(14, 0, 0);
var num15 = new numeroObj(15, 0, 0);
var num16 = new numeroObj(16, 0, 0);
var num17 = new numeroObj(17, 0, 0);
var num18 = new numeroObj(18, 0, 0);
var num19 = new numeroObj(19, 0, 0);
var num20 = new numeroObj(20, 0, 0);
var num21 = new numeroObj(21, 0, 0);
var num22 = new numeroObj(22, 0, 0);
var num23 = new numeroObj(23, 0, 0);
var num24 = new numeroObj(24, 0, 0);
var num25 = new numeroObj(25, 0, 0);
var num26 = new numeroObj(26, 0, 0);
var num27 = new numeroObj(27, 0, 0);
var num28 = new numeroObj(28, 0, 0);
var num29 = new numeroObj(29, 0, 0);
var num30 = new numeroObj(30, 0, 0);
var num31 = new numeroObj(31, 0, 0);
var num32 = new numeroObj(32, 0, 0);
var num33 = new numeroObj(33, 0, 0);
var num34 = new numeroObj(34, 0, 0);
var num35 = new numeroObj(35, 0, 0);
var num36 = new numeroObj(36, 0, 0);

//Añadirlos a la lista de numeros
lstnumeros.push(num0);
lstnumeros.push(num1);
lstnumeros.push(num2);
lstnumeros.push(num3);
lstnumeros.push(num4);
lstnumeros.push(num5);
lstnumeros.push(num6);
lstnumeros.push(num7);
lstnumeros.push(num8);
lstnumeros.push(num9);
lstnumeros.push(num10);
lstnumeros.push(num11);
lstnumeros.push(num12);
lstnumeros.push(num13);
lstnumeros.push(num14);
lstnumeros.push(num15);
lstnumeros.push(num16);
lstnumeros.push(num17);
lstnumeros.push(num18);
lstnumeros.push(num19);
lstnumeros.push(num20);
lstnumeros.push(num21);
lstnumeros.push(num22);
lstnumeros.push(num23);
lstnumeros.push(num24);
lstnumeros.push(num25);
lstnumeros.push(num26);
lstnumeros.push(num27);
lstnumeros.push(num28);
lstnumeros.push(num29);
lstnumeros.push(num30);
lstnumeros.push(num31);
lstnumeros.push(num32);
lstnumeros.push(num33);
lstnumeros.push(num34);
lstnumeros.push(num35);
lstnumeros.push(num36);







//Insertar fichas del principio
document.getElementById("misFichas").innerHTML = misFichas;

//Intervalo de la hora
interHora = setInterval(hora, 1000);

//Funcion para calcular la probabilidad de los numeros
function probabilidad() {
	tiradas = tiradas + 1;
	for (var i = 0; i < lstnumeros.length; i++) {
		if (bola == lstnumeros[i].numero) {
			lstnumeros[i].veces = lstnumeros[i].veces + 1;
		}
		if (lstnumeros[i].veces != 0) {
			lstnumeros[i].porcentaje = Math.floor((lstnumeros[i].veces / tiradas) * 100);
		}
		console.log(lstnumeros[i].numero + " " + lstnumeros[i].veces + " " + lstnumeros[i].porcentaje);
	}
	ultNumeros.unshift(bola)
	actualizar();
}


//Cargar numeros
function cargar() {



}


//Calcular porcentajes
function calcularPorcentajes(totalNumeros, numerosTop) {
	var porcentajes = [];

	for (i = 0; i < numerosTop.length; i++) {
		var repetido = 0;
		for (j = 0; j < totalNumeros.length; j++) {
			if (totalNumeros[j].numero == numerosTop[i].numero) {
				repetido = repetido + 1;
			}
		}
		porcentajes[i] = Math.round((repetido / totalNumeros.length) * 100) + "%";
	}
	//alert(porcentajes[0]);
	// Calcular el total de apariciones de todos los números


	return porcentajes;
}


//Meter ultimos numeros, calientes y frios.

function actualizar() {
	$.ajax(
		{
			type: 'GET',
			url: '/ruleta/ultimos',
			success: function(data) {

				listaNum = data;

				document.getElementById("ult1").innerHTML = data[0].numero;
				document.getElementById("ult2").innerHTML = data[1].numero;
				document.getElementById("ult3").innerHTML = data[2].numero;
				document.getElementById("ult4").innerHTML = data[3].numero;
				document.getElementById("ult5").innerHTML = data[4].numero;


				$.ajax(
					{
						type: 'GET',
						url: '/ruleta/hot',
						success: function(data) {



							numID = 1;
							var listCalientes = [];
							listCalientes = data;
							//window.alert(listCalientes[0].numero)
							for (var i = 0; i < listCalientes.length; i++) {
								document.getElementById("cal" + numID).innerHTML = listCalientes[i].numero;
								//  document.getElementById("calP" + numID).innerHTML = listCalientes[i].porcentaje + "%";
								numID = numID + 1;
							}
							numID = 1;
							var porcentajes = calcularPorcentajes(listaNum, listCalientes);
							//alert(porcentajes.length)
							for (var i = 0; i < porcentajes.length; i++) {

								document.getElementById("calP" + numID).innerHTML = porcentajes[i];
								//  document.getElementById("calP" + numID).innerHTML = listCalientes[i].porcentaje + "%";
								numID = numID + 1;
							}

						}
					}
				);

				$.ajax(
					{
						type: 'GET',
						url: '/ruleta/cold',
						success: function(data) {
							numID = 1;
							var listFrios = [];
							listFrios = data;
							//window.alert(listFrios[0].numero)
							for (var i = 0; i < listFrios.length; i++) {
								document.getElementById("fri" + numID).innerHTML = listFrios[i].numero;
								//	document.getElementById("friP" + numID).innerHTML = listFrios[i].porcentaje + "%";
									numID = numID + 1;
							}
						numID = 1;
								var porcentajes = calcularPorcentajes(listaNum, listFrios);
								//alert(porcentajes.length)
								for (var i = 0; i < porcentajes.length; i++) {

									document.getElementById("friP" + numID).innerHTML = porcentajes[i];
									//  document.getElementById("calP" + numID).innerHTML = listCalientes[i].porcentaje + "%";
									numID = numID + 1;
								}
						}
					}
				);
			}
		}
	);


	/*	numID = 1;
	
		numID = 1;
		for (var i = 36; i >= 32; i--) {
			document.getElementById("fri" + numID).innerHTML = listAux[i].numero;
			document.getElementById("friP" + numID).innerHTML = listAux[i].porcentaje + "%";
			numID = numID + 1;
		}*/

}


//funcion hora y ademas activar la musica
function hora() {
	musica.play();
	var miFecha = new Date();
	var texto = document.getElementById("tiempo");
	texto.innerHTML = "La hora actual es : " + miFecha.getHours() + ":" + (miFecha.getMinutes() < 10 ? '0' : '') + miFecha.getMinutes() + ":" + (miFecha.getSeconds() < 10 ? '0' : '') + miFecha.getSeconds();
}


//Sacar popup
function aparecer() {
	var posNum = event.target.id;

	console.log(posNum);
	document.getElementById("pop").innerHTML = "Porcentaje del numero " + posNum + ": " + lstnumeros[posNum].porcentaje + "%";
	document.getElementById("pop").style.visibility = "visible";
}
//Quitar popup
function desaparecer() {
	document.getElementById("pop").style.visibility = "hidden";
}


//Iterar para sacar todos los id de cada uno.
/*
for (let i = 0; i <= 36; i++) {

	const elementId = i.toString();
	const element = document.getElementById(elementId);

	if (element) {
		element.addEventListener("mouseover", aparecer, false);
		element.addEventListener("mouseout", desaparecer, false);
	}
}*/

function comprobarFichas() {

	if (misFichas > 999) {
		document.getElementById("c1").style.filter = "grayscale(0%)";
		document.getElementById("c2").style.filter = "grayscale(0%)";
		document.getElementById("c10").style.filter = "grayscale(0%)";
		document.getElementById("c50").style.filter = "grayscale(0%)";
		document.getElementById("c100").style.filter = "grayscale(0%)";
		document.getElementById("c200").style.filter = "grayscale(0%)";
		document.getElementById("c500").style.filter = "grayscale(0%)";
		document.getElementById("c1000").style.filter = "grayscale(0%)";
		document.getElementById("c1").disabled = false;
		document.getElementById("c2").disabled = false;
		document.getElementById("c10").disabled = false;
		document.getElementById("c50").disabled = false;
		document.getElementById("c100").disabled = false;
		document.getElementById("c200").disabled = false;
		document.getElementById("c500").disabled = false;
		document.getElementById("c1000").disabled = false;
	}
	else if (misFichas > 499) {
		document.getElementById("c1").style.filter = "grayscale(0%)";
		document.getElementById("c2").style.filter = "grayscale(0%)";
		document.getElementById("c10").style.filter = "grayscale(0%)";
		document.getElementById("c50").style.filter = "grayscale(0%)";
		document.getElementById("c100").style.filter = "grayscale(0%)";
		document.getElementById("c200").style.filter = "grayscale(0%)";
		document.getElementById("c500").style.filter = "grayscale(0%)";
		document.getElementById("c1000").style.filter = "grayscale(100%)";
		document.getElementById("c1").disabled = false;
		document.getElementById("c2").disabled = false;
		document.getElementById("c10").disabled = false;
		document.getElementById("c50").disabled = false;
		document.getElementById("c100").disabled = false;
		document.getElementById("c200").disabled = false;
		document.getElementById("c500").disabled = false;
		document.getElementById("c1000").disabled = true;
	}
	else if (misFichas > 199) {
		document.getElementById("c1").style.filter = "grayscale(0%)";
		document.getElementById("c2").style.filter = "grayscale(0%)";
		document.getElementById("c10").style.filter = "grayscale(0%)";
		document.getElementById("c50").style.filter = "grayscale(0%)";
		document.getElementById("c100").style.filter = "grayscale(0%)";
		document.getElementById("c200").style.filter = "grayscale(0%)";
		document.getElementById("c500").style.filter = "grayscale(100%)";
		document.getElementById("c1000").style.filter = "grayscale(100%)";
		document.getElementById("c1").disabled = false;
		document.getElementById("c2").disabled = false;
		document.getElementById("c10").disabled = false;
		document.getElementById("c50").disabled = false;
		document.getElementById("c100").disabled = false;
		document.getElementById("c200").disabled = false;
		document.getElementById("c500").disabled = true;
		document.getElementById("c1000").disabled = true;
	}
	else if (misFichas > 99) {
		document.getElementById("c1").style.filter = "grayscale(0%)";
		document.getElementById("c2").style.filter = "grayscale(0%)";
		document.getElementById("c10").style.filter = "grayscale(0%)";
		document.getElementById("c50").style.filter = "grayscale(0%)";
		document.getElementById("c100").style.filter = "grayscale(0%)";
		document.getElementById("c200").style.filter = "grayscale(100%)";
		document.getElementById("c500").style.filter = "grayscale(100%)";
		document.getElementById("c1000").style.filter = "grayscale(100%)";
		document.getElementById("c1").disabled = false;
		document.getElementById("c2").disabled = false;
		document.getElementById("c10").disabled = false;
		document.getElementById("c50").disabled = false;
		document.getElementById("c100").disabled = false;
		document.getElementById("c200").disabled = true;
		document.getElementById("c500").disabled = true;
		document.getElementById("c1000").disabled = true;
	}
	else if (misFichas > 49) {
		document.getElementById("c1").style.filter = "grayscale(0%)";
		document.getElementById("c2").style.filter = "grayscale(0%)";
		document.getElementById("c10").style.filter = "grayscale(0%)";
		document.getElementById("c50").style.filter = "grayscale(0%)";
		document.getElementById("c100").style.filter = "grayscale(100%)";
		document.getElementById("c200").style.filter = "grayscale(100%)";
		document.getElementById("c500").style.filter = "grayscale(100%)";
		document.getElementById("c1000").style.filter = "grayscale(100%)";
		document.getElementById("c1").disabled = false;
		document.getElementById("c2").disabled = false;
		document.getElementById("c10").disabled = false;
		document.getElementById("c50").disabled = false;
		document.getElementById("c100").disabled = true;
		document.getElementById("c200").disabled = true;
		document.getElementById("c500").disabled = true;
		document.getElementById("c1000").disabled = true;
	}
	else if (misFichas > 9) {
		document.getElementById("c1").style.filter = "grayscale(0%)";
		document.getElementById("c2").style.filter = "grayscale(0%)";
		document.getElementById("c10").style.filter = "grayscale(0%)";
		document.getElementById("c50").style.filter = "grayscale(100%)";
		document.getElementById("c100").style.filter = "grayscale(100%)";
		document.getElementById("c200").style.filter = "grayscale(100%)";
		document.getElementById("c500").style.filter = "grayscale(100%)";
		document.getElementById("c1000").style.filter = "grayscale(100%)";
		document.getElementById("c1").disabled = false;
		document.getElementById("c2").disabled = false;
		document.getElementById("c10").disabled = false;
		document.getElementById("c50").disabled = true;
		document.getElementById("c100").disabled = true;
		document.getElementById("c200").disabled = true;
		document.getElementById("c500").disabled = true;
		document.getElementById("c1000").disabled = true;
	}
	else if (misFichas > 1.9) {
		document.getElementById("c1").style.filter = "grayscale(0%)";
		document.getElementById("c2").style.filter = "grayscale(0%)";
		document.getElementById("c10").style.filter = "grayscale(100%)";
		document.getElementById("c50").style.filter = "grayscale(100%)";
		document.getElementById("c100").style.filter = "grayscale(100%)";
		document.getElementById("c200").style.filter = "grayscale(100%)";
		document.getElementById("c500").style.filter = "grayscale(100%)";
		document.getElementById("c1000").style.filter = "grayscale(100%)";
		document.getElementById("c1").disabled = false;
		document.getElementById("c2").disabled = false;
		document.getElementById("c10").disabled = true;
		document.getElementById("c50").disabled = true;
		document.getElementById("c100").disabled = true;
		document.getElementById("c200").disabled = true;
		document.getElementById("c500").disabled = true;
		document.getElementById("c1000").disabled = true;
	}
	else if (misFichas > 0.9) {
		document.getElementById("c1").style.filter = "grayscale(0%)";
		document.getElementById("c2").style.filter = "grayscale(100%)";
		document.getElementById("c10").style.filter = "grayscale(100%)";
		document.getElementById("c50").style.filter = "grayscale(100%)";
		document.getElementById("c100").style.filter = "grayscale(100%)";
		document.getElementById("c200").style.filter = "grayscale(100%)";
		document.getElementById("c500").style.filter = "grayscale(100%)";
		document.getElementById("c1000").style.filter = "grayscale(100%)";
		document.getElementById("c1").disabled = false;
		document.getElementById("c2").disabled = true;
		document.getElementById("c10").disabled = true;
		document.getElementById("c50").disabled = true;
		document.getElementById("c100").disabled = true;
		document.getElementById("c200").disabled = true;
		document.getElementById("c500").disabled = true;
		document.getElementById("c1000").disabled = true;
	}
	else {
		document.getElementById("c1").style.filter = "grayscale(100%)";
		document.getElementById("c2").style.filter = "grayscale(100%)";
		document.getElementById("c10").style.filter = "grayscale(100%)";
		document.getElementById("c50").style.filter = "grayscale(100%)";
		document.getElementById("c100").style.filter = "grayscale(100%)";
		document.getElementById("c200").style.filter = "grayscale(100%)";
		document.getElementById("c500").style.filter = "grayscale(100%)";
		document.getElementById("c1000").style.filter = "grayscale(100%)";
		document.getElementById("c1").disabled = true;
		document.getElementById("c2").disabled = true;
		document.getElementById("c10").disabled = true;
		document.getElementById("c50").disabled = true;
		document.getElementById("c100").disabled = true;
		document.getElementById("c200").disabled = true;
		document.getElementById("c500").disabled = true;
		document.getElementById("c1000").disabled = true;
	}

}

//Funcion para iluminar grupos de celdas.

function iluminar() {
	if (event.target.id == "even") {
		for (var i = 0; i < 37; i++) {
			if (pares.includes(i)) {
				document.getElementById(i).style.backgroundColor = "green";
			}
		}
	}
	else if (event.target.id == "odd") {
		for (var i = 0; i < 37; i++) {
			if (impares.includes(i)) {
				document.getElementById(i).style.backgroundColor = "green";
			}
		}
	}
	else if (event.target.id == "1-18") {
		for (var i = 0; i < 37; i++) {
			if (primerosDieciocho.includes(i)) {
				document.getElementById(i).style.backgroundColor = "green";
			}
		}
	}
	else if (event.target.id == "19-36") {
		for (var i = 0; i < 37; i++) {
			if (ultimosDieciocho.includes(i)) {
				document.getElementById(i).style.backgroundColor = "green";
			}
		}
	}
	else if (event.target.id == "red") {
		for (var i = 0; i < 37; i++) {
			if (numerosRojos.includes(i)) {
				document.getElementById(i).style.backgroundColor = "green";
			}
		}
	}
	else if (event.target.id == "black") {
		for (var i = 0; i < 37; i++) {
			if (numerosNegros.includes(i)) {
				document.getElementById(i).style.backgroundColor = "green";
			}
		}
	}
	else if (event.target.id == "1st") {
		for (var i = 0; i < 37; i++) {
			if (primeros12.includes(i)) {
				document.getElementById(i).style.backgroundColor = "green";
			}
		}
	}
	else if (event.target.id == "2nd") {
		for (var i = 0; i < 37; i++) {
			if (segundos12.includes(i)) {
				document.getElementById(i).style.backgroundColor = "green";
			}
		}
	}
	else if (event.target.id == "3rd") {
		for (var i = 0; i < 37; i++) {
			if (ultimos12.includes(i)) {
				document.getElementById(i).style.backgroundColor = "green";
			}
		}
	}
	else if (event.target.id == "3-36") {
		for (var i = 0; i < 37; i++) {
			if (linea3.includes(i)) {
				document.getElementById(i).style.backgroundColor = "green";
			}
		}
	}
	else if (event.target.id == "2-35") {
		for (var i = 0; i < 37; i++) {
			if (linea2.includes(i)) {
				document.getElementById(i).style.backgroundColor = "green";
			}
		}
	}
	else if (event.target.id == "1-34") {
		for (var i = 0; i < 37; i++) {
			if (linea1.includes(i)) {
				document.getElementById(i).style.backgroundColor = "green";
			}
		}
	}
}

//funcion para apagar
function apagar() {
	for (var i = 1; i < 37; i++) {
		if (numerosNegros.includes(i)) {
			document.getElementById(i).style.backgroundColor = "";
		}
		else {
			document.getElementById(i).style.backgroundColor = "";
		}
	}
}

//Escoger ficha

function gris1() {
	fichaSeleccionada = 0;
	comprobarFichas();
	document.getElementById("c1").style.filter = "grayscale(100%)";
	document.getElementById("c1").disabled = true;
	fichaSeleccionada = 1;
}

function gris2() {
	fichaSeleccionada = 0;
	comprobarFichas();
	document.getElementById("c2").style.filter = "grayscale(100%)";
	document.getElementById("c2").disabled = true;
	fichaSeleccionada = 2;
}
function gris10() {
	fichaSeleccionada = 0;
	comprobarFichas();
	document.getElementById("c10").style.filter = "grayscale(100%)";
	document.getElementById("c10").disabled = true;
	fichaSeleccionada = 10;
}
function gris50() {
	fichaSeleccionada = 0;
	comprobarFichas();
	document.getElementById("c50").style.filter = "grayscale(100%)";
	document.getElementById("c50").disabled = true;
	fichaSeleccionada = 50;
}
function gris100() {
	fichaSeleccionada = 0;
	comprobarFichas();
	document.getElementById("c100").style.filter = "grayscale(100%)";
	document.getElementById("c100").disabled = true;
	fichaSeleccionada = 100;
}
function gris200() {
	fichaSeleccionada = 0;
	comprobarFichas();
	document.getElementById("c200").style.filter = "grayscale(100%)";
	document.getElementById("c200").disabled = true;
	fichaSeleccionada = 200;
}
function gris500() {
	fichaSeleccionada = 0;
	comprobarFichas();
	document.getElementById("c500").style.filter = "grayscale(100%)";
	document.getElementById("c500").disabled = true;
	fichaSeleccionada = 500;
}

function gris1000() {
	fichaSeleccionada = 0;
	comprobarFichas();
	document.getElementById("c1000").style.filter = "grayscale(100%)";
	document.getElementById("c1000").disabled = true;
	fichaSeleccionada = 1000;

}


//funcion para setear el apuesta
function apostar() {
	document.getElementById("mensaje").style.visibility = "hidden";
	if (fichaSeleccionada == "") {
		document.getElementById("mensaje").style.visibility = "visible";
	}
	else {

		var tipoApuesta = event.target.id;
		// window.alert("Has apostado a: "+ event.target.id + tipoApuesta)
		apuesta = apuesta + fichaSeleccionada;
		document.getElementById("apostado").innerHTML = apuesta + " Fichas";
		document.getElementById("misFichas").innerHTML = misFichas - fichaSeleccionada;
		misFichas = misFichas - fichaSeleccionada;

		if (tipoApuesta >= 0) {
			document.getElementById("posGanancia").innerHTML = (posGanancia + fichaSeleccionada * 35) + " fichas";
			posGanancia = posGanancia + fichaSeleccionada * 35;
		}
		else if (tipoApuesta == "1st" || tipoApuesta == "2nd" || tipoApuesta == "3rd" || tipoApuesta == "1-34"
			|| tipoApuesta == "2-35" || tipoApuesta == "3-36") {
			document.getElementById("posGanancia").innerHTML = (posGanancia + fichaSeleccionada * 2) + " fichas";
			posGanancia = posGanancia + fichaSeleccionada * 3;
		}
		else {
			document.getElementById("posGanancia").innerHTML = (posGanancia + fichaSeleccionada * 2) + " fichas";
			posGanancia = posGanancia + fichaSeleccionada * 2;
		}
		//Meter el tipo de apuesta en mi array de apuestas
		var nuevaApuesta = new guardarApuesta(tipoApuesta, fichaSeleccionada);
		miApuesta.push(nuevaApuesta);
		// window.alert(miApuesta[0].apuesta);
		if (document.getElementById("tipoApos").innerHTML == "Ninguna") {
			document.getElementById("tipoApos").innerHTML = tipoApuesta + " : " + fichaSeleccionada + " fichas";
		}
		else {
			document.getElementById("tipoApos").innerHTML = document.getElementById("tipoApos").innerHTML + " - " + tipoApuesta + " : " + fichaSeleccionada + " fichas";
		}
		document.getElementById(event.target.id).style.backgroundImage = "url('img/chip.png')";

		//If para cambiar tamaño si es la celda 0 para que se ajuste.
		if (event.target.id == 0) {
			document.getElementById(event.target.id).style.backgroundSize = "100% auto";
		}
		else {
			document.getElementById(event.target.id).style.backgroundSize = "auto 100%";
		}
		document.getElementById(event.target.id).style.backgroundPosition = "center center";
		document.getElementById(event.target.id).style.backgroundRepeat = "no-repeat";
		document.getElementById(event.target.id).innerHTML = "";
		fichaSeleccionada = 0;
		comprobarFichas();
	}

}

//funcion para resetear las celdas
function limpiar() {
	for (var i = 0; i < 36; i++) {
		document.getElementById(i).style.backgroundImage = "none";
		document.getElementById(i).innerHTML = i;
	}
	document.getElementById("1st").style.backgroundImage = "none";
	document.getElementById("1st").innerHTML = "1st 12";
	document.getElementById("2nd").style.backgroundImage = "none";
	document.getElementById("2nd").innerHTML = "2nd 12";
	document.getElementById("3rd").style.backgroundImage = "none";
	document.getElementById("3rd").innerHTML = "3rd 12";
	document.getElementById("even").style.backgroundImage = "none";
	document.getElementById("even").innerHTML = "EVEN";
	document.getElementById("odd").style.backgroundImage = "none";
	document.getElementById("odd").innerHTML = "ODD";
	document.getElementById("red").style.backgroundImage = "none";
	document.getElementById("red").innerHTML = "PINK";
	document.getElementById("black").style.backgroundImage = "none";
	document.getElementById("black").innerHTML = "BLUE";
	document.getElementById("black").style.backgroundImage = "none";
	document.getElementById("black").innerHTML = "BLACK";
	document.getElementById("1-18").style.backgroundImage = "none";
	document.getElementById("1-18").innerHTML = "1 to 18";
	document.getElementById("19-36").style.backgroundImage = "none";
	document.getElementById("19-36").innerHTML = "19 to 36";
	document.getElementById("3-36").style.backgroundImage = "none";
	document.getElementById("3-36").innerHTML = "2 to 1";
	document.getElementById("2-35").style.backgroundImage = "none";
	document.getElementById("2-35").innerHTML = "2 to 1";
	document.getElementById("1-34").style.backgroundImage = "none";
	document.getElementById("1-34").innerHTML = "2 to 1";
}


//Modal cerrar y abrir

function mostrarModal() {
	var modal = document.getElementById("modalIngresar");
	modal.style.display = "block";
}

function cerrarModal() {
	var modal = document.getElementById("modalIngresar");
	document.getElementById("error").innerHTML = "";
	modal.style.display = "none";
}

//Modal mostrar y cerrar ganador
function mostrarModalG() {
	var modal = document.getElementById("modalGanador");
	modal.style.display = "block";
}

function cerrarModalG() {
	if (window.matchMedia('(max-width: 1024px)').matches) {
		// Muestra divRuleta como un modal
		document.getElementById('ruleta').style.display = 'none'; // Muestra el modal
		document.getElementById('imgRul').style.display = 'none'; // Muestra el modal
	}

	var modal = document.getElementById("modalGanador");
	document.getElementById("error").innerHTML = "";
	modal.style.display = "none";
}


function retirar() {
	misFichas = 0;
	document.getElementById("misFichas").innerHTML = 0;
	miApuesta = [];
	apuesta = 0;
	posGanancia = 0;
	document.getElementById("posGanancia").innerHTML = "0 Fichas";
	document.getElementById("tipoApos").innerHTML = "Ninguna";
	document.getElementById("apostado").innerHTML = "0 Fichas";
	limpiar();
	comprobarFichas();
}


// Mostrar form ingreso saldo
function mostrarIng() {
	document.getElementById("meterF").style.visibility = "visible";

}

//Ingresar dinero
function ingresar() {
	var nuevasFichas = parseInt(document.getElementById("nuevasFichas").value);
	if (isNaN(nuevasFichas) || nuevasFichas <= 0) {
		document.getElementById("error").innerHTML = "Error de insercion de fichas. Vuelva a intentarlo";
	}
	else {
		misFichas = Number(misFichas) + Number(nuevasFichas);
		document.getElementById("misFichas").innerHTML = Number(misFichas);
		document.getElementById("meterF").style.visibility = "hidden";
		document.getElementById("error").innerHTML = "";
		cerrarModal();
		comprobarFichas();
		// var correo= document.getElementById("correo").innerHTML;
		var saldo = misFichas;
		console.log(saldo)

		var cliente = {
			correo: document.getElementById("correo").innerHTML,
			saldo: saldo

		};

		$.ajax(
			{
				type: 'POST',
				url: '/dinero/ingresar',
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify(cliente),
				success: function(data) {

					

				}
			}
		);


	}
}



//Pausa antes de la siguiente tirada

function pause() {
	var contar = 3;
	document.getElementById("ruleta").style.animation = "bounce2 10s ease infinite";
	const intervalo = setInterval(() => {
		contar = contar - 1

		if (contar === 0) {
			clearInterval(intervalo); // Detén el contador cuando llegue a 0
			cerrarModalG();
			barra();
			valorActual = 30;
			limpiar();
		}
	}, 1000);
}


//Comprobar el tamaño de la ventana para poner modal de la bola
function checkMediaQuery() {
	// Comprueba si la pantalla está en el rango de media query deseado
	if (window.matchMedia('(max-width: 1024px)').matches) {
		// Muestra divRuleta como un modal
		document.getElementById('ruleta').classList.add('modalRuleta');
		document.getElementById('ruleta').style.display = 'block'; // Muestra el modal
		document.getElementById('imgRul').style.display = 'block'; // Muestra el modal
		document.getElementById('numGanador').style.display = 'block'; // Muestra el modal
	} else {
		// Oculta divRuleta si no estamos en el rango de media

	}
}

//Simulartirada
function simularTirada() {
	checkMediaQuery();

	var contar = 500;
	document.getElementById("ruleta").style.animation = "wobble 5s ease";
	const intervalo = setInterval(() => {
		bola = Math.floor(Math.random() * 36);
		document.getElementById("numGanador").innerHTML = bola
		if (numerosNegros.includes(bola)) {
			document.getElementById("imgRul").src = "img/blueOIG.svg"
			document.getElementById("imgRul").style.filter = "drop-shadow(0 0 20px blue)"
		}
		else if (numerosRojos.includes(bola)) {
			document.getElementById("imgRul").src = "img/pinkOIG.svg"
			document.getElementById("imgRul").style.filter = "drop-shadow(0 0 20px purple)"
		}
		else {
			document.getElementById("imgRul").src = "img/greenOIG.svg"
			document.getElementById("imgRul").style.filter = "drop-shadow(0 0 20px green)"
		}
		contar = contar - 10
		console.log(contar);
		if (contar === 0) {
			clearInterval(intervalo); // Detén el contador cuando llegue a 0
			ganadora();
			mostrarModalG();
			pause();

		}
	}, 100);

}

//Funcion para meter la ultima tirada en base de datos
function guardarTirada() {
	console.log(bola);
	var bolaTirada = {
		numero: bola
	};

	$.ajax(
		{
			type: 'POST',
			url: '/ruleta/guardarBola',
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify(bolaTirada),
			success: function() {



			}
		}
	);


}


//Sacar el tipo de apuesta ganadora
function ganadora() {
	//Variable de dinero ganado en esa tirada
	guardarTirada();
	var ganadoTirada = 0;


	// window.alert("HA SALIDO LA BOLA: "+bola);
	for (var i = 0; i < miApuesta.length; i++) {
		if (miApuesta[i].apuesta == bola) {
			ganadoTirada = ganadoTirada + miApuesta[i].fichas * 35;
			ganancias = ganancias + miApuesta[i].fichas * 35;
			misFichas = misFichas + (miApuesta[i].fichas * 35);
			document.getElementById("misFichas").innerHTML = misFichas;
			//   window.alert("hola");
		}
		else if (numerosNegros.includes(bola) && miApuesta[i].apuesta == "black") {
			ganadoTirada = ganadoTirada + miApuesta[i].fichas * 2;
			ganancias = ganancias + miApuesta[i].fichas * 2;
			misFichas = misFichas + (miApuesta[i].fichas * 2);
			document.getElementById("misFichas").innerHTML = misFichas;
			//  window.alert("hola");
		}
		else if (numerosRojos.includes(bola) && miApuesta[i].apuesta == "red") {
			ganadoTirada = ganadoTirada + miApuesta[i].fichas * 2;
			ganancias = ganancias + miApuesta[i].fichas * 2;
			misFichas = misFichas + (miApuesta[i].fichas * 2);
			document.getElementById("misFichas").innerHTML = misFichas;
			// window.alert("hola");
		}
		else if (pares.includes(bola) && miApuesta[i].apuesta == "even") {
			ganadoTirada = ganadoTirada + miApuesta[i].fichas * 2;
			ganancias = ganancias + miApuesta[i].fichas * 2;
			misFichas = misFichas + (miApuesta[i].fichas * 2);
			document.getElementById("misFichas").innerHTML = misFichas;
			// window.alert("hola");
		}
		else if (impares.includes(bola) && miApuesta[i].apuesta == "odd") {
			ganadoTirada = ganadoTirada + miApuesta[i].fichas * 2;
			ganancias = ganancias + miApuesta[i].fichas * 2;
			misFichas = misFichas + (miApuesta[i].fichas * 2);
			document.getElementById("misFichas").innerHTML = misFichas;
			// window.alert("hola");
		}
		else if (primerosDieciocho.includes(bola) && miApuesta[i].apuesta == "1-18") {
			ganadoTirada = ganadoTirada + miApuesta[i].fichas * 2;
			ganancias = ganancias + miApuesta[i].fichas * 2;
			misFichas = misFichas + (miApuesta[i].fichas * 2);
			document.getElementById("misFichas").innerHTML = misFichas;
			//   window.alert("hola");
		}
		else if (ultimosDieciocho.includes(bola) && miApuesta[i].apuesta == "19-36") {
			ganadoTirada = ganadoTirada + miApuesta[i].fichas * 2;
			ganancias = ganancias + miApuesta[i].fichas * 2;
			misFichas = misFichas + (miApuesta[i].fichas * 2);
			document.getElementById("misFichas").innerHTML = misFichas;
			// window.alert("hola");
		}
		else if (primeros12.includes(bola) && miApuesta[i].apuesta == "1st") {
			ganadoTirada = ganadoTirada + miApuesta[i].fichas * 3;
			ganancias = ganancias + miApuesta[i].fichas * 3;
			misFichas = misFichas + (miApuesta[i].fichas * 3);
			document.getElementById("misFichas").innerHTML = misFichas;
			// window.alert("hola");
		}
		else if (segundos12.includes(bola) && miApuesta[i].apuesta == "2nd") {
			ganadoTirada = ganadoTirada + miApuesta[i].fichas * 3;
			ganancias = ganancias + miApuesta[i].fichas * 3;
			misFichas = misFichas + (miApuesta[i].fichas * 3);
			document.getElementById("misFichas").innerHTML = misFichas;
			//  window.alert("hola");
		}
		else if (ultimos12.includes(bola) && miApuesta[i].apuesta == "3rd") {
			ganadoTirada = ganadoTirada + miApuesta[i].fichas * 3;
			ganancias = ganancias + miApuesta[i].fichas * 3;
			misFichas = misFichas + (miApuesta[i].fichas * 3);
			document.getElementById("misFichas").innerHTML = misFichas;
			// window.alert("hola");
		}
		else if (linea1.includes(bola) && miApuesta[i].apuesta == "1-34") {
			ganadoTirada = ganadoTirada + miApuesta[i].fichas * 3;
			ganancias = ganancias + miApuesta[i].fichas * 3;
			misFichas = misFichas + (miApuesta[i].fichas * 3);
			document.getElementById("misFichas").innerHTML = misFichas;
			// window.alert("hola");
		}
		else if (linea2.includes(bola) && miApuesta[i].apuesta == "2-35") {
			ganadoTirada = ganadoTirada + miApuesta[i].fichas * 3;
			ganancias = ganancias + miApuesta[i].fichas * 3;
			misFichas = misFichas + (miApuesta[i].fichas * 3);
			document.getElementById("misFichas").innerHTML = misFichas;
			//  window.alert("hola");
		}
		else if (linea3.includes(bola) && miApuesta[i].apuesta == "3-36") {
			ganadoTirada = ganadoTirada + miApuesta[i].fichas * 3;
			ganancias = ganancias + miApuesta[i].fichas * 3;
			misFichas = misFichas + (miApuesta[i].fichas * 3);
			document.getElementById("misFichas").innerHTML = misFichas;
			// window.alert("hola");
		}
	}
	document.getElementById("ganadora").innerHTML = "LA BOLA GANADORA HA SIDO " + bola;
	document.getElementById("textoGanancias").innerHTML = "Tus ganancias han sido de " + ganadoTirada + " fichas";
	//Meter estadisticas de numeros
	probabilidad();
	//Resetear valores
	
	  var cliente = {
		correo: document.getElementById("correo").innerHTML,
		saldo: misFichas
			
	};
	
	$.ajax(
		{
			type: 'POST',
			url: '/dinero/ingresar',
			contentType: "application/json; charset=utf-8",

			data: JSON.stringify(cliente),
			success: function(data) {
				
				
			 	
			}
		}
	);
	
	
	miApuesta = [];
	apuesta = 0;
	posGanancia = 0;
	document.getElementById("posGanancia").innerHTML = "0 Fichas";
	document.getElementById("tipoApos").innerHTML = "Ninguna";
	document.getElementById("apostado").innerHTML = "0 Fichas";
	document.getElementById("ganancia").innerHTML = ganancias + " fichas";
	comprobarFichas();
	
	
	
	
}

//Funcion de bajar segundos a la barra
function barra() {
	actualizar()


	const barraDeProgreso = document.getElementById('barraProg');

	intervaloB = setInterval(() => {
		if (valorActual != 0) {
			valorActual--;
		}
		barraDeProgreso.setAttribute('aria-valuenow', valorActual);
		barraDeProgreso.style.width = (valorActual / 30) * 50 + '%';
		document.getElementById('cristal').textContent = valorActual;

		if (valorActual === 0) {
			barraDeProgreso.setAttribute('aria-valuenow', 0);
			clearInterval(intervaloB); // Detén el contador cuando llegue a 0
			barraDeProgreso.setAttribute('aria-valuenow', 30);
			simularTirada();

		}
	}, 1000);
}

//Funcion tirar ya
function ya() {
	const barraDeProgreso = document.getElementById('barraProg');
	valorActual = 0;
	barraDeProgreso.style.width = 0 + '%';
}


// Listeners

//Hora
window.addEventListener("load", hora, false)

//Bloquear fichas
window.addEventListener("load", comprobarFichas, false)

// Fichas
document.getElementById("c1").addEventListener("click", gris1, false);
document.getElementById("c2").addEventListener("click", gris2, false);
document.getElementById("c10").addEventListener("click", gris10, false);
document.getElementById("c50").addEventListener("click", gris50, false);
document.getElementById("c100").addEventListener("click", gris100, false);
document.getElementById("c200").addEventListener("click", gris200, false);
document.getElementById("c500").addEventListener("click", gris500, false);
document.getElementById("c1000").addEventListener("click", gris1000, false);

//Elegir un tipo de apuesta
document.getElementById("0").addEventListener("click", apostar, false);
document.getElementById("1").addEventListener("click", apostar, false);
document.getElementById("2").addEventListener("click", apostar, false);
document.getElementById("3").addEventListener("click", apostar, false);
document.getElementById("4").addEventListener("click", apostar, false);
document.getElementById("5").addEventListener("click", apostar, false);
document.getElementById("6").addEventListener("click", apostar, false);
document.getElementById("7").addEventListener("click", apostar, false);
document.getElementById("8").addEventListener("click", apostar, false);
document.getElementById("9").addEventListener("click", apostar, false);
document.getElementById("10").addEventListener("click", apostar, false);
document.getElementById("11").addEventListener("click", apostar, false);
document.getElementById("12").addEventListener("click", apostar, false);
document.getElementById("13").addEventListener("click", apostar, false);
document.getElementById("14").addEventListener("click", apostar, false);
document.getElementById("15").addEventListener("click", apostar, false);
document.getElementById("16").addEventListener("click", apostar, false);
document.getElementById("17").addEventListener("click", apostar, false);
document.getElementById("18").addEventListener("click", apostar, false);
document.getElementById("19").addEventListener("click", apostar, false);
document.getElementById("20").addEventListener("click", apostar, false);
document.getElementById("21").addEventListener("click", apostar, false);
document.getElementById("22").addEventListener("click", apostar, false);
document.getElementById("23").addEventListener("click", apostar, false);
document.getElementById("24").addEventListener("click", apostar, false);
document.getElementById("25").addEventListener("click", apostar, false);
document.getElementById("26").addEventListener("click", apostar, false);
document.getElementById("27").addEventListener("click", apostar, false);
document.getElementById("28").addEventListener("click", apostar, false);
document.getElementById("29").addEventListener("click", apostar, false);
document.getElementById("30").addEventListener("click", apostar, false);
document.getElementById("31").addEventListener("click", apostar, false);
document.getElementById("32").addEventListener("click", apostar, false);
document.getElementById("33").addEventListener("click", apostar, false);
document.getElementById("34").addEventListener("click", apostar, false);
document.getElementById("35").addEventListener("click", apostar, false);
document.getElementById("36").addEventListener("click", apostar, false);
document.getElementById("3-36").addEventListener("click", apostar, false);
document.getElementById("2-35").addEventListener("click", apostar, false);
document.getElementById("1-34").addEventListener("click", apostar, false);
document.getElementById("1st").addEventListener("click", apostar, false);
document.getElementById("2nd").addEventListener("click", apostar, false);
document.getElementById("3rd").addEventListener("click", apostar, false);
document.getElementById("1-18").addEventListener("click", apostar, false);
document.getElementById("even").addEventListener("click", apostar, false);
document.getElementById("red").addEventListener("click", apostar, false);
document.getElementById("black").addEventListener("click", apostar, false);
document.getElementById("odd").addEventListener("click", apostar, false);
document.getElementById("19-36").addEventListener("click", apostar, false);


document.getElementById("bIngresar").addEventListener("click", mostrarModal, false);
document.getElementById("bRetirar").addEventListener("click", retirar, false);
document.getElementById("meter").addEventListener("click", ingresar, false);
document.getElementById("cerrar").addEventListener("click", cerrarModal, false);
document.getElementById("tirar").addEventListener("click", ya, false);

//Triggers para iluminar por grupos
document.getElementById("even").addEventListener("mouseover", iluminar, false);
document.getElementById("even").addEventListener("mouseout", apagar, false);
document.getElementById("odd").addEventListener("mouseover", iluminar, false);
document.getElementById("odd").addEventListener("mouseout", apagar, false);
document.getElementById("1-18").addEventListener("mouseover", iluminar, false);
document.getElementById("1-18").addEventListener("mouseout", apagar, false);
document.getElementById("19-36").addEventListener("mouseover", iluminar, false);
document.getElementById("19-36").addEventListener("mouseout", apagar, false);
document.getElementById("red").addEventListener("mouseover", iluminar, false);
document.getElementById("red").addEventListener("mouseout", apagar, false);
document.getElementById("black").addEventListener("mouseover", iluminar, false);
document.getElementById("black").addEventListener("mouseout", apagar, false);
document.getElementById("1st").addEventListener("mouseover", iluminar, false);
document.getElementById("1st").addEventListener("mouseout", apagar, false);
document.getElementById("2nd").addEventListener("mouseover", iluminar, false);
document.getElementById("2nd").addEventListener("mouseout", apagar, false);
document.getElementById("3rd").addEventListener("mouseover", iluminar, false);
document.getElementById("3rd").addEventListener("mouseout", apagar, false);
document.getElementById("3-36").addEventListener("mouseover", iluminar, false);
document.getElementById("3-36").addEventListener("mouseout", apagar, false);
document.getElementById("2-35").addEventListener("mouseover", iluminar, false);
document.getElementById("2-35").addEventListener("mouseout", apagar, false);
document.getElementById("1-34").addEventListener("mouseover", iluminar, false);
document.getElementById("1-34").addEventListener("mouseout", apagar, false);


