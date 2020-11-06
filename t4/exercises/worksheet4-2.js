var textoSize = document.getElementById('textSize');
var textoAlign = document.getElementById('textAlign');

var btextoSize = document.getElementById('bTextSize');
var btextoAlign = document.getElementById('bTextAlign');

var texto = document.getElementsByTagName('p');
function textSize(){
    for (const i of texto) {
        i.style.fontSize = textoSize.value+"px";
    }
}

function textAlign(){
    for (const i of texto) {
        i.style.textAlign=textoAlign.value;
    }
}

btextoSize.addEventListener('click',textSize);
btextoAlign.addEventListener('click',textAlign);