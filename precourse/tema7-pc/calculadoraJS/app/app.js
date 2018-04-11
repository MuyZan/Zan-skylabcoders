
/*Función para determinar si el resultado de las operaciones es íntegro o decimal, 
con tal de redondear a 3 decimales.*/
function setFixedDecimals(number){
	if (Number.isInteger(number)) {
		return number;
	}
	return number.toFixed(3);
}

/*Función de calculadora: suma, resta, multiplicación y división*/
function functCal(){

	var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    if(num1 === ""){
        num1 = false;
    } else{
        num1 = parseInt(num1);
    }

    if(num2 === ""){
        num2 = false;
    } else{
        num2 = parseInt(num2);
	}
	
	if (num1 === false && num2 === false) { // Mensaje si el usuario introduce cualquier cosa que no sean números en ambos casilleros.
		return document.getElementById("results").innerHTML =  "<li> ¡Introduce algún número! </li>";
	}

	else if (!isNaN(num1) && num2===false) { // raíz cuadrada como resultado si el usuario sólo introduce un número.
	
		var resultSquare = Math.sqrt(num1);
		resultSquare = setFixedDecimals(resultSquare);
		return document.getElementById("results").innerHTML =   "Raíz cuadrada de "+ num1+" <br><li> "+resultSquare+"</li>";

	}else if (num1 === false && !isNaN(num2) ){
		var resultSquare = Math.sqrt(num2);
		resultSquare = setFixedDecimals(resultSquare);
		return document.getElementById("results").innerHTML =  "Raíz cuadrada de "+ num2+" <br><li> "+resultSquare+"</li>";
		
	} else if (isNaN(num1) && isNaN(num2) || isNaN(num1) && !isNaN(num2) || !isNaN(num1) && isNaN(num2) || num1 === false && num2 === false) { // Mensaje si el usuario introduce cualquier cosa que no sean números en ambos casilleros.
		return document.getElementById("results").innerHTML =  "<li> ¡Operación imposible! </li>";

	} else {
   
		//operaciones
		var resultSum = num1 + num2;
		var resultRest = num1 - num2;
		var resultMult = num1 * num2;
		var resultDiv = num1 / num2;
		

		//llamada a la función para comprobar los decimales y acortarlos a 3 dígitos.
		resultSum = setFixedDecimals(resultSum);
		resultRest = setFixedDecimals(resultRest);
		resultMult = setFixedDecimals(resultMult);
	

//operación para determinar divisiones infinitas o 0/0
		if(isNaN(resultDiv)){
			resultDiv = resultDiv || 0;
		} else if(!isFinite(resultDiv)){
			resultDiv = "ERR <br><br>Imagínate que tienes "+num1+" galletas y las repartes entre 0 amigos. <br>¿Cuántas galletas le tocan a cada amigo? No tiene sentido, ¿lo ves? <br>Así que el monstruo de las galletas está triste porque no tiene galletas, y tú estás triste porque no tienes amigos.";
		} else{
			resultDiv = setFixedDecimals(resultDiv);
		}

		//Datos ordenados en el array
        return document.getElementById("results").innerHTML = "<li><b>"+"Suma: "+"</b>"+num1+" + "+num2+" = "+resultSum+"</li>"+'<li>'+ "Resta: "+num1+" - "+num2+" = "+resultRest+"</li>" +"<li>"+ "Multiplicación: "+num1+" * "+num2+" = "+resultMult+"</li>" +"<li>"+ "División: "+num1+" / "+num2+" = "+resultDiv+"</li>";
	
	}
}

