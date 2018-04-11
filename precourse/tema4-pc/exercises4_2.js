/*c) Simple Scripting program. Crea un programa que transforme un número de 4 
dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código
El primer numero se traslada a la última posicion. El segundo, el tercero y el cuarto suben una posición.
*/
var code = 3712;

function codeScript(code) {
    var codeString = code.toString(); //números a string
    var codeArray = codeString.split(""); //string a array
    var reserve = []; //array para almacenar el número
    reserve.push(codeArray[0]);
    codeArray.shift()
    codeArray.push(reserve[0]);
    code = codeArray.join("")
    return code;
}

console.log("------------------")
console.log("EJERCICIO 1:")
console.log("El código: " + code)
code = codeScript(code);
console.log("Primer cambio: " + code)
code = codeScript(code);
console.log("Segundo cambio: " + code)
code = codeScript(code);
console.log("Tercer cambio: " + code)
code = codeScript(code);
console.log("Cuarto cambio: " + code)
console.log("------------------")

/*c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez 
y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)*/


function codeScript2() {
    var allNums = Array.prototype.slice.call(arguments);
    var criptoCode = []
    allNums.forEach(function (obj) {
        var reserve = [];
        var codeString = obj.toString(); //números a string
        var codeArray = codeString.split(""); //string a array
        reserve.push(codeArray[0]);
        codeArray.shift()
        codeArray.push(reserve[0])
        criptoCode.push(codeArray.join(""));
    })

    return criptoCode;
}

var code1 = 1234;
var code2 = 5678;

console.log("------------------")
console.log("EJERCICIO 2:")
console.log("Los códigos: " + code1 + " " + code2)
theCode = codeScript2(code1, code2);
console.log("Primer cambio: " + theCode)
theCode = codeScript2(theCode[0], theCode[1]);
console.log("Segundo cambio: " + theCode)
theCode = codeScript2(theCode[0], theCode[1]);
console.log("Tercer cambio: " + theCode)
theCode = codeScript2(theCode[0], theCode[1]);
console.log("Cuarto cambio: " + theCode)
console.log("------------------")

/*c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, 
multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. (Si es superior a 10, 
conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)*/

function codeScript3() {
    var allNums = Array.prototype.slice.call(arguments);
    var criptoCode = [];
    var securityPlus = []
    allNums.forEach(function (obj) {
        var reserve = [];
        var codeString = obj.toString(); //números a string
        var codeArray = codeString.split(""); //string a array
        reserve.push(codeArray[0]);
        codeArray.shift()
        codeArray.push(reserve[0]);
        criptoCode.push(codeArray.join(""));
    })
    criptoCode.forEach(function (elem) {
        var codeString = elem.toString(); //números a string
        var codeArray = codeString.split(" "); //string a array
        for (var i = 0; i < codeArray.length; i++) {
            codeArray[i] *= 2;
        }
        codeArray = codeArray.toString();
        securityPlus.push(codeArray)
    })

    return securityPlus;

 
}

function decrypter(){
    var securityMinus =[]
    var allNums = arguments[0];
    //var allNums = Array.prototype.slice.call(arguments);
    console.log(allNums)
    allNums.forEach(function(obj){
        var codeString = obj.toString(); //números a string
        console.log(codeString)
        var codeArray = codeString.split(" "); //string a array
        for(var i=0; i<codeArray.length; i++){
            codeArray[i] /=2;
            console.log(codeArray[i])
        }
        codeArray = codeArray.toString();
        securityMinus.push(codeArray)
    })
    return securityMinus
}



var codeOne = 1234;
var codeTwo = 4213;

console.log("------------------")
console.log("EJERCICIO 3:")
console.log("Los códigos: " + codeOne + " " + codeTwo)
codification = codeScript3(codeOne, codeTwo);
console.log("Primer cambio: " + codification)
/*codification = codeScript3(codification[0], codification[1]);
console.log("Segundo cambio: " +codification)*/
decodification = decrypter(codification);
console.log("Descodificación: "+ decodification);

/*c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado 
(y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.
*/


