
//MIÉRCOLES 21 DE FEBRERO: Apuntes del miércoles 1

//tipos de variable:

var num = 3; //numeral
var bool = true; //booleanos
var str = ":)"; //string
var arr = []; // array <—no es un primitivo
var obj = {}; 
var a = function(); 

//undefined
//null


//Los objetos no tienen índice, la única manera de recorrerlos es con el
 for(key in obj){
	console.log(key)
}


//para recorrer rapidamente un array
for(index of array){

}



for(key in obj) //object
for(index of array) // arrays y strings
for(var i 0; i<arr.length; i++) //arrays
arr.forEach(function()) // métodos que aceptan funciones como parámetros Highter order function

/*
== // compara dato pero no tipo de dato
"0" == 0; //true
=== // comparación extricta
 "0"=== 0; //false
 */



 // ternarios

 function sayHi(){
 	console.log("Hi!")
 }

 function sayBye(){
 	console.log("Bye!")
 }

 var num1 = 1;
 var num2 = 4;

 var result = num1+num2<10 ? sayHi(): sayBye();




