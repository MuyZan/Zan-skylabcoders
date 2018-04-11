

var arr = ["s", "a", "n", "a"];
var arr2 = [];


var compareLetters = arr.map(function (num) {
	if (!arr2.includes(num)){
        arr2 += num;
        console.log("esto es el array2 " + arr2);
        return arr2;
    }
    
});


console.log(compareLetters);
