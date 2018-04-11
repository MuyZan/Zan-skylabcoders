//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

function myName(name){
    if (name === "Sandy"){
        return("Hello " + name + " ¿cómo estas?");
    }
    return(name +" You are not Sandy!!!")
    
}

console.log(myName("Sandy"));

//b) Intenta retornar los valores en lugar de usar console.log

function myLastName(lastname, age){
    return "Hola " + lastname + ", you're " + age + " years old.";
}

console.log(myLastName("Zan", 30));

//c) Ahora, añade tu edad y concaténala al return

//RESULTO EN EL B

//d) Iguala tu función a una variable y ejecutala

function myJob(someString){
    return "Mi trabajo era: " + someString+". ";
}

var job = myJob("escenógrafa");
console.log(job);

//e) Ahora declara otra función que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados.

function myAge(someNumber){
    return "esta es tu edad " +someNumber;
}

var age = myAge(30);
console.log(job + age);

//e1) Intenta sumarle al resultado de tu segunda función, un número random del 0-10 y conviértelo todo a un solo string.

function randomNumber(){
    return Math.floor((Math.random()*10)+1);
}

var random = randomNumber();
console.log(job + (parseInt(age)+random).toString());

//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

//NO LO ENTIENDO.///////////////////////

//g)Intenta englobar todas las funciones en una sola función padre, el return de dicha función padre deberá ser llamada a las funciones hijas

function printInConsole(){
    var age = myAge(randomNumber());
    var job = myJob("escenografa");
    var firstName = myName("Pepita");
    var secondName = myLastName("Palotes", 30);
    return age + " "+ job + " "+ firstName + " "+ secondName;
}

console.log(printInConsole());

//h) Haz otra función hija que sólo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()

//resuelto en el E1 Y G

//i) Ahora, limita el random de 0 a 50. Muestra un mensaje si el output age es <20 y otro si es de 21-50

function randomNumber2(){
    var x = Math.floor((Math.random()*50)+1);
    var msg= "";
    if (x <20){
         msg = x + " estás seguro de que eres Pepita?"
       return msg; 
    }
    msg = x + " que mayor estás Pepita";
    return msg;
}


function printInConsole2(){
    var random2 = randomNumber2();    
    var age = myAge(random2);
    var job = myJob("escenografa");
    var firstName = myName("Pepita");
    var secondName = myLastName("Palotes", 30);
    return "La edad random " + age + "\n "+ "La función de trabajo: "+ job + "\n "+ firstName + " "+ secondName;
}

console.log(printInConsole2());

//j)Al return de la función name() concaténale otro mensaje.
//FET/////

//k)Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable.
//FET EN i)

//l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada.
///FET

//m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la función padre y concaténalo en el return padre.
//FET

//n) refactorizemos el código dejando las funciones separadas del padre, este último se encargará de mostrarlas de llamar a todas y mostrar el resultado.
//FET

//ñ) Intenta hacer push de todos los resultados de las funciones a un array declarada en el padre. muestra los resultados de este array como siempre.


function printInConsole3(){
    var random2 = randomNumber2();    
    var age = myAge(random2);
    var job = myJob("escenografa");
    var firstName = myName("Pepita");
    var secondName = myLastName("Palotes", 30);
    var arr =[];
    arr.push(age,job,firstName,secondName);
 
    return arr;
}

console.log(printInConsole3());

//o) Crea una función que llame a nuestra función father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side" a la array que crea padre
//muestra toda la array completa.

function callPrintIn(){
    var callP = printInConsole3();
    callP.push("hello from the dark side");
    return callP;
}

console.log(callPrintIn());
console.log(callPrintIn());

//p)Llama a esta nueva funcion dos veces, muestra sus resultados por pantalla y compara sus randomNums, mosntrando un mensaje indicando cual es mayor.
//el nombre pasado por parametro también debera ser random entre una array de nombres, con los cual, también deberás refactorizar las funciones hijas

//p1 En lugar de retornar los valores como un array, prepara tus funciones para que devuelvan los resultados como OBJECTS. Muestra por pantalla los objetos sin estilizar el output


//p2 Muestra los resultados de los OBJECTS recorriendolos y mostrando los valores de una forma amigable.


//VER EL EJERCICIO ACABADO Y REFACTORIZADO EN EXERCISES3_REFACTOR.JS
