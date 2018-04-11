//Declaración de variables locales
var results = [];

/*Función para determinar si el resultado de las operaciones es íntegro o decimal, 
con tal de redondear a 3 decimales.*/
var isInteger = (number) => {
	if (Number.isInteger(number)) {
		return number;
	} else {
		return number.toFixed(3);
	}
}

/*Función de calculadora: suma, resta, multiplicación y división almacenados en array 
// Raiz cuadrada // comprobación de numbers*/
function functCal() {
	//variables que almacenan el primer argumento.
	var resultSum = arguments[0];
	var resultRest = arguments[0];
	var resultMult = arguments[0];
	var resultDiv = arguments[0];
	//Si el primer argumento no es un número.
	if (typeof arguments[0] != 'number') {
		return results = "You can't do this operation!";
	}
	//Si hay sólo un argumento, devuelve la raiz cuadrada.
	if (arguments.length < 2) {
		var resultSquare = Math.sqrt(arguments[0]);
		resultSquare = isInteger(resultSquare);
		return results = `Raíz cuadrada: ${resultSquare}`;
	}
	
	for (n = 1; n < arguments.length; n++) {
		//si alguno de los argumentos no es un número
		if (typeof arguments[n] != 'number') {
			return results = "You can't do this operation!";
		}
		//operaciones matemáticas
		resultSum += functCal.arguments[n];
		resultRest -= functCal.arguments[n];
		resultMult *= functCal.arguments[n];
		resultDiv /= functCal.arguments[n];
		//redondeo a integros con como mucho 3 decimales.
		resultSum = isInteger(resultSum);
		resultRest = isInteger(resultRest);
		resultMult = isInteger(resultMult);
		resultDiv = isInteger(resultDiv);
		
		results = `Suma: ${resultSum} Resta: ${resultRest} Multiplicación: ${resultMult} División: ${resultDiv}`;
	}
	return (results);
}

functCal(1, 2, 3);
console.log(results);