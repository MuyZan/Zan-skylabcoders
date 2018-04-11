/*IDEA like Ezequiel: utilizar filter para filtrar todas las que tengan estatus 0 y almacenarlas en un nuevo array, para sacar
las que han sido pasapalabreadas*/


//variables
var questions = [
    { letter: "a", answer: "abducir", status: 0, question: ("<span>CON LA A.</span><br> Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("<span>CON LA B.</span><br> Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("<span>CON LA C.</span><br> Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 0, question: ("<span>CON LA D.</span><br> Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "ectoplasma", status: 0, question: ("<span>CON LA E.</span><br> Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answer: "facil", status: 0, question: ("<span>CON LA F.</span><br> Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 0, question: ("<span>CON LA G.</span><br> Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "harakiri", status: 0, question: ("<span>CON LA H.</span><br> Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 0, question: ("<span>CON LA I.</span><br> Templo cristiano") },
    { letter: "j", answer: "jabali", status: 0, question: ("<span>CON LA J.</span><br> Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "kamikaze", status: 0, question: ("<span>CON LA K.</span><br> Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "licantropo", status: 0, question: ("<span>CON LA L.</span><br> Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 0, question: ("<span>CON LA M.</span><br> Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 0, question: ("<span>CON LA N.</span><br> Demostración de poca inteligencia") },
    { letter: "ñ", answer: "señal", status: 0, question: ("<span>CONTIENE LA Ñ.</span><br> Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "o", answer: "orco", status: 0, question: ("<span>CON LA O.</span><br> Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 0, question: ("<span>CON LA P.</span><br> Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 0, question: ("<span>CON LA Q.</span><br> Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 0, question: ("<span>CON LA R.</span><br> Roedor") },
    { letter: "s", answer: "stackoverflow", status: 0, question: ("<span>CON LA S.</span><br> Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 0, question: ("<span>CON LA T.</span><br> Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 0, question: ("<span>CON LA U.</span><br> Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 0, question: ("<span>CON LA V.</span><br> Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 0, question: ("<span>CONTIENE LA W.</span><br> Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 0, question: ("<span>CONTIENE LA X.</span><br> Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 0, question: ("<span>CONTIENE LA Y.</span><br> Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 0, question: ("<span>CON LA Z.</span><br> Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") }
]

var index = 0;
var rightCounter = 0; //respuestas acertadas
var failCounter = 0; //respuestas falladas
var totalCounter = 0; //respuestas acertadas + falladas
var pasapalabraCounter = 0; // pasapalabras
var showForm = document.getElementById("answerbox");
var circleBackground = document.getElementById(questions[index].letter).classList;
var letterColor = document.getElementById(questions[index].letter).getElementsByClassName('letter')[0].classList;



//Función que inicia el juego desde el botón Start Game / Reset Game
function game() {
    if (totalCounter > 0 || pasapalabraCounter > 0) {     //sí el juego está iniciado y se clicka para iniciarlo de nuevo
        resetGame();
    }
    if (showForm.classList.contains("hidden")) {    //mostrar consola de juego
        showForm.classList.remove('visible');
        showForm.classList.add('visible');
    }
    questionA();    //mostrar primera pregunta
}

function questionA() { //primera pregunta
    if (questions[index].status == 0) {
        document.getElementById("questionbox").innerHTML = questions[index].question;
        /*estilo*/
        letterColor.add("blueletter");
        circleBackground.remove('circle');
        circleBackground.add('blue');
    } else {
        nextQuestion();
    }
}

// Función para contestar a la pregunta y pasar a la siguiente
document.getElementById('submit').addEventListener('click', function (e) { //otra manera de crear acción/evento sobre un botón. alternativa al onclick dentro del html 
    e.preventDefault();   // previene el refresco automático de la página cuando el evento click viene de un formulario.
    var letter = questions[index].letter;
    var answer = document.getElementById('answer').value;
    answer = answer.toLowerCase();
    /*estilo*/
    document.getElementById("start").innerHTML = 'Reset Game';
    document.getElementById(letter).getElementsByClassName('letter')[0].classList.remove("blueletter");

    if (answer === questions[index].answer) {
        /*estilo*/
        document.getElementById(letter).classList.remove('blue');
        document.getElementById(letter).classList.add('green');
        document.getElementById(letter).getElementsByClassName('letter')[0].classList.remove("blueletter");
        document.getElementById(letter).getElementsByClassName('letter')[0].classList.add("greenletter");
        /*lógica*/
        rightCounter++;
        totalCounter++;
        questions[index].status = 1;
        nextQuestion();
        return;
    } else if (answer == "pasapalabra") {
        pasapalabraCounter++;
        nextQuestion();
        return;
    } else {
        /*estilo -----> MIRAR setAttribute*/
        document.getElementById(letter).classList.remove('blue');
        document.getElementById(letter).classList.add('red');
        document.getElementById(letter).getElementsByClassName('letter')[0].classList.remove("blueletter");
        document.getElementById(letter).getElementsByClassName('letter')[0].classList.add("redletter");
        /*lógica*/
        failCounter++;
        totalCounter++;
        questions[index].status = 1;
        nextQuestion();
        return;
    }
});


function nextQuestion() {
    document.getElementById('answer').value = ''; //borra la respuesta anterior del usuario del input text
    /*estilo*/
    document.getElementById(questions[index].letter).getElementsByClassName('letter')[0].classList.remove("blueletter");
    document.getElementById(questions[index].letter).classList.remove('blue');
    document.getElementById(questions[index].letter).classList.add('circle');

    /*lógica*/
    if (totalCounter === questions.length) { //juego completado
        endGame();
        return;
    }

    index++;

    if (index === questions.length) { //dar la vuelta al rosco
        index = 0;
        questionA();
        return;
    }

    if (questions[index].status == 0) { //continuar con las preguntas no contestadas
        document.getElementById("questionbox").innerHTML = questions[index].question;
        /*estilo*/
        document.getElementById(questions[index].letter).getElementsByClassName('letter')[0].classList.add("blueletter");
        document.getElementById(questions[index].letter).classList.remove('circle');
        document.getElementById(questions[index].letter).classList.add('blue');
    } else {
        nextQuestion();
    }
}

/*Función botón pasapalabra*/
document.getElementById('pasapalabra').addEventListener('click', function (e) {
    e.preventDefault();
    pasapalabraCounter++;
    nextQuestion();
});

/*Función juego finalizado*/
function endGame() {
    document.getElementById("message").innerHTML = "FIN DEL JUEGO";

    if (showForm.classList.contains("visible")) {
        showForm.classList.remove("visible");
        showForm.classList.add('hidden');
    }
}

/*Reseteo del juego al iniciar un nuevo juego*/
function resetGame() {
    /*resetea variables globales*/
    index = 0;
    rightCounter = 0;
    failCounter = 0;
    totalCounter = 0;
    pasapalabraCounter = 0;
    document.getElementById("answer").value = "Escribe aquí tu respuesta";
    document.getElementById("start").innerHTML = 'Start Game';
    document.getElementById("message").innerHTML = "";

    /*resetea status array of objects-questions*/
    questions.forEach(function (obj) {
        obj.status = 0;
    });

    /*resetea estilo ---- children ¡gracias Mikel Parra! */
    var rosco = document.getElementById("rosco");
    for (var i = 0; i < questions.length; i++) {
        if (rosco.children[i].classList.contains('red')) {
            rosco.children[i].classList.remove('red');
            rosco.children[i].classList.add('circle');
            rosco.children[i].children[0].classList.remove("redletter");
        } else if (rosco.children[i].classList.contains('green')) {
            rosco.children[i].classList.remove('green');
            rosco.children[i].classList.add('circle');
            rosco.children[i].children[0].classList.remove("greenletter");
        } else if (rosco.children[i].classList.contains('blue')) {
            rosco.children[i].classList.remove('blue');
            rosco.children[i].classList.add('circle');
            rosco.children[i].children[0].classList.remove("blueletter");
        }
    }
}




