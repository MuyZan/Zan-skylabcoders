//a) Puedes contar cuantas letras tiene tu nombre?

var name = "Sandy";
var nLetters = name.length;

console.log("My name has " + nLetters + " letters");

//b) Añade tu apellido e indica en que posición se encuentra

var space = " ";
var surname = "Zan";
var completeName = name.concat(space, surname);

console.log(completeName);

var posSurname = completeName.indexOf(surname);

console.log(" Your fitst last name starts on position " + posSurname);

//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.

console.log(completeName.substr(0, name.length));

//d) Ahora, solo tu apellido.

console.log(completeName.substr(name.length+1, surname.length));

//d1) Iguala el resultado a una variable nueva e imprímela por pantalla.

var lastname = completeName.substr(name.length+1, surname.length);
console.log(completeName+", " +lastname);

//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.

completeName = completeName.replace(name, "Ms");
console.log("Hello, " + completeName);

//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

console.log("My lastname is " + lastname.toUpperCase());

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.

var newString = name.concat(" is awesome");
console.log(newString);

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
var firstLetterName = name.charAt(0);
var firstLetterSurname = surname.charAt(0);

console.log(firstLetterName +"."+ firstLetterSurname);


