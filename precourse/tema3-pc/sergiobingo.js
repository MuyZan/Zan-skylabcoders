function bingo() {
    var allNumBombo= Array.from({length: 30}, (v, k) => k+1); 
    function getCarton() {
        var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        carton = [];
        i = nums.length;
        j = 0;
        while (i--) {
          j = Math.floor(Math.random() * (i+1));
          carton.push(nums[j]);
          nums.splice(j,1);
        }
        return carton
    }
  
        var carton=getCarton();
    function getName() {
        var userName=prompt("What is your name?");
        if (userName) {
          alert("Welcome " + userName + "!"); 
          console.log("Your cardboard is: " + "\n" + carton.slice(0,5) + "\n" + carton.slice(5,10) + "\n" + carton.slice(10,15));       
        } else if (userName==="") {   
               var ususAnon=confirm("¿Would you like to be anonimus?");
               if (ususAnon===true) {
                   alert("Welcome Anonimus!")
               } else {
                  alert("Introduce a vaild user name")
                  getName();
               }
        } else {
          var exit=confirm("Do you want to exit?")
           if (exit===true) {
           throw new Error("Bye");
           } else {
           getName();
           }
        }
      
    }
    getName(); 
    function getRandom(min,max) {       
        return Math.floor(Math.random() * ((max - min) + 1) + min);
     }
    function generatorNumGame() {
        var indexNum=getRandom(0, allNumBombo.length - 1);
        var numArray=allNumBombo[indexNum];
        allNumBombo.splice(indexNum, 1);
        return numArray;
    }
        
    function checkCarton(n) {  
        return n==="X";
    }
    function askTurn() {
        if (carton.slice(0,5).every(checkCarton) || carton.slice(5,10).every(checkCarton) || carton.slice(10,15).every(checkCarton) === true) {
            console.log("LINE!");
        } 
        if (carton.every(checkCarton)===false) {
            var askT=confirm("¿Do you want to keep playing?");
            if(askT===true) {
               match();    
            } else {
                var exit=confirm("Do you want to exit?")
                if (exit===true) {
                 console.log("!Hasta pronto, Bye!");
                } else {
                  askTurn();
                }       
                  
            }
        } else {
            console.log("Congratulations your card has been completed!"+ "\n" + "You has done in "  + " turnos");
            var askAgainPlay=confirm("¿Do you want to play another game again??"); 
            if (askAgainPlay===true) {
                bingo();
            } else {
                console.log("!Hasta pronto, Bye!");
            }
        }   
    }
    askTurn();
    function match(){          
        var numSelect=generatorNumGame();
        console.log("\n" + "The number for this turn is: " + numSelect + "\n");
        for(i=0;i<carton.length;i++) {
            if(numSelect===carton[i]) {
                carton[i]="X"; 
                console.log("\n" + "A match was found with the number: " + numSelect +"!");
                console.log(carton.slice(0,5) + "\n" + carton.slice(5,10) + "\n" + carton.slice(10,15));         
            }               
        }            
        askTurn(); 
    }        
}
bingo();
