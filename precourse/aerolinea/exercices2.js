//a) Escribe una función que liste los nombres de propiedad del objeto 
//(Puedes usar el objeto creado más arriba)

function features (){
	var avenger = {
		race : 'human',
		class : 'a',
		level : 0,
	};
	for(prop in avenger){
		console.log(prop + " ==> " + avenger[prop])}}
		features()
/*result ==> 
race ==> human
class ==> a
level ==> 0
*/

//b) Ahora, crea una función que liste solo los valores de las propiedades.

//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.

function features (){
	var avenger = {
		race : 'human',
		class : 'a',
		level : 0,
	};
	for(prop in avenger){
		avenger.level = 1;
		console.log(prop + " ==> " + avenger[prop])}}
		features()


//d) Ahora, elimina la propiedad ID ((LEVEL)) y asegura los cambios.

function features (){
	var avenger = {
		race : 'human',
		class : 'a',
		level : 0,
	};
	for(prop in avenger){
		delete avenger.level;
		console.log(prop + " ==> " + avenger[prop])}}
		features()

//e) Añade una nueva propiedad, por ejemplo city y dale un valor.

function features (){
	var avenger = {
		race : 'human',
		class : 'a',
		level : 0,
	};
	avenger.id = 325;
	for(prop in avenger){
		console.log(prop + " ==> " + avenger[prop])
	}
}
features()

//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.

function features (newValue){
	var avenger = {
		race : 'human',
		class : 'a',
		level : 0,
	};
	avenger.id = newValue;
		console.log("new prop ==> " + newValue)
	
}
features(325)

//OR ****

//f) Lista el numero de propiedades que contiene el objeto.

function features (newValue){
	var avenger = {
		race : 'human',
		class : 'a',
		level : 0,
	};
	avenger.id = newValue;
	//console.log("new prop ==> " + newValue)
	console.log("This object contains a total of " + Object.keys(avenger).length + " properties")
}
features(325)

//result ==> 'This object contains a total of 4 properties'


//g) Cambia la propiedad name por fullName. g1) y asegura los cambios
	function features (){
		var avenger = {
			race : 'human',
			class : 'a',
			level : 0,
			id : 89,
		};
		avenger.fullRace = avenger.race;
		delete avenger.race;
		for(prop in avenger){
			console.log(prop + " ==> " + avenger[prop])
		}
	}
	features()

	/* RESULT ==> 
class ==> a
level ==> 0
id ==> 89
fullRace ==> human
*/

//h) Lista todas las propiedades del objeto a través de un console.log()

function features (){
		var avenger = {
			race : 'human',
			class : 'a',
			level : 0,
			id : 89,
		};
		avenger.fullRace = avenger.race;
		delete avenger.race;
		for(prop in avenger){
			console.log("Hi my " + prop + " is " + avenger[prop])
		}
	}
	features()

	/*
Hi my class is a
Hi my level is 0
Hi my id is 89
Hi my fullRace is human
*/

//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás 
//ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)

function avenger (name, race, superpower, city, element){
 this.name = name;
 this.race = race;
 this.superpower = superpower;
 this.city = city;
 this.element = element;
}
var johnDoe = new avenger ("Jon Doe", "human", "arms", "London", "earth");
console.log(johnDoe)

//j) Crea otro objeto y imprime sus propiedades por pantalla.

	function avenger (name, race, superpower, city, element){
	 this.name = name;
	 this.race = race;
	 this.superpower = superpower;
	 this.city = city;
	 this.element = element;
	}
	var johnDoe = new avenger ("Jon Doe", "human", "arms", "London", "earth");
	console.log(johnDoe)
	var otherAvenger = new avenger ("a", "s", "er", "as", "ads");
		console.log(otherAvenger)
// result ==> avenger {name: "a", race: "s", superpower: "er", city: "as", element: "ads"}city: "as"element: "ads"name: "a"race: "s"superpower: "er"__proto__: Object


//k) Crea una propiedad del objeto que liste automáticamente los valores 
//de la instancia. . Example of property

function avenger (name, race, superpower, city, element){
	 this.name = name;
	 this.race = race;
	 this.superpower = superpower;
	 this.city = city;
	 this.element = element;
	 this.listProperties = function(){
	 	console.log(this.name + ", " + this.race + ", " + this.superpower 
	 		+ ", " + this.city + ", " + this.element)
	 }
	}
		var johnDoe = new avenger ("John Doe", "human", "arms", "London", "earth");
		johnDoe.listProperties()
//RESULT ==> Jon Doe, human, arms, London, earth

//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
function avenger (name, race, superpower, city, element){
	 this.name = name;
	 this.race = race;
	 this.superpower = superpower;
	 this.city = city;
	 this.element = element;
	 this.listProperties = function(){
	 	console.log(this.name + ", " + this.race + ", " + this.superpower 
	 		+ ", " + this.city + ", " + this.element)
	 }
	}
		for(prop in avenger){
			console.log(avenger[prop])
		}
		var johnDoe = new avenger ("John Doe", "human", "arms", "London", "earth");
		johnDoe.listProperties()
avenger(johnDoe)

//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, 
//crea una función para que solo liste los nombres de los Avengers que sean de la misma 
//ciudad y cuantos hay. *+*+

function avenger (name, race, superpower, city, element){
	 this.name = name;
	 this.race = race;
	 this.superpower = superpower;
	 this.city = city;
	 this.element = element;
	 this.markAv = markAv;
	 this.listProperties = function(){
	 	console.log(this.name + ", " + this.race + ", " + this.superpower 
	 		+ ", " + this.city + ", " + this.element + ', ' + this.markAv)
	 }
	}
		for(prop in avenger){
			console.log(avenger[prop])
		}
		var avenger1 = new avenger ("John Doe", "human", "arms", "London", "earth", 654);
		var avenger2 = new avenger ("Juan", "raro", "piernas", "Bcn", "luna", 6);
		var avenger3 = new avenger ("Juanjo", "normal", "s", "Bcn", "marte", 66);

var arrOfAvengers = [avenger1, avenger2, avenger3] 
var avengerFiltered = arrOfAvengers.filter(function(avenger){return avenger.city === "Bcn"})

console.log(avengerFiltered)

//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.

function avenger (id, name, race, superpower, city, element, markAv){
	 this.id = id;
	 this.name = name;
	 this.race = race;
	 this.superpower = superpower;
	 this.city = city;
	 this.element = element;
	 this.markAv = markAv;
	 this.listProperties = function(){
	 	console.log(this.name + ", " + this.race + ", " + this.superpower 
	 		+ ", " + this.city + ", " + this.element + ', ' + this.markAv)
	 }
	}
		for(prop in avenger){
			console.log(avenger[prop])
		}
		var avenger1 = new avenger (0, "John Doe", "human", "arms", "London", "earth", 654);
		var avenger2 = new avenger (1, "Juan", "raro", "piernas", "Bcn", "air", 6);
		var avenger3 = new avenger (2, "Juanjo", "normal", "s", "Bcn", "water", 66);
		var avengerIndra = new avenger (3, "Indra", "pro", "cool", "Arbucies", "fire", 89);

	var arrOfAvengers = [avenger1, avenger2, avenger3, avengerIndra]

	var totalMarkAv = 0;
	arrOfAvengers.forEach(function(obj){
			totalMarkAv += obj.markAv; // que fa exactament el +=. seria com dirli totalMarkAv = totalMarkAv + obj.markAv
	})
	var calcAverage = totalMarkAv/arrOfAvengers.length;
	console.log("The average of all " + arrOfAvengers.length + " is " + calcAverage)

// YASSSSSS!! ==> "The average of all 4 is 203.75"

/* ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que 
tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus 
markAv y que muestre el mayor de ambos. */
// ? RESOURCE: https://gist.github.com/nicbell/6081098

		
	function compareMarkAvs(avenger1, avenger2){
		 if (avenger1.markAv > avenger2.markAv){
		 	console.log(avenger1.name +" is better than " + avenger2.name);
		 }
		 else {
		 	console.log(avenger1.name +" is not as good as " + avenger2.name);
		 }
}
	compareMarkAvs(avenger1, avenger2);
	
/*


	






















