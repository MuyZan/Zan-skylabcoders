/*a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto 
    creado más arriba)*/

var avenger = {
    name: "Tony",
    class: "VII",
    id: 1
};

function listItems(avenger) {
    for (prop in avenger) {
        console.log(prop);
    }

}

listItems(avenger);

//b) Ahora, crea una función que liste solo los valores de las propiedades.


function listValues(avenger) {
    for (prop in avenger) {
        console.log(avenger[prop]);
    }

}

listValues(avenger);

//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.

avenger.class = "XI";
console.log(avenger.class);

//d) Ahora, elimina la propiedad ID y asegura los cambios.

delete avenger.id;
console.log(avenger);

//e) Añade una nueva propiedad, por ejemplo city y dale un valor.

avenger.city = "Barcelona";
console.log(avenger);

//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.

console.log(`${Object.keys(avenger)[0]} => ${avenger.city}`);  // esto no lo va a soportar el node terminal porque no compila los template strings de ES6
console.log(Object.keys(avenger)[0] + " => " + avenger.city);// esto sí funcionará, ES5



//f) Lista el numero de propiedades que contiene el objeto.

function countItems(obj) {
    var count = 0;
    for (prop in obj) {
        count++;

    }
    return (`El objeto avenger tiene ${count} elementos`);

}

console.log(countItems(avenger));

//g) Cambia la propiedad name por fullName.

avenger.fullName = avenger.name;
delete avenger.name;
avenger.fullName = "Tony Stark";
console.log(avenger.fullName);

//h) Lista todas las propiedades del objeto a través de un console.log()

console.log(`Hi there! I'm ${avenger.fullName} class ${avenger.class} and I live in ${avenger.city}`);

//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...

avenger.job = "superhero";
avenger.studies = "skylab's bootcamp";

//h2) Asegura los cambios volviendo a listar los valores del objeto

console.log(`job ${avenger.job} and studies ${avenger.studies}`);

/*i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, 
creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a 
    la referencia de abajo.)*/


function estudiante(fullName, classRoom, city, job, studies, age) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.age = age;
    this.description = function () {
        console.log(`The name ${this.fullName} and the age ${this.age}`)
    }
}
var sandyZan = new estudiante("Sandy Zan", "VIII", "Barcelona", "Artist", "Web development", 30)
console.log(sandyZan);



//Crea otro objeto y imprime sus propiedades por pantalla.

var pepitaRico = new estudiante("Pepita Rico", "V", "Berlin", "Comerciante", "CS", 60);

console.log(pepitaRico);
pepitaRico.description();


//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados


function showFullNames() {
    var names = "";
    for (var i = 0; i < arguments.length; i++) {
        names += " | Nombre: " + arguments[i].fullName;
    }
    return names;

}
console.log(showFullNames(pepitaRico, sandyZan));


/*m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, 
crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad 
y cuantos hay.*/

var alanoide = new estudiante("Alan Ninja Inflexible", "VII", "Barcelona", "Teclitas", "Dev Ops", 30);
var koskito = new estudiante("Kosko Roso", "X", "Barcelona", "Comerdor de pienso", "Comebragas", 5);

//MODO 1

function listSameCity() {
    var list = "";
    var counter = 0;
    for (var i = 0; i < arguments.length; i++) {
        for (var j = arguments.length - 1; j > 0; j--) {
            if (arguments[i].city === arguments[j].city && !list.includes(arguments[i].fullName)) {
                counter++;
                list += arguments[i].fullName + " | ";
            }
        }
    }
    var msg = "Modo 1: Los estudiantes " + list + "viven en la misma ciudad. Contador: " + counter;
    return msg;
}

console.log(listSameCity(pepitaRico, sandyZan, alanoide, koskito));

//MODO 2

function listSameCity2() {
    list = "Modo 2: ";
    counter = 0;
    var args = Array.from(arguments);
    args.forEach(function (obj) {
        if (obj.city === "Barcelona") {
            counter++;
            list += obj.fullName + " | ";
        }
    });
    var msg = list + "contador: " + counter;
    return msg;
}

console.log(listSameCity2(pepitaRico, sandyZan, alanoide, koskito));


//MODO3

function listSameCity3(someArray) {
    // var args = Array.from(arguments); //al pasarle los parámetros dentro de [] no hace falta convertir
    //los argumentos en un array (porque un objects-arguments es un array like, pero no un array*)
    //*antes era necesario porque sino el forEach no funciona.
    var filtered = someArray.filter(student => student.city == "Barcelona");
    var names = "";
    var counter = 0;
    filtered.forEach(function (obj) {
        names += obj.fullName + " | ";
        counter++;
    })
    var msg = "Modo 3: Nombres: " + names + " Contador; " + counter;
    return msg;
}

console.log(listSameCity3([pepitaRico, sandyZan, alanoide, koskito]));


//n) Para acabar, créate a ti mismo y crea una función que recoja todas las edades y muestre la media.

function averageAge(someArray) {
    var acc = 0; //accumulator
    var media = someArray.length;
    someArray.forEach(function (obj) {
        acc += obj.age;
    });
    var average = "La media de edad es: " + acc / media + " años";
    return average;
}

console.log(averageAge([pepitaRico, sandyZan, alanoide, koskito]));

//ñ) Ahora, crea una funcion que recoja los estudiantes en parejas (será necesario que tengan un id, 
//por comodidad al aparejarlos), es decir, de dos en dos, compare sus edades y que muestre el mayor 
//de ambos

function compareAge(someArray) {
    var arr = "Comparador por parejas: ";
    for (i = 0; i < someArray.length - 1; i += 2) {
        var j = i + 1;
        if (someArray[i].age > someArray[j].age) {
            arr += someArray[i].fullName + " es mayor que " + someArray[j].fullName + " | ";
        } else if (someArray[i].age == someArray[j].age) {
            arr += someArray[i].fullName + " y " + someArray[j].fullName + " tienen la misma edad" + " | ";
        } else {
            arr += someArray[j].fullName + " es mayor que " + someArray[i].fullName + " | ";
        }
    }
    return arr;
}
console.log(compareAge([pepitaRico, sandyZan, alanoide, koskito]));

//ñ1) Intenta crear las parejas de forma aleatoria.

function compareAgeRandom(someArray) {

    var arr = "Comparador aleatorio: ";
    var r1 = Math.round(Math.random() * 3);
    var r2 = Math.round(Math.random() * 3);

    function randomNumber(num) {
        var num = Math.round(Math.random() * 3);
        return num;
    }

    while (r1 === r2) {
        r2 = randomNumber(r2);
    }

    if (someArray[r1].age > someArray[r2].age && r1 !== r2) {
        arr += someArray[r1].fullName + " es mayor que " + someArray[r2].fullName;
    } else if (someArray[r1].age == someArray[r2].age && r1 !== r2) {
        arr += someArray[r1].fullName + " y " + someArray[r2].fullName + " tienen la misma edad";
    } else {
        arr += someArray[r2].fullName + " es mayor que " + someArray[r1].fullName;
    }
    return arr;

}

console.log(compareAgeRandom([pepitaRico, sandyZan, alanoide, koskito]));





