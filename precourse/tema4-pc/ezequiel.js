var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var hundreds = ['', 'one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred',];



function sayItWithWords3(digit){
	if (digit < 10){
		console.log(units[digit] + ": " + units[digit] + " / " + digit);
	}else if (digit >= 10 && digit < 20){
		var unit = digit - 10;
		console.log(teens[unit] + ": " + teens[0]  + " + " + units[unit] + " / " + 10 + " + " + unit);
	}else if (digit >= 20 && digit < 100){
		var arr = digit.toString().split(""); 
		console.log(tens[arr[0]] + "-" + units[arr[1]] + ": " + tens[arr[0]] + " + " + units[arr[1]] + " / " + (arr[0]*10) + " + " + arr[1]);
	}else if (digit >= 100 && digit < 1000){
		var arr = digit.toString().split("");
		console.log(hundreds[arr[0]] + " " + tens[arr[1]] + "-" + units[arr[2]] + ": " + hundreds[arr[0]] + " + " + tens[arr[1]] + " + " + units[arr[2]] + " / " + arr[0]*100  + " + " + arr[1]*10 + " + " + arr[2])
	}
}

console.log(sayItWithWords3(13));