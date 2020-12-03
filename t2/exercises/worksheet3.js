//ejercicios 1 2 7 9
var cadena=document.getElementById('cadena').value;
var numero=5;
var cad_all='';

function exercise1A(cadena){
var cad_len=cadena.length;
var cad_inv="";
while(cad_len>=0){
    cad_inv=cad_inv+cadena.charAt(cad_len);
    cad_len--;
}
alert("Cadena invertida = "+cad_inv);
}
function exercise1B(cadena){
    let arrayPalabras=cadena.split(" ");
    console.log(arrayPalabras)
    var palabra_invertida='';
    for(var i=arrayPalabras.length-1;i>=0;i--){
        palabra_invertida=palabra_invertida+arrayPalabras[i]+" ";
    }
    alert(palabra_invertida);
}
function exercise1C(cadena){
    var cad_arr=cadena.split(" ");
    var palabra_larga="";
    cad_arr.forEach(i => {
        if (i.length>=palabra_larga.length){
            palabra_larga=i;
        }
    });
    console.log(palabra_larga+" "+palabra_larga.length);
}
function exercise1D(cadena, i){
    var cad_arr=cadena.split(" ");
    var cadena_larga="";
    cad_arr.forEach(j => {
        if (j.length>=i){
            cadena_larga=j;
        }
    });
    console.log(cadena_larga);
}
function exercise1E(cadena){
    var cad_low=cadena.toLowerCase();
    var cad_first_up=cad_low.charAt(0).toUpperCase();
    for (let i = 1; i < cad_low.length; i++) {
        let char = cad_low.charAt(i)
        console.log(char);
        cad_all.concat(char);      
    }
    console.log(cad_first_up+cad_all);
}
function exercise2(){
    
}
function exercise7(){
    
}
function exercise9(){
    
}

document.getElementById('exercise1A').addEventListener('click',function(){exercise1A(cadena)});
document.getElementById('exercise1B').addEventListener('click',function(){exercise1B(cadena)});
document.getElementById('exercise1C').addEventListener('click',function() {exercise1C(document.getElementById('cadena').value)});
document.getElementById('exercise1D').addEventListener('click',function() {exercise1D(document.getElementById('cadena').value,numero)});
document.getElementById('exercise1E').addEventListener('click',function() {exercise1E(document.getElementById('cadena').value)});