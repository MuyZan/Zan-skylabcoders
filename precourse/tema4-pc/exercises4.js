/*## Final Challenges (JS)!
a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, 
muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, 
cada elemento de la pareja deberá estar multiplicada por 2.*/
function pairsNum(arr, multBy) {
    var pairs = [];
    for (var i = 0; i < arr.length - 1; i++) {
        pairs += i + 1 + "º pareja: " + arr[i] * multBy + "-" + arr[i + 1] * multBy + "\n";
    }

    return pairs
}
console.log("Ejercicio A \n" + pairsNum([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));


//a1) La funcion debería aceptar la array a tratar como argumento.
function pairsNum2() {
    var allNums = Array.prototype.slice.call(arguments);
    var pairs = allNums.map(function (n, i) {
        if (n === allNums.length) {
            return ''
        } else {
            return i + 1 + "º pareja => " + allNums[i] * 2 + " - " + allNums[i + 1] * 2;
        }
    })
    return pairs.join('\n')
}
console.log("Ejercicio A1 \n" + pairsNum2(1, 2, 3, 4, 5, 6, 7, 8, 9));


//a2) Pasa también el numero a multiplicar a la función como argumento
function pairsNum3() {
    var allNums = Array.prototype.slice.call(arguments);
    var multBy = allNums[allNums.length - 1];
    var pairs = allNums.map(function (n, i) {
        if (i >= allNums.length - 2) {
            return ''
        } else {
            return i + 1 + "º pareja ====> " + allNums[i] * multBy + "-" + allNums[i + 1] * multBy;
        }
    })
    return pairs.join('\n')
}
console.log("Ejercicio A2 \n" + pairsNum3(1, 2, 3, 4, 5, 6, 7, 8, 9, 12));

//a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.
function pairsNum4() {
    var allNums = Array.prototype.slice.call(arguments);
    var multBy = allNums[allNums.length - 2];
    var numPairs = allNums[allNums.length - 1];
    var pairs = allNums.map(function (n, i) {
        if (i >= allNums.length - 3) {
            return ''
        } else {
            if (n <= numPairs) {
                return i + 1 + "º pareja ====> " + allNums[i] * multBy + "-" + allNums[i + 1] * multBy;
            }
        }
    })
    return pairs.join('\n')
}
console.log("Ejercicio A3 \n" + pairsNum4(1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 3));


//b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci

function fibbonacci() {
    var maxNums = 20;
    var serie = [];
    for (var i = 0; i < maxNums; i++) {
        if (i === 0) {
            serie.push(0);
        } else if (i === 1 || i === 2) {
            serie.push(1);
        } else {
            serie.push(serie[serie.length - 2] + serie[serie.length - 1]);
        }
    }
    return serie.join('|');
}
console.log(fibbonacci());

//b2) Puedes añadir además, la posición de cada resultado?
//b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.

function fibbonacci2() {
    var maxNums = 10;
    var serie = [];
    var position = []
    var complete = [];
    for (var i = 0; i < maxNums; i++) {
        if (i === 0) {
            serie.push(0)
            position.push("Posición nº:" + (i + 1));
        } else if (i === 1 || i === 2) {
            serie.push(1);
            position.push("Posición nº:" + (i + 1));
        } else {
            serie.push(serie[serie.length - 2] + serie[serie.length - 1]);
            position.push("Posición nº:" + (i + 1));
        }
    }
    for (var i = 0; i < serie.length; i++) {
        complete.push(serie[i] + " " + position[i])
    }

    return complete.join("\n");
}
console.log(fibbonacci2());

//b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

function fibbonacci3(userPos) {
    var maxNums = 10;
    var serie = [];
    var position = []
    var complete = [];
    for (var i = 0; i < maxNums; i++) {
        if (i === 0) {
            serie.push(0)
            position.push("Posición nº:" + (i + 1));
        } else if (i === 1 || i === 2) {
            serie.push(1);
            position.push("Posición nº:" + (i + 1));
        } else {
            serie.push(serie[serie.length - 2] + serie[serie.length - 1]);
            position.push("Posición nº:" + (i + 1));
        }
    }
    for (var i = 0; i < userPos; i++) {
        complete.push(serie[i] + " " + position[i])
    }
    return complete.join("\n");
}
var user = 10;
console.log("EJERCICIO 4B \n" + fibbonacci3(user));

//b5) Ahora, muestra los resultados en forma piramidal:

function fibonacciPiramidal(){
    var maxNums = 7;
    var serie = [];
    var piramide =[];
    for (var i = 0; i < maxNums; i++) {
        if (i === 0) {
            serie.push(0);
        } else if (i === 1 || i === 2) {
            serie.push(1);
        } else {
            serie.push(serie[serie.length - 2] + serie[serie.length - 1]);
        }
    }
    for (var i=0; i<serie.length; i++){
        piramide.push(serie[i])
        console.log(piramide.join(" "))
    }
    for (var i = serie.length; i > 0; i--){
        piramide.pop(serie[i])
        console.log(piramide.join(" "))
    }
}

fibonacciPiramidal();
