//declaración variables globales 
var gamer = prompt("¿Cuál es tu nombre?")

// JUEGO BINGO
function game(name) {

    var bingoCard = [];
    var matchedCounter = 0;
    var turn = 0;
    var allNumbersBomboArray;
    var bye = "¡Hasta la vista " + gamer + "!";
    var bingoTotalNums = 100; // Números totales a jugar dentro del bombo y de las posibilidades numéricas del cartón.
    var cardTotalNums = 15; // Números totales del cartón de bingo

    console.log("Hola " + name + " bienvenid@ al juego más emocionante, ¡BINGO!");
    newBingoCard(cardTotalNums, bingoTotalNums);
    allNumbersBomboArray = generateAllNumArray(bingoTotalNums);
    var friendlyCard = friendlyBingo(bingoCard);
    console.log("Este es tu cartón de Bingo para esta partida: ");
    console.log(friendlyCard);
    askTurn(confirm("¿Quieres empezar la partida?"));

    //Función de turnos
    function newTurn() {
        turn++;
        console.log("-----------------------");
        console.log("Turno número: " + turn);
        var bomboNumber = randomBombo();
        console.log("El número del bombo es el: " + bomboNumber);
        compareAndMatch(bingoCard, bomboNumber);
        line(bingoCard);
        var friendlyCard = friendlyBingo(bingoCard);
        console.log(friendlyCard);
        if (matchedCounter != bingoCard.length) {
            askTurn(confirm("¿Quieres jugar el siguiente turno? "));
        } else {
            console.log("¡BINGOOOO! --- ¡Fin de la partida!\nHas completado el juego en: " +turn+" turnos.");
            console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
            endGame(confirm("¿Quieres jugar una nueva partida?"));
        }
    }

    //constructor de objetos y estado (cada número del cartón es un objeto)
    function numberObject(randomNumber, matched, lined) {
        this.number = randomNumber;
        this.matched = matched;
        this.lined = lined;
    }

    //Constructor de números aleatorios y estado almacenados en un objeto.
    function bingoCardNumber(randomNumber) {
        var matched = false;
        var lined = false;
        var number = new numberObject(randomNumber, matched, lined);
        return number;
    }

    //Generador de un número random
    function randomNumber(min, max) {
        return Math.floor(Math.random() * ((min - max) + min) + max);
    }

    //generador del array que almacena los números a comparar para que no se repita ninguno.
    function generateAllNumArray(numbers) {
        var allNumbersArray = [];
        for (var num = 1; num <= numbers; num++) {
            allNumbersArray.push(num);
        }
        return allNumbersArray;
    }

    //función generadora de cartones de bingo con 15 números aleatorios. Pushea objetos dentro de un array.
    function newBingoCard(cardSize, bingoTotalNums) {
        var allNumbersArray = generateAllNumArray(bingoTotalNums); //genera un array con todos los números posibles del 1 al X;
        for (var num = 0; num < cardSize; num++) {
            randomIndex = randomNumber(0, allNumbersArray.length - 1); //min 0, max array.length-1 porque utiliza el número aleatorio como índice del array.
            bingoCard.push(bingoCardNumber(allNumbersArray[randomIndex])); //llama al constructor de números aleatorios y le pasa un index del array de números
            allNumbersArray.splice(randomIndex, 1); //borra del array de números el número con el índice indicado.
        }
        return bingoCard;
    }

    //función generadora de un número aleatorio del bombo
    function randomBombo() {
        var randomIndex = randomNumber(0, allNumbersBomboArray.length - 1);
        var randomBombo = allNumbersBomboArray[randomIndex];
        var index = allNumbersBomboArray.indexOf(randomBombo);
        allNumbersBomboArray.splice(index, 1); //sería lo mismo ahorrarme la linea de arriba y pasarle el randomIndex
        return randomBombo;
    }

    //función para comparar el número del bombo con los números del cartón y cambiar su estado dentro del objeto.
    function compareAndMatch(matchedCard, bomboNumber) {
        for (var i = 0; i < matchedCard.length; i++) {
            if (matchedCard[i].number === bomboNumber) {
                matchedCard[i].matched = true;
                matchedCounter++;
                console.log("¡Número coincidente!")
            }
        }
        return matchedCard;
    }

    //Función para imprimir de forma amigable el cartón del bingo.
    function friendlyBingo(card) {
        var arrayCard = [];
        var friendlyCard = "";
        card.forEach(function (obj) {
            if (obj.matched === true) {
                var x = "X"
                arrayCard.push(x);
            } else {
                arrayCard.push(obj.number);
            }
        });
        for (var i = 0; i < arrayCard.length / 5; i++) { //iterar en relación a un conjunto de 5.
            var sliceArray = arrayCard.slice(i * 5, (i + 1) * 5); //conjunto de arrays de 5 números
            friendlyCard += sliceArray.join("\t") + "\n"; //eliminar la coma del conjunto de arrays y substituir por espacios tabulados + salto de linea.
        }
        return friendlyCard;
    }

    //función para cantar lineas
    function line(lineArray) {
        var i = 0;
        for (i; i < lineArray.length; i++) {
            var counterLine = 0;
            var matchedLine = lineArray.slice(i, i + 5);
            matchedLine.forEach(function (obj) {
                if (obj.matched === true) {
                    counterLine++;
                }
                if (counterLine === 5 && matchedCounter != bingoCard.length && obj.lined != true) {
                    obj.lined = true;
                    console.log("LINEAAAAAA!");
                }
            })
            i += 4;
        }
    }

    //Función para preguntar por el turno, acabar turno o inicializar nueva partida al completar una.
    function askTurn(answer) {
        if (answer === false) {
            console.log(bye)
        } else {
            newTurn();
        }
    }

    //Función para iniciar una nueva partida cuando acabe la anterior.
    function endGame(answer) {
        if (answer === false) {
            console.log(bye);
        } else {
            game(gamer);
        }
    }
}

//Llamada al juego.
game(gamer);



