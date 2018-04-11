/*d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, 
la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:*/

/*d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.*/

/*d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro 
SKYLAB y devuelva SKYLAB (con todas las transformaciones internas hechas y mostrando, entre medias, 
la transformación)*/

/*d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.*/

//CHALLENGE D ACABADO!




//codigo que encripta
function encriptSkylab(str) {
    var part1 = [];
    var part2 = [];
    var newCode = [];
    //partir en dos
    for (var i = 0; i < str.length; i++) {
        if (i < str.length / 2) {
            part1.push(str[i]);
        } else {
            part2.push(str[i]);
        }
    }
    //alternar letras
    for (var i = 0; i < part1.length; i++) {
        newCode.push(part1[i]);
        newCode.push(part2[i]);
    }
    console.log("Código encriptado: " + newCode.join(""));
    return newCode.join("");
}

//código desencriptar
function decriptSkylab(str) {
    var part1 = [];
    var part2 = [];
    //desalterar las letras
    for (var i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            part1.push(str[i]);
        } else {
            part2.push(str[i]);
        }
    }
    //unir las partes
    var newCode = part1.concat(part2);
    console.log("Código desencriptado: " + newCode.join(""));
    return newCode.join("");
}

//Encriptador desencriptador
function encriptDecript(str) {
    var encripted = encriptSkylab(str);
    var decripted = decriptSkylab(encripted);
    return decripted;
}

var word = "SKYLABCODERS"

console.log("Código encriptado y desencriptado: " + encriptDecript(word));






