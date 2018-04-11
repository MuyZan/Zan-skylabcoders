//a) Declara tu nombre y muéstralo por consola:

var name = "Zan";
console.log(name);

//b) Declara tu edad y muéstralo por consola:

var age = 30;
console.log(age);

//c) Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola:

var info = ["Sandy", "Zan", 30];
console.log(info);

//d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:

var data = {name: "Zan", age: 30};
console.log(data);

//e) Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.
console.log(info[0]);
console.log(info[1]);
console.log(info[2]);

//f) Crea una estructura condicional que imprima el número mayor entre dos números.
var a = 25;
var b = 12;

if (a > b){
	console.log(a);
}else{
	console.log(b);
}

//f1) Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:

if (a > b){
	console.log(a);
}else if (a === b) {
	console.log("The number are equal");
}else{
	console.log(b);
}


//g) Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'

var myArray = [1,2,3,4,5];
var middleArray = Math.ceil(myArray.length/2);

for (var i=0; i < myArray.length; i++){
	if (myArray[i] === middleArray){ 
		console.log(myArray[i] + " We are in the middle of loop");
	} else {
		console.log(myArray[i]);
	}
				
}

//g1) Declara tu nombre y tu edad dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error
var myName = "Zan";
var myAge = 30;
var name = "Diana"
var age = 30;

if (name === myName && age === myAge){
	console.log("Hi! Glad to see u again!");
}else{
	console.log("this is not you!")
}

//2) Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.

var myArray = ["Zan", 30];

var myName = myArray[0];
var myAge = myArray[1];

for (var i = 0; i < myArray.length; i++){
	if(i == 0){
		console.log("We find your name: " + myName);
	} else {
	console.log("We find your age: " + myAge);
	}
}
