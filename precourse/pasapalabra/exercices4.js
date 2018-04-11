// ## Final Challenges (JS)!

// ALEX videos 4/1 & 4/2, ejercicos para .map y .filter

function mult(nums, multBy){
	var table = nums.map(function(num){
		return num * multBy
	})

	var newTable = table.filter(function(n){ //table.filter, no "nums.filter"
		return n > table[table.length-1]/2
	})
console.log(newTable)
}
mult([1,2,3,4,5,6,7,8,9], 5)
//RESULT ==> (5) [25, 30, 35, 40, 45] // pero perque table.length es el valor de l'ultim numero de la array enlloc de la quantital de valors...?!?!?

////

// a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, 
// muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.

function group(nums){
	for (var i = 0; i<nums.length-1; i++) {
		console.log('Pareja #' + [i+1] + ' ==> ' + nums[i] + ' - ' + nums[i+1])
	}
}
group([1,2,3,4,5,6,7,8,9])

// a1) La funcion debería aceptar la array a tratar como argumento. 
//INDRA: yo lo que entendí del enunciado del a1 era que 
// le puedieras pasar los numeros que quisieras sin tener q estar dentro de una array, es decir, pasárselos como parametros.

function groupNums(nums){
	var nums = nums.map(function(n){ // ERROR || KEEPS TELLING ME "nums.map is not a function at agruparNums" -- WHY?
		if (n < nums.length) {
			return 'Pareja #' + [i+1] + ' ==> ' + nums[n] + ' - ' + nums[n+1]
		}
	})
	console.log(nums)
	}
groupNums(1,2,3)


//ALEX's Gomez CODE using Prototype!

function groupNums(){
	var nums = Array.prototype.slice.call(arguments) // WTF is THIZZ
	nums.map(function(i){
	  if (i<nums.length) {
		console.log( 'Pareja #' + [i] + ' ==> ' + nums[i-1] + ' - ' + nums[i])
	}})
}
groupNums(1,2,3,4,5,6)

// a2) Pasa también el numero a multiplicar a la función como argumento

nums = [3,4,5,7,8,5,9];

function group(nums, multBy){
	var numList = nums.map(function(num){
	  if (num<nums.length-1) {
		return 'Pareja #' + [i] + ' ==> ' + nums[i] + ' - ' + nums[i+1]
		}
	});
	var timesX = numList.forEach(function(n){
		return n * multBy})
	};
console.log(timesX)

group([1,2,3,4,5,6,7,8,9], 8)

//\\// RESULT ==> VM631:11 Uncaught ReferenceError: timesX is not defined

// FROM ALEX VIDEOS:

// ALEX videos 4/1 & 4/2, ejercicos para .map y .filter
function group1(nums){

	for (var i = 0; i<nums.length-1; i++) {
		console.log('Pareja #' + [i+1] + ' ==> ' + nums[i] + ' - ' + nums[i+1])
	}
}
group1([1,2,3,4,5,6,7,8,9])


function mult(nums, multBy){
	var numList = nums.map(function(num){
	for (var i = 0; i<nums.length-1; i++) {
		return('Pareja #' + [i+1] + ' ==> ' + nums[i] + ' - ' + nums[i+1])
	}})

	var newTable = numList.forEach(function(n){ //table.filter, no "nums.filter"
		return n > numList[numList.length-1]/2
	})
console.log(newTable)
}
mult([1,2,3,4,5,6,7,8,9], 5)


// a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.




// b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci? 
// https://www.mathsisfun.com/numbers/fibonacci-sequence.html

var 

function fibo(num1, num2){
	var nums = Array.prototype.slice.call(arguments);
	var add = nums.map(function(n){
		return nums.push([num1+num2])
		})
	var moreNums = nums.forEach(function(m){
		return add.length + add.length-1;
	})
	console.log(moreNums)
}	
fibo(0,1)
//////

var num1 = 0;
var num2 = 1; 

var nums = [];
	var num3 = num1 + num2;

var sequence = num3.forEach(function(n){
	return nums.length + nums.length-1
})

console.log(sequence)

// output: 0 1 1 2 3 5 8...
//found this, pretty simp, but result is all arrays, each adds new number, I'd like to show only the very last array 
var oldnum = 1, newnum = 1, arr=[1, 1];
function fib(num){
    if (num ===1) return arr; else num--;
    newnum = newnum + oldnum;
    oldnum = newnum - oldnum;
	console.log(arr);
    arr.push(newnum);
    fib(num);
}
fib(15);



// b2) Puedes añadir además, la posición de cada resultado?

// b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.

// b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

function fibo(10){}
//... 55 - pos 10º
// b5) Ahora, muestra los resultados en forma piramidal:


// d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:

SKY
|-|-|
LAB Entonces, uniendo las primeras letras de cada grupo, las segundas y las terceras obtienes SLKAYB.
Entonces, el programa deberá recibir SKYLAB y retornar SLKAYB

// d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.

Hint: for decrypt, only catch the pair words like: S L K A Y B , then, you get SKY, the next step is catch the odd words, S L K A Y B, group the two groups and you get the original word.

// d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro SKYLAB y devuelva SKYLAB (con todas las transformaciones internas hechas y mostrando, entre medias, la transformación)

// d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.






// TEMA 4 - c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código

var nums = '';
function codeScript(nums){
	var result = nums.map(function(num){ // WHY> num.map is not a function at codeScript
		while(result<nums.length)
			result.unshift(num); 
			result.push(num);
	});
	console.log(result)
}
codeScript('1234')


//  PASO A PASO.

//1- primero recorre con el map el array que tienes

var code = '';
function codeScript(code){
	var nums = code.split('');
	var result = [];
	nums.map(function(num){ // TODAVIA me da num.map is not a function at codeScript
		for (i=0; i<nums.length; i++){
			nums.shift();
			result.push(num[i]);
		}
	})
console.log(result)
}
codeScript('1234')

// carlos NOTE about for in Map >> el map solo se utiliza para recorrer un array de principio a fin, 
// el for te la da la opcion de recorrer hasta un cirto punto y acceder a una posicion exacta del array

//CARLOS HELPED:

var code = "1234" // Creo una variable string con el codigo

function codeScript(code) { // la funcion recibe un parametro llamado code
    var nums = code.split("") // split convierte un string a un array muy util en algunos casos
    var result = [] // creo un array result para sacar un nuevo array
    
    nums.map(function (num) { // utilizo el map para recorrer nums que es el nuevo array que he creado con el split
        result.push(num) // pusheo los numeros del 1-4 a un nuevo array
    });

    console.log(result) // printo result

}

codeScript('5678') // la funcion recibe la variable code que he instanciado arriva


// CARLOS Simple code to take 1st and push to end

var code = '';

function codeScript(code) {
    var nums = code.split('');
    var newArray = [];

    first = nums.shift()
    console.log(newArray.push(first))

    second = nums.shift()
    third = nums.shift()
    fourth = nums.shift()

    nums.map(function (num) {
        result.push(num)
    })

    newArray = [first, second, third, fourth];

    console.log(newArray)
}

codeScript('1234')

// ALEX CODE

var code=2365;
function codeScript(x) {
	var codestring=x.toString();
	var newcode=[];
	newcode[0]=codestring[3];
	newcode[1]=codestring[0];
	newcode[2]=codestring[1];
	newcode[3]=codestring[2];
	console.log(newcode.join(""));
}

codeScript(code);


// CARLOS code evolved into EMBARAZOSO 100%

var code = '';
    function codeScript(code) {
        var nums = code.split('');
        var result = [];
//1
        first = nums.shift()
        return first;

        nums.map(function(num) {
            result.push(num)
        })

        result.push(first);
//2
        second = first.shift()
        return second;

		nums.map(function(num) {
            result.push(num)
        })

        result.push(second);
//3
        third = second.shift()
        return third;

		nums.map(function(num) {
            result.push(num)
        })

        result.push(third);
        
//4
        fourth = third.shift()
        return fourth;

		nums.map(function(num) {
            result.push(num)
        })

        result.push(fourth);
        
      console.log(result);

    }
    codeScript('1234')

/////  https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php

var arr = '';

function shuffle(arr) {
    var ctr = arr.length, temp, index; // don't understand these: temp, index
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));


















