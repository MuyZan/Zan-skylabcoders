//a) Que hora es? Declara la hora como número y devuelvela como String

//modo 1:
var date = new Date();
var hour = date.getHours();
var hourString = hour.toString();
console.log(hourString);

//modo 2:
var hour = 1.04;
console.log("It's " + hour.toString() + " of the night");

//b) Nono, que hora exactamente? Dime la hora sin minutos

var onlyHour = Math.trunc(hour);

console.log("It's around " + onlyHour + " of the night")


//c) Ahora, declara tu hora y muéstrala redondeada.
var hour = 3.35;
var stringHour = hour.toString();
var roundHour = Math.round(stringHour);

console.log("It's around " + roundHour + " of the night")


//d) Hagamos una calculadora. Primero, la suma.

var a = 7;
var b = 3;
var sum = a + b;

console.log ("The sum of " + a +"+"+ b +" is " + sum);

var rest = a - b;

//d1) Añade la resta...

console.log ("The sum and rest of " + a + " and " + b + " is " + sum + " and " + rest);


//d2) Y la multiplicación

var mult = a * b;

console.log(sum+", " + rest + " and " + mult);

//d3) Por ultimo, la división

var div = a / b;

console.log(sum +", " + rest+", " + mult + " and " + div.toFixed(1));



//d4) Ahora, intenta multiplicar un número por una string, que devuelve?

console.log(10*"hour"); // NaN

//e) Podemos controlar este error con un condicional if?

var a = 10;
var b = "hour";

if (typeof a != 'number' || typeof b != 'number' ){
	console.log("You can't do this operation!")
} else{
	console.log(a * b);
}