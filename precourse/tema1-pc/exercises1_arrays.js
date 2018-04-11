//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"
var arrayName = ["Sandy", "Zan"];
var nameToString = arrayName.toString().replace(",", "").toUpperCase();
var newName = nameToString.split("").join("/");
console.log(newName);

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
var stringSurname = arrayName[1].toString().toUpperCase();
var newSurname = stringSurname.split("").join("|");
console.log(newSurname);

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

var stringName = arrayName[0].toString().toUpperCase();

for (i = 0; i < arrayName[0].length; i++) {

	console.log(i + "º" + stringName[i]);

}

//d)Como en el ejercicio anterior, pero seleccionando tu apellido

for (i = 0; i < arrayName[1].length; i++) {

	console.log((i + arrayName[0].length) + "º" + stringSurname[i]);

}

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings

console.log(stringName.charAt(0) + "." + stringSurname.charAt(0));

/*f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, 
y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo 
mensaje.*/
var newNameArray = ["Sandy", "Zan", 30];
console.log("My name is " + newNameArray[0] + " and I'm " + newNameArray[2]+ " years old");

// g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

var addCity = (city) => {
	newNameArray.push(city);
}

addCity("Barcelona");
console.log("City added to array => " + newNameArray);

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

var deleteCity = (city) => {
	newNameArray.pop(city);
}

deleteCity("Barcelona");
addCity("Berlin");
console.log("City added to array => " + newNameArray);
deleteCity("Berlin");
console.log("City added to array => " + newNameArray);

//j) Ahora, elimina el nombre y asegura los cambios Resources:

newNameArray.shift();
console.log(newNameArray);

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?
newNameArray.splice(0, 0, "Sandita");
console.log(newNameArray);


//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multByTwo = numArray.map(function (num) {
	return num * 2;
});

console.log(multByTwo);

//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multNum = 3;

var multBy = numArray.map(function (num) {
	return num * multNum;
});

console.log(multBy);

//m) Podrías mostrarlos en el orden inverso?
console.log(multBy.sort(function (a, b) { return b - a }))



//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

//MANERA 1


function foundLetters(name) {

    name = name.toLowerCase();
    var arr = [];

    for (var x in name) {
        if (!arr.includes(name[x])) {
            arr += name[x];
        }

    }

    var result = "";

    for (var i in arr) {
        var counter = 0;
        for (var j in name) {
            if (name[j] == arr[i]) {
                counter += 1;
            }
        }
        if (counter > 1) {
            result += `La letra ${arr[i]} está ${counter} repetida | `;
        }
    }
    return result;

};

console.log(foundLetters("Ssandy Zan"));



//MANERA 2

function isDuplicated(stringName, i, j) {
	if (stringName[i] === stringName[j]) {
		return true;
	}
}

function compareLetters(stringName) {
    
    var letterDuplicate = [];
	var valuesFound = [];

	for (i = 0; i < stringName.length; i++) {

		var counter = 1;

		if (!valuesFound.includes(stringName[i])) {
			for (j = i + 1; j < stringName.length; j++) {
				if (isDuplicated(stringName, i, j)) {
					counter++;
				}
			}
			if (counter > 1) {
				letterDuplicate += `La letra ${stringName[i]} está ${counter} veces | `;
				valuesFound.push(stringName[i]);
			}

		}
	}
	return letterDuplicate;
}

console.log(compareLetters("Sandy Zan"));





//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras


function findNoRepeatedLetters(str) {

	var noRepeated = '';
	for (var i = 0; i < str.length; i++) {

		if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {

			noRepeated += str[i];
		}
	}
	return `${str}, the letters ==> ${noRepeated.split('')}`;
}

console.log(findNoRepeatedLetters('Sandy Zan Mariano'));

