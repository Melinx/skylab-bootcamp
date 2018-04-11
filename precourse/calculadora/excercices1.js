
//\\//\\// STRINGS //\\//\\// --- https://www.w3schools.com/jsref/jsref_obj_string.asp

// a) Puedes contar cuantas letras tiene tu nombre?

function countLetters (name) {
console.log('my name has ' + name.length + ' letters')
}
countLetters('Indra')
//RESULT: my name has 5 letters


// b) Añade tu apellido e indica en que posición se encuentra

function startLastName (name) {
console.log('my last name starts at ' + name.indexOf('Roura') + ' position')
}
startLastName ('Indra Roura')
// Result => my last name starts at 6 position

//OR
function startLastName (name) {
console.log('my last name starts at ' + name.search("Roura") + ' position')
}
startLastName ('Indra Roura')
// QUESTION: Why Result => my last name starts at -1 position ---- vol 
//dir que no l'ha trobat!! YEHHH

			//OLD w/o function
			var myName = "indra roura";
			console.log("My last name starts on position " +myName.indexOf("roura"))
			//OR//
			var myName = "indra roura";
			console.log(myName.search("roura"))


// c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.

function showOnly (name) {
	name = 'Indra Roura'
console.log('my name is just ' + name.slice(0, 5))
}
showOnly(name)

			//OLD w/o function
			var myName = "indra roura";
			console.log("My name is " + myName.match("indra"))

// D) SOLO en apellido

function showOnlyLast (name) {
	name = 'Indra Roura'
console.log('my name is just ' + name.slice(6))
}
showOnlyLast(name)

//huhH 

// d1) Iguala el resultado a una variable nueva e imprímela por pantalla.

function myName (name) {
	name = 'Indra Roura'
	name = 'Indra'
console.log(name.)
}
myName(name)
//QUESTION: Este no sé ^_^

			var myName = "indra roura";
			var myNewName = "roura";
			console.log(myName + ", " +myNameAgain)


/*e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a 
 mostrar la variable con los cambios. */

function myFancyName (name) {
	name = 'Indra Roura'
	name.replace(name.slice(6), 'Ms. Roura') 
console.log(name)
}
myFancyName(name)

//QUESTION: Este no sé tampoco ^_^

			var myName = "indra roura";
			var myNewName = "roura";
			console.log("Hello, " +myNewName.replace("roura", "Ms. Roura"))

// f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

function allUp (name) {
	name = 'Indra Roura'

console.log(name.toUpperCase)
}
allUp(name)


			var myName = "indra roura";
			console.log(myName.substr(6).toUpperCase())

/* g) Ahora declara una variable nueva e igualala 
a la anterior variable sumándole, además, un mensaje.*/

var something = myName.match("indra")+ " is awesome";
console.log(something) 

/* h) Ahora, puedes seleccionar la inicial 
de tu nombre y apellido y mostrarlas por pantalla?*/

var myName = "indra roura";
console.log((myName.charAt(0) + ". " + myName.charAt(6)+ ". " ).toUpperCase())


//\\//\\// ARRAYS //\\//\\// --- https://www.w3schools.com/jsref/jsref_obj_array.asp


/*a) Declara tu nombre completo en una array 
y muéstralo separando cada letra por "/" */

var myNames = ["Indra", "Roura", "Fuster"];
	console.log(myNames.join("").split('').join("/"))
 
// b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

var myNames = ["Indra", "Roura", "Fuster"];
console.log(myNames[1].split('').join("|"))

// c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

// NOTE: Interesting i++ /i-- results shapes

var myNames = ["Indra", "Roura", "Fuster"];

	function splitCharacters(){
		myNames = myNames.join("").split('').join("/")
			for(var i =0; i<myNames.length; i++){
			console.log(i + "º " + myNames.substr(i++)) // i -- ==> bad idea
}
}
splitCharacters()

/*
0º I/n/d/r/a/R/o/u/r/a/F/u/s/t/e/r
2º n/d/r/a/R/o/u/r/a/F/u/s/t/e/r
4º d/r/a/R/o/u/r/a/F/u/s/t/e/r
6º r/a/R/o/u/r/a/F/u/s/t/e/r
8º a/R/o/u/r/a/F/u/s/t/e/r
10º R/o/u/r/a/F/u/s/t/e/r
12º o/u/r/a/F/u/s/t/e/r
14º u/r/a/F/u/s/t/e/r
16º r/a/F/u/s/t/e/r
18º a/F/u/s/t/e/r
20º F/u/s/t/e/r
22º u/s/t/e/r
24º s/t/e/r
26º t/e/r
28º e/r
30º r
*/

var myNames = ["Indra", "Roura", "Fuster"];

	function splitCharacters(){
		myNames = myNames.join("").split('').join("/")
			for(var i =0; i<myNames.length; i++){
			console.log(i + "º " + myNames.substr(i++, i--))
}
}
splitCharacters()

/*
0º	I
1º	/n
2º	n/d
3º	/d/r
4º	d/r/a
5º	/r/a/R
6º	r/a/R/o
7º	/a/R/o/u
8º	a/R/o/u/r
9º	/R/o/u/r/a
10º	R/o/u/r/a/F
11º	/o/u/r/a/F/u
12º	o/u/r/a/F/u/s
13º	/u/r/a/F/u/s/t
14º	u/r/a/F/u/s/t/e
15º	/r/a/F/u/s/t/e/r
16º	r/a/F/u/s/t/e/r
17º	/a/F/u/s/t/e/r
18º	a/F/u/s/t/e/r
19º	/F/u/s/t/e/r
20º	F/u/s/t/e/r
21º	/u/s/t/e/r
22º	u/s/t/e/r
23º	/s/t/e/r
24º	s/t/e/r
25º	/t/e/r
26º	t/e/r
27º	/e/r
28º	e/r
29º	/r
30º	r
*/

var myNames = ["Indra", "Roura", "Fuster"];

	function splitCharacters(){
		myNames = myNames.join("").split('').join('')
			for(var i =0; i<myNames.length; i++){
			console.log(i + "º " + myNames[i].join(' ,'))
}
}
splitCharacters()

/// YASSSSSS ///
/*

0º	I
1º	n
2º	d
3º	r
4º	a
5º	R
6º	o
7º	u
8º	r
9º	a
10º	F
11º	u
12º	s
13º	t
14º	e
15º	r

*/

//____________________

//question: BUT STILL.. How can I have all characters show in one line? 
// .join(', ') in console.log gives TypeError: myNames.join is not a function
    at splitCharacters
var myNames = ["Indra", "Roura", "Fuster"];

	function splitCharacters(){
		myNames = myNames.join("").split('').join('')
			for(var i =0; i<myNames.length; i++){
			console.log(i + "º " + myNames[i].join(' ,'))
}
}
splitCharacters()

// question: No entiendo la lógica de que añadiendo .split("/") 
// en la segunda te saque el resultado en [ ] pero no te lo junte con la /

var str = "How are you doing today?";
var res = str.split("").join();
console.log(res)

// H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?

var str = "How are you doing today?";
var res = str.split("o").join().split("/");
console.log(res)
// ["H,w are y,u d,ing t,day?"]
// INTERESTING!!!

// separator

var str = "How are you doing today?";
var res = str.split("", 5).join(); //.join() takes off "" and no spaces between characters in array []
console.log(res)
//(5) ["H", "o", "w", " ", "a"] __________________

//d)Como en el ejercicio anterior, pero seleccionando tu apellido

var myNames = ["Indra", "Roura", "Fuster"];
	function splitCharacters(){
		myNames = myNames[1].split("").join('')
			for(var i =0; i<myNames.length; i++){
			console.log(i + "º " + myNames[i])
}} splitCharacters()
/* 
0º R
1º o
2º u
3º r
4º a
NEEDS FIXING: wrong index position */ 


//Puedes indicarme las iniciales de tu nombre y apellido? 
// Como en el ejercicio h de la sección de strings
var myNames = ["Indra", "Roura", "Fuster"];
var myInitials = function (letter){
 	for (var i=0; i<letter.length; i++){
 		console.log(letter[i].charAt(0));
 } }  
 myInitials(myNames)

//OR... Much more simple, w/o creating a function.

var myNames = ["Indra", "Roura", "Fuster"];
 	for (var i=0; i<myNames.length; i++){
 		console.log(myNames[i].charAt(0));
 } 

// f) Ahora, reformula la array, introduciendo tu nombre en primera posición, 
//tu apellido en segunda, y además añade en otra posicion tu edad. Muestra 
//por pantalla solo tu nombre y tu edad en un solo mensaje.


var myData = ["Indra", "Roura"];
function addAndSelect(){
	myData.push(28)
console.log("Hello my name is " + myData[0]+ ' and I am ' +myData[2] + " years old.");
}
addAndSelect()


/*g) Prepara una función para añadir tu City a la array, 
muestra un mensaje mostrando el contenido de toda la array, 
así aseguraremos los cambios.*/

var myData = ["Indra", "Roura", 28]
function addCity(){
myData.push("Arbúcies")
  console.log("City added to array! => " + myData.join(" | "))
}
addCity()

// Result =>  City added to array! => Indra | Roura | 28 | Arbúcies

// FINDING
	var x = ['a', 'b', 'c'];
	var y = ['d', 'e', 'f'];
	x.push.apply(x, y);
	console.log(x)
// (6) ["a", "b", "c", "d", "e", "f"]
// similar tp .concat()

			var mySelector = ["Indra", "Roura", 28]
			mySelector.push("Arbucies")
			  console.log(mySelector)

//------
  var myData = ["Indra", "Roura", 28]

function addCity () {
	myData.push("Arbúcies")
  console.log("City added to array! => " + myData) }
addCity()

/*
- Entiendo q el error era volver a declarar la variable dentro de la funcion.
- Ahora veo q no hace falta tener el = en la linea donde se utiliza el metodo
- Y veo q lo de utilizar el metodo en el console.log no es buena idea, sino q 
la funcion esta para q lo utilizes como codigo fuera del console.log
*/

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

var myData = ["Indra", "Roura", 28, "Arbúcies"];
function myCityDelete(){
	myData.pop()
console.log("City delted from array! => " + myData.join(' | '))
}
myCityDelete()

// WRONG Result => City delted from array! => Arbúcies
// ALEX: Cómo lo hago para mostrar la array sin el último elemento, en vez de mostrar solo el último elemento?
// 2/26/18: Mutacion del código. NO ESTOY LOCA. De repente funciona... 
// RIGHT RESULT ===>>> City delted from array! => Indra | Roura | 28


//j) Ahora, elimina el nombre y asegura los cambios Resources: 
//https://www.w3schools.com/jsref/jsref_shift.asp

var myData = ["Indra", "Roura", 28, "Arbúcies"];
function myNameDelete(){
	myData.shift()
console.log("Name delted from array! => " + myData.join(' | '))
}
myNameDelete()

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() 
//estará en la última posición, como podria hacer para introducirlo en la primera 
//posición? Resources: https://www.w3schools.com/jsref/jsref_splice.asp
var myData = ["Roura", 28, "Arbúcies"];
function myNameBack(){
	myData.unshift("Indra")
console.log("Name added back to array! => " + myData.join(' | '))
}
myNameBack()

//OR

var myData = ["Roura", 28, "Arbúcies"];
function myNameBack(){
	myData.splice(0,0,"Indra")
console.log("Name added back to array! => " + myData.join(' | '))
}
myNameBack()

//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número 
//multiplicado por dos.

var myDozen = [0,1,2,3,4,5,6,7,8,9,10]
function timesTwo(){
	for(var i=0; i <= myDozen.length; i = i*2)
		console.log(myDozen[i])
}
timesTwo()

/* nononono... le estas diciendo lo siguiente => i vale 0, luego 2, luego 4, luego 6 y no es eso lo que quieres
la i en cada iteración del bucle valdrá 0,1,2,3,4,5,6.... hasta la longitud total del array
es una variable auxiliar que nos ayuda dentro del bucle a ponerla entre [] para recorrer arrays
*/

//ORRR

var myNum = [0,1,2,3,4,5,6,7,8,9,10]
var doubles = myNum.map(function(myNum){return myNum * 2; });
console.log(doubles.reverse())

// RESULT ==> [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// I GOT IT! Nota de Alex: "entiendelo MUY bien, es clave"


//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

var myNum = 
var timesX = 0;
function multiplicar (myNum, timesX) {
		var result = myNum.map(function(myNum) {
		return myNum * timesX;
}); 
		console.log(result)
	}
multiplicar([0,1,2,3,4,5,6,7,8,9,10], 3)


//Resource: https://www.w3schools.com/jsref/jsref_map.asp

//m) Podrías mostrarlos en el orden inverso? Resources:


function multiplicar (myNum, timesX) {
		var multiply = myNum.map(function(myNum) {
		return myNum * timesX;}); 
		console.log(multiply.reverse())
	}
multiplicar([0,1,2,3,4,5,6,7,8,9,10], 33)

//https://www.w3schools.com/jsref/jsref_sort.asp


//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

function uniqueCount(str) {
	str = str.join("").split('').toLowerCase()
	var count = {};
	str.forEach(function(i) {count[i] = (count[i]||0) + 1;});
	console.log(count)
}

uniqueCount(["Indra", "Roura", "Fuster"])

/*Result ==> getting count for each character, treating caps as new character. 
QUESTION#1: How do I create insensitive for caps IRF? Something like / /i ?
QUESTION#2: How to print only the duplicate ones? 
I was trying if(count.forEach .. >1) but I don't know where it should go
*/

//OR
function myCounter(inputWords) {        
    return inputWords.reduce( (countWords, word) => {
        countWords[word] = ++countWords[word] || 1;
        return countWords;}, {});}

//OR

//console.log(repeatLetters) // Tony Stark, the letter 'T' => 2 times.
//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

//console.log(repeatLetters) // Tony Stark, the letters => o, n, y, s, a, r, k are not repeated, the name is => Ony Sark

//\\//\\ Numbers //\\//\\


//a) Que hora es? Declara la hora como número y devuelvela como String

function time () {
	var hour = new Date().getHours()
	console.log(hour.toString());

}
time()

/// result ==> 8

//c) Ahora, declara tu hora y muéstrala redondeada.

function time () {
	var h = new Date().getHours()
	var m = new Date().getMinutes()
	var s = new Date().getSeconds()
	console.log(h + ":" + m + ":" + s);
}
time()
//result ==> 8:42:19

// 


