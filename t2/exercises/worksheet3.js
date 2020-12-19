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

function exercise2(cad) {
    const cadena=new String(cad);
    let mayus=0;let minus=0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena.charAt(i)===cadena.charAt(i).toUpperCase())
            mayus++;
        else if(cadena.charAt(i)===cadena.charAt(i).toLowerCase())
            minus++;
    }
    if(mayus===cadena.length){
        console.log("TODAS MAYUSCULAS");
    }
    else if (minus===cadena.length) {
        console.log("todas minusculas");
    }else {console.log("Mayusculas y minusculas")}
    
}
let cad_no_espacios=[];
let cad_in='';
let cad_de
function exercise7(cadena){
    /*
    Desarrolla una funcion que tomando como entrada una cadena de texto nos devuelva si es o no un palindromo 
    */
    //Yo dono rosas oro no doy
    //quitar espacios
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i]!=' ') cad_no_espacios.push(cadena[i]);
    }
    //ya tengo la cadena sin espacios y unida.
    cad_in=cad_no_espacios.join('');
    //ahora tengo que comprobar si dandole la vuelta, es igual a cad_no
    cad_no_espacios=[]
    for (let i = cadena.length; i >= 0; i--) {
        if(cadena[i]!=' ') cad_no_espacios.push(cadena[i]);
    }
    cad_de=cad_no_espacios.join('');
    if (cad_in===cad_de){
        console.log('Es un palindromo')
        return 'Es un palindromo';}
    else{
        console.log('no es un palindromo')
        return 'no es un palindromo';
    }

    
}
function exercise9(palabra){
    /*
    Escribir un procedimiento que lea una palabra y la escriba (formateada dentro deuna tabla) como se ve en la figura
    */
    const table=document.createElement('table');
    let td;
    for (let i = 0; i < palabra.length; i++) {
        const tr=document.createElement('tr');
        for (let j = 0; j < palabra.length; j++) {
            td=document.createElement('td');
            if(i==0){
            
                td.innerText=palabra[j];
                
            }else if(i==palabra.length-1){
                let invertida=[];
                let pal='';
                for (let i = palabra.length; i >= 0; i--) {
                    if(palabra[i]!=' ') invertida.push(palabra[i]);
                }
                pal=invertida.join('');
                td.innerText=pal[j];
            }else if(j==0){
                td.innerText=palabra[i];
            }else if(j==palabra.length-1){
                let invertida=[];
                let pal='';
                for (let i = palabra.length; i >= 0; i--) {
                    if(palabra[i]!=' ') invertida.push(palabra[i]);
                }
                pal=invertida.join('');
                td.innerText=pal[i];
            }
            tr.append(td);
        }    
        table.append(tr);
    }
    document.getElementById('div-exercise9').append(table);
}

document.getElementById('exercise1A').addEventListener('click',function(){exercise1A(cadena)});
document.getElementById('exercise1B').addEventListener('click',function(){exercise1B(cadena)});
document.getElementById('exercise1C').addEventListener('click',function() {exercise1C(document.getElementById('cadena').value)});
document.getElementById('exercise1D').addEventListener('click',function() {exercise1D(document.getElementById('cadena').value,numero)});
document.getElementById('exercise1E').addEventListener('click',function() {exercise1E(document.getElementById('cadena').value)});
document.getElementById('exercise2').addEventListener('click',function(){exercise2('HOla')});
document.getElementById('exercise7').addEventListener('click',function(){exercise7('yo dono rosas oro no doy')});
document.getElementById('exercise9').addEventListener('click',function(){exercise9('0123456789')});