// https://stackoverflow.com/questions/16613809/how-to-create-circles-around-a-circle-with-css-javascript

    var div = 360 / 27; //cantidad de circulitos
    var radius = 200; //radio de los circulitos
    var parentdiv = document.getElementById('parentdiv'); //
    var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);  //assumes parent is square
    var offsetToChildCenter = 20; //posición del círculo padre
    var totalOffset = offsetToParentCenter - offsetToChildCenter; //
    
    for (var i = 1; i <= 27; ++i){
        var childdiv = document.createElement('div');
        childdiv.className = 'div2';
        childdiv.style.position = 'absolute';
        // childdiv.innerHTML = "A"; //aquí metemos las letras
        var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
        childdiv.style.top = (y + totalOffset).toString() + "px";
        childdiv.style.left = (x + totalOffset).toString() + "px";
        parentdiv.appendChild(childdiv);
    }