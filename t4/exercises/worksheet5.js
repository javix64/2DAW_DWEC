/* 
Crea un formulario típico de registro para tu web. Debe contener al menos campos para introducir nombre, apellidos, DNI, Teléfono, email y nombre de usuario. 
Todos los campos son obligatorios, y debes validar el mayor número posible de ellos haciendo uso de expresiones regulares. El nombre de usuario debe estar formado por al menos 8 caracteres, entre los cuales debe aparecer obligatoriamente algún número y algún signo de puntuación.

Conforme sale el foco de cada input, deberás validar el contenido de éste y mostrar información al usuario que le indique si está correcto o no.
*/
var form = document.getElementById('form');
var button = document.getElementById('button');
var nombre = document.getElementsByName('nombre');
var apellidos = document.getElementsByName('apellidos');
var dni = document.getElementsByName('dni');
var email = document.getElementsByName('email');
var user = document.getElementsByName('user');
var nCheck = new RegExp(/^[a-zA-Z ]*$/);
var aCheck = new RegExp(/^[a-zA-Z ]*$/);
var dCheck = new RegExp('^[0-9]{8}[a-zA-Z]$');
var eCheck = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
var uCheck = new RegExp(/[\w\W]{8,}/);

function nBlur(){
    if(!nCheck.test(nombre[0].value))
        nombre[0].style.backgroundColor="pink";
}
function aBlur(){
    if(!aCheck.test(apellidos[0].value))
        apellidos[0].style.backgroundColor="pink";
}
function dBlur(){
    if(!dCheck.test(dni[0].value))
        dni[0].style.backgroundColor="pink";
}
function eBlur(){
    if(!eCheck.test(email[0].value))
        email[0].style.backgroundColor="pink";
}
function uBlur(){
    if(!uCheck.test(user[0].value))
        user[0].style.backgroundColor="pink";
}we

nombre[0].addEventListener("blur",nBlur);
apellidos[0].addEventListener("blur",aBlur);
dni[0].addEventListener("blur",dBlur);
email[0].addEventListener("blur",eBlur);
user[0].addEventListener("blur",uBlur);