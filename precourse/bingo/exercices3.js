// a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

function greet (name){
	console.log("Hi there, " + name + ', sup!')
}
greet("Indra")
// RESULT ==> Hi there, Indra, sup!


// b) Intenta retornar los valores en lugar de usar console.log

function greet (name){
	return "Hi there, " + name + ', sup!'
}
greet("Indra")
// RESULT ==> "Hi there, Indra, sup!"


// c) Ahora, añade tu edad y concaténala al return

function greet (name, age){
	return "Hi there, " + name + ', sup! ' + "I see you're " + age
}
greet("Indra", 28)
// RESULT ==> "Hi there, Indra, sup! I see you're 28"

// d) Iguala tu función a una variable y ejecútala

var myFunc = function(){
	greet("Indra", 28)
}
myFunc()


// e) Ahora declara otra funcion que devuelva tu edad y asigna 
//su resultado a otra variable, intenta imprimir sus dos resultados concatenados 

function getAge(age){	
	return "I see you are " + age
}

function getName(name){
	var age = getAge(28);
	name = 'indra'
	console.log(age + " and your name is " + name)
}	
var myData = getName()

// RESULT ==> con return da undefined y con el console.log da la frase concatenada, pero de que me sirve la var myData ahora?


// e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.

function randomNum(ran){
	return ' and your random number is ' + (Math.random()*10).toFixed()
}
randomNum()
//works

function getName(name){
	var age = getAge(28)
	var name = 'indra'
	var ran = randomNum()
	console.log(age + " and your name is " + name + ran)
}
getName()
// RESULT ==> YES! >> I see you are 28 and your name is indra and your random number is 7 


// f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

function getAge(age){	
	return "I see you are " + age
}

function getName(name){
	return ", your name is " + name
}

function randomNum(){
	return ' and your random number will be ' + (Math.random()*10).toFixed()
}

getAge(55) + getName('Lluis') + randomNum()



// g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre 
//deberá ser la llamada a las funciones hijas

function daddy(age,name){
	var age = getAge()
	var name = getName()
	var ran = randomNum()
	return age + name + ran
}
daddy(24, 'Marta', )
// undefined RESULT ==> "I see you are undefined, your name is undefined and your random number will be 5"

function allAkaDaddy (){		
	function getAge(age){	
		var age = 83;
		return "I see you are " + age
	}

	function getName(name){
		var name = 'Jon';
		return  ". Your name is " + name
	}

	function randomNum(){
		return '. Your random number will be ' + (Math.random()*10).toFixed()
	}

	console.log(getAge() + getName() + randomNum())
}

allAkaDaddy()


// h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()

function randomNum(){
	return (Math.random()*100).toFixed()
}

function getAge(age){	
	var age = randomNum();
	console.log("I see you are " + age)
}

getAge()


// i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50

function randomNum(){
	return (Math.random()*50).toFixed().toString()
}

function ageRange(){
	var ran = randomNum()
	if(ran <= 20){
		return "Aww.. what a baby! You're only " + ran + "!"
	}
	else{
		return "You could be an adult already, being " + ran + " y/o"
	}
}

function getRandomAge(age){	
	var age = ageRange()
	return("Here's my thoughts about your age: " + age)
}
getRandomAge()

//RESULT: ACCOMPLISHED

// j) Al return de la función name(), concaténale otro mensaje

function getName(){
	var ageRan = getRandomAge()
	var name = 'Jon';
	return "Your name is " + name + ". " + ageRan
}
getName()
//RESULT ACCOMPLISHED: "Your name is Jon. Here's my thoughts about your age: Aww.. what a baby! You're only 15!"


// k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable


function allAkaDaddy (){	

	function getAge(age){	
		var age = randomNum2()
		return "* I see you are " + age
	}

	function getName(name){
		var name = 'Jon';
		return  "* Your name is " + name
	}

	function randomNum(){
		return '* Your random lucky number will be ' + (Math.random()*10).toFixed()
	}

	function randomNum2(){
		return (Math.random()*50).toFixed().toString()
	}

	console.log(getAge() + "\n" + getName() + "\n" + randomNum())
}

allAkaDaddy()


// l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada

var name = prompt("What's your name?")
if (typeof name !== String) {
	var name = prompt("C'mon, give us a name!")
}
else {
	allAkaDaddy(name)
}

	// RESULT ==> not accomplished.


//m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. 
//Retorna a la funcion padre y concaténalo en el return padre.


function randomNum2(){
	return (Math.random()*50).toFixed().toString()
}

function allAkaDaddy (){	

	function getAge(){	
		var age = randomNum2()
		return "* I see you are " + age
	}

	function getName(){
		var name = 'Jon';
		return  "* Your name is " + name
	}

	console.log(getAge() + "\n" + getName() + "\n* " + randomNum2())
}

allAkaDaddy()

//n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se 
//encargará de llamarlas todas y mostrar sus resultados.

function randomNum2(){
	return ((Math.random()*50).toFixed().toString())
}
function randomNum(){
	return '* Your random lucky number will be ' + (Math.random()*10).toFixed()
}
function getAge(){	
	var age = randomNum2()
	return "* I see you are " + age
}

function getName(){
	var name = 'Jon';
	return  "* Your name is " + name
}

function start(){
	var random = randomNum2()
	var age = getAge()
	var name = getName()
	return random + age + name
}
start()

// RESULT: NOT ACCOMPLISHED with RETURNs. but it works with console.log inside father. 

// ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los 
//resultados de esta array como siempre.

// LA PLANTILLA QUE HE ENCONTRADO:

//super simple template:

		var arrOfData = [];

		function add(descript) {
			data.push(descript);
		}
		add("a")
		console.log(data)
		
		/////

var arrOfData = [];

function getAge(){	
	var age = randomNum2()
	arrOfData.push( "* I see you are " + age)
}

function getName(){
	var name = 'Holly';
	arrOfData.push("* Your name is " + name)
}

function randomNum(){
	arrOfData.push('* Your random lucky number will be ' + (Math.random()*10).toFixed())
}

function start(){
	randomNum()
	getAge()
	getName()
	return arrOfData
}
start()
// = console.log(arrOfData)





var argsContainer = ['hello', 'you', 'there'];
var functionsContainer = [];

for (var i = 0; i < argsContainer.length; i++) {
	var currentArg = argsContainer[i]; 

	functionsContainer.push(function(currentArg){
		console.log(currentArg);
	});
};

for (var i = 0; i < functionsContainer.length; i++) {
	functionsContainer[i](argsContainer[i]);
}

// o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a 
// la array que crea father(). Muestra toda la array completa.





// p) 🔞 👊🏼 Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un 
//mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres, 
//con lo cual, también deberás refactorizar las funciones hijas.


// RESOURCE: var rand = myArray[Math.floor(Math.random() * myArray.length)];


var myNames = ['Juan', 'Pere', 'Carlos', 'Simon', 'Guadalupe', 'Antonia', 'Isabella', 'Renato', 'Maricarmen', 'Leo']
var randomName = myNames[Math.floor(Math.random()* myNames.length)];

function getName(){
	name = randomName;
	return "* Your name is " + name
}

function start(){
	console.log(getName())

}
start()






















