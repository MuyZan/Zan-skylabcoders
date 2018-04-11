
var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function sayItWithWords(num) {
    var numString = num.toString();
    var numInWords = [];
    var sayIt;
    var h = "hundred";
    for (var i = 0; i < 10; i++) {
        //si el número es una unidad del 1-9
        if (num < 10 && i === num) {
            numInWords.push(units[i]);
            sayIt = numInWords.join("") + " / " + num;
            break;
            //si el número está contenido entre el 10-19   
        } else if (num < 20 && numString[0] == 1 && numString[1] == i) {
            numInWords.push(teens[i]);
            sayIt = numInWords.join("") + " / " + num;
            break;
            //si el número una decena , 20-90
        } else if (num < 100 && numString[0] == i && numString[1] == 0) {
            numInWords.push(tens[i]);
            sayIt = numInWords.join("") + " / " + num;
            break;
            //si el número está contenido entre el 21 y el 99 y NO es una decena.
        } else if (num > 20 && num < 100 && numString[1] != 0) {
            for (j = 1; j < 10; j++) {
                if (numString[0] == i && numString[1] == j) {
                    numInWords.push(tens[i])
                    numInWords.push("-")
                    numInWords.push(units[j])
                    sayIt = numInWords.join("") + ", " + numInWords[0] + " + " + numInWords[2] + " / " + numString[0] + "0" + " + " + numString[1];
                    break;
                }
            }
            //Si el número es superior a 99 y es una centena pura
        } else if (numString[0] == i && numString[1] == 0 && numString[2] == 0) {
            numInWords.push(units[i]);
            sayIt = numInWords.join("") + " " + h + ", " + " / " + numString[0] + "00";
            break;
        }
        //Si el número es superior a 99 y no es centena pura
        for (j = 0; j < 10; j++) {
            //si es centena + 10
            if (numString[0] == i && numString[1] == 1 && numString[2] == 0) {
                numInWords.push(units[i]);
                numInWords.push(teens[0]);
                sayIt = numInWords[0] + " " + h + " " + numInWords[1] + ", " + numInWords[0] + " " + h + " + " + teens[0] + " / " + numString[0] + "00" + "+" + numString[1] + 0;
                break;
                //si es centena + cualquier otro tens
            } else if (numString[0] == i && numString[1] == j && numString[2] == 0) {
                numInWords.push(units[i]);
                numInWords.push(tens[j]);
                sayIt = numInWords[0] + " " + h + " " + numInWords[1] + ", " + numInWords[0] + " " + h + " + " + numInWords[1] + " / " + numString[0] + "00" + "+" + numString[1] + 0;
                break;
            }
            for (x = 1; x < 10; x++) {
                //si es centena + teens
                if (numString[0] == i && numString[1] == 1 && numString[2] == x) {
                    numInWords.push(units[i]);
                    numInWords.push(teens[x]);
                    sayIt = numInWords[0] + " " + h + " " + numInWords[1] + ", " + numInWords[0] + " " + h + " + " + teens[x] + " / " + numString[0] + "00" + "+" + numString[1] + 0 + "+" + numString[2];
                    break;
                    //si es cualquier otro número centenar
                } else if (numString[0] == i && numString[1] == j && numString[2] == x) {
                    numInWords.push(units[i]);
                    numInWords.push(tens[j]);
                    numInWords.push("-")
                    numInWords.push(units[x]);
                    sayIt = numInWords[0] + " " + h + " " + numInWords[1] + numInWords[2] + numInWords[3] + ", " + numInWords[0] + " " + h + " + " + numInWords[1] + " + " + numInWords[3] + " / " + numString[0] + "00" + "+" + numString[1] + 0 + "+" + numString[2];
                    break;
                }
            }
        }
    }
    return sayIt;
}
console.log(sayItWithWords(130));




