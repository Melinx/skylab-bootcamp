// SKYLAB AIRLINES

var userName = prompt("¿Cuál es tu nombre de usuario?");
	alert("Hola, " + userName + ", bienvenido/a a Skylab Airlines. A continuación te mostramos los vuelos de hoy: \n");

var flights = [ 
		{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
		{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
		{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
		{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
		{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
		{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
		{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
		{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
		{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
		{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
		]
/*
El usuario visualizará todos los vuelos disponibles de una forma amigable: 
El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
*/
function all(){

	function info (){
		flights.forEach(function(obj){
			if (obj.scale === true){
		  	console.log("* El vuelo numero " + obj.id + " con destino: " + obj.to + " y origen en: " + obj.from 
		  	+ " tiene un coste de " + obj.cost + "€ y realiza una escala.")
		  	} else {
			console.log("* El vuelo numero " + obj.id + " con destino: " + obj.to + " y origen en: " + obj.from 
		  	+ " tiene un coste de " + obj.cost + "€ y no realiza ninguna escala.") }
		})}
	info()

	//A continuación, el usuario verá el coste medio de los vuelos.

	function costAv(){
		var totalCosts = 0;
		flights.forEach(function(obj){
			totalCosts += obj.cost;
		})
		var calcAverage = totalCosts/flights.length;
			console.log("\n ==> El precio medio de los " + flights.length + " vuelos es de " + calcAverage);
	}
	costAv()

	//También podrá ver cuantos vuelos efectúan escalas.

	function withScale(){
		var totalScales = 0;
		flights.forEach(function(obj){
			if (obj.scale === true){
				totalScales +=1}
		})
		console.log("\n ==> De los " + flights.length + " vuelos totales, " + totalScales + " realizan escala.")
	}
	withScale()

	//Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.

	function last(){
		var lastFlights = [];
		flights.forEach(function(obj){
			if(obj.id >= (flights.length)/2) {
			lastFlights += ' ' + obj.to ;
		}
		})
		console.log("\n ==> Y los últimos " + (flights.length)/2 + " vuelos de hoy son a: " + lastFlights + '.')
	}
	last()}

all()

//DUDA ALEXXX: porque no le gusta el .join al final del console.log para lastFlights? He probado .split('').join('').split() y cosas de esas pero nada..


// BAD ALTERNATIVE... no need for this! 
//other option with all baby functions inside daddy func, but properties not grouped per item but all same values listed at a time. 

function info (id, to, from, cost, scale){
	this.id = id;
	this.to = to;
	this.from = from;
	this.cost = cost;
	this.scale = scale;

	function flightId(){
		flights.forEach(function(obj){
			console.log("Vuelo número: " + obj.id)})
	}
	function flightTo(){
		flights.forEach(function(obj){
			console.log("\n Con destino: " + flights.to)})
	}
	function flightFrom(){
		flights.forEach(function(obj){
		console.log("\n Y origen en: " + flights.from)})
	}
	function flightCost(){
		flights.forEach(function(obj){
		console.log("\n Tiene un coste de: " + flights.cost + " euros")})
	}
	function flightScale(){
		if (scale === true){
			console.log("\n Con una escala...")
		}
		else {
			console.log("\n ¡Es vuelo directo!")
		}
	}
flightId()
flightTo()
flightFrom()
flightCost()
flightScale()
}

info()