/*Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá 
de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, 
cuando se llame a la función:

-Se preguntará por el nombre de usuario y dará la bienvenida.
-El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: 
Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
-A continuación, el usuario verá el coste medio de los vuelos.
-También podrá ver cuantos vuelos efectúan escalas.
-Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al 
usuario sus destinos.*/


//declaración de variables globales

var flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false }
]


//Función para mostrar el array de objects de manera amigable para el usuario.

function friendlyFlights(someArray) {
    var escale = ""
    var friendly = "";
    someArray.forEach(function (obj) {
        if (obj.scale === false) {
            escale = " y no realiza ninguna escala."
        } else {
            escale = " y efectúa escala."
        }
        friendly += "El vuelo con origen: " + obj.to + ", y destino: " + obj.from + ", tiene un coste de " + obj.cost + "€" + escale + "\n";
    })
    flightsResult = friendly;
    return flightsResult;
}

//Función para calcular el coste medio de los vuelos.

function averageCost(someArray) {
    var acc = 0;
    someArray.forEach(function (obj) {
        acc += obj.cost;
    });
    averageResult = "El precio medio es: " + acc / someArray.length + " euros\n";
    return averageResult;

}

//Función para determinar cuántos vuelos tienen escala.

function escaleTrue(someArray) {
    var acc = 0

    someArray.forEach(function (obj) {
        if (obj.scale === true) {
            acc++
        }
    })
    escaleResult = "Hay " + acc + " vuelos con escala.\n";
    return escaleResult;
}

//Función para mostrar los últimos cinco vuelos disponibles.


function fiveLast(someArray) {
    var lastItems = someArray.slice(-5);
    var arr = "";
    lastItems.forEach(function (obj) {
        arr += obj.to + ", ";
    })
    fiveLastResult = "Estos son los destinos de los últimos vuelos: " + arr;
    return fiveLastResult;
}

/*otra manera de mostrar los últimos cinco vuelos disponibles.
function fiveLast(someArray) {
    someArray.reverse();
    var arr =[];
    for (i = 0; i <= 4; i++) {
        arr.push(someArray[i].to);
    }
    fiveLastResult = arr.reverse();
    return fiveLastResult;
}*/



//Función que da la bienvenida al usuario e imprime todos los datos anteriores en pantalla.

function helloUser(user) {
    var flightsResult = friendlyFlights(flights);
    var averageResult = averageCost(flights);
    var escaleResult = escaleTrue(flights);
    var fiveLastResult = fiveLast(flights)
    var msg = "\nHola " + user + ", bienvenid@ a la aerolinea de Villagustito.\n" + "\n" + flightsResult + "\n" + averageResult + "\n" + escaleResult + "\n" + fiveLastResult + "\n";
    return msg;
}


//helloUser(prompt("¿Cuál es tu nombre de usuario?")) 
console.log(helloUser("Zan"));
