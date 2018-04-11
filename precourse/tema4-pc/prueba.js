/*var dictionary = {
    0: ['A', 'K', 'T', 'F', 'O', 'Y'],
    1: ['B', 'L', 'U', 'G', 'P', 'Z'],
    2: ['C', 'M', 'V', 'H', 'Q', '.'],
    3: ['D', 'N', 'W', 'I', 'R', ','],
    4: ['E', 'Ñ', 'X', 'J', 'S', ' ']
}

console.log(dictionary[0][3])

console.log(dictionary.indexOf('H'))
*/

/*var myArray = [1, 2, 3, 4, 5];

function myFunction(arr){
    arr.forEach(function(obj){
         obj*=2;
    })
   return arr;
}
myArray = myFunction(myArray)
console.log(myArray)*/

/*var myArray = [1, 2, 3, 4, 5];

function myFunction(arr){
  arr.forEach(function(value, key) {
    arr[key] = value * 2
  })
  return arr
}
myFunction(myArray)
console.log(myArray)
*/

var myArray = [4, 1, 6, 9, 5];

function randomNumber(min, max){
    return Math.floor(Math.random() * ((min - max) + min) + max);

}
function sort(arr){ //hay que pasarle el array, pero alojado fuera de las funciones que la modifican.
    var randomIndex = randomNumber(0, arr.length - 1); //un índice random para el array
    console.log("número random para un índice del array: "+randomIndex)
    var randomBombo = arr[randomIndex]; //el número al que apunta ese índice. 
    console.log("En la posición: "+ randomIndex+ " tenemos el valor: "+ randomBombo +" y se lo quitamos")
    arr.splice(randomIndex, 1);//le pasamos este índice. splice funciona con índices, no con valores.
    console.log(arr)
    return randomBombo;
}

function getNumber(){
    var randomNum = sort(myArray); 
    return randomNum;
}

console.log(myArray)
console.log("este es mi número random "+getNumber())
console.log("--------------")
console.log("este es mi número random "+getNumber())
console.log("--------------")
console.log("este es mi número random "+getNumber())
console.log("--------------")
console.log("este es mi número random "+getNumber())
console.log("--------------")
console.log("este es mi número random "+getNumber())
console.log("--------------")