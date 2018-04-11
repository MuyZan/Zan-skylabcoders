/*Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá 
visualizar por consola la suma, resta, multiplicación y división entre ambos números. 
El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). 
El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca cualquier cosa que no sean números.

    Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, 
    volverá a mostrar las 4 operaciones de siempre.
    Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

Hint_ => results = [num1 + num2 = resultSum, num1-num2 = resultRest ....]*/


//Declaración de variables. 2 parámetros, Array de almacenamiento de resultados.
var num1;
var num2;
var results = [];

/*Función para determinar si el resultado de las operaciones es íntegro o decimal, 
con tal de redondear a 3 decimales.*/
var setFixedDecimals = (number) => {
	if (Number.isInteger(number)) {
		return number;
	}
	return number.toFixed(3);
}

/*Función de calculadora: suma, resta, multiplicación y división almacenados en array 
// Raiz cuadrada // comprobación de numbers*/
var functCal = (num1, num2) => {
	if (typeof num1 == 'number' && num2 === undefined) { // raíz cuadrada como resultado si el usuario sólo introduce un argumento.
		var resultSquare = Math.sqrt(num1);
		resultSquare = setFixedDecimals(resultSquare);
		return results = [`Raíz cuadrada: ${resultSquare}`];
		
	} else if (typeof num1 != 'number' || typeof num2 != 'number') { // Mensaje si el usuario introduce cualquier cosa que no sean números.
		return results = ["You can't do this operation!"];

	} else {
		//operaciones
		var resultSum = num1 + num2;
		var resultRest = num1 - num2;
		var resultMult = num1 * num2;
		var resultDiv = num1 / num2;
		//llamada a la función para comprobar los decimales y acortarlos a 3 dígitos.
		resultSum = setFixedDecimals(resultSum);
		resultRest = setFixedDecimals(resultRest);
		resultMult = setFixedDecimals(resultMult);
		resultDiv = setFixedDecimals(resultDiv);
		//Datos ordenados en el array
		return results = [`Suma: ${num1}+${num2}= ${resultSum} | Resta: ${num1}-${num2}= ${resultRest} | Multiplicación: ${num1}*${num2}= ${resultMult} | División: ${num1}/${num2}= ${resultDiv}`];
	}

}

//Llamada a la función de cálculo con dos argumentos | 
functCal(5, 7);
console.log(results);