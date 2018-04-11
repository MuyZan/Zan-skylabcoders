
var random = randomNumber();


function myName(){
    var arr = ["Sandy", "Alan", "Kosko", "Marçal", "Joana", "Enjan", "Rai"];
    var randomIndex = Math.floor((Math.random()*6)+1)
    return arr[randomIndex];
}

function myAge(){
    var age = randomNumber();
    return age;
}

function compareAge(x){  
    if (x < 20){
        return  " ¿seguro que eres tú?"
    }
    return  " ¡qué bien que seas tú!";
}


function randomNumber(){
    var randomN = Math.floor((Math.random()*50)+1);
    return randomN;
}


function people(name, age){
    this.name = name;
    this.age = age;
}


function printIn(){
    var name = myName();
    var age = myAge();
   // var compare = compareAge(age);
    var person = new people(name,age)
    return person;
    //return "Saludo: " + person.name + " | ¿Cuál es tu edad? " + person.age + " |" + compare;
}




function final(){
    var generalArray = [];
    generalArray.push(printIn(), printIn());
    if (generalArray[0].age > generalArray[1].age){
        return generalArray[0].name + " es mayor que " + generalArray[1].name;
    }   return generalArray[0].name + " es menor que " + generalArray[1].name;
 }

 console.log(final())

