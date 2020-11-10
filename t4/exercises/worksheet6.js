/* 
1) Diseña una web que hará uso de cookies para guardar el nombre del usuario. En
caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre del
usuario y almacenarlo en una cookie que caducará en 5 minutos. Tras esto
saludará al usuario mediante un mensaje en pantalla. En caso de tener ya creada
la cookie deberá leerla y mostrar el mensaje anterior directamente. Deberá
proporcionar también un enlace para borrar la cookie (lo que podríamos llamar
'Cerrar Sesión').  
  
Nota: Asegúrate de que tu cookie acepta todo tipo de caracteres (como ñ, espacio
en blanco, acentos, etc....)  
  
2) Mejora el ejercicio anterior dando al usuario las opciones para que pueda
configurar el color de fondo, de párrafo y el tamaño de la letra.  
  
3) ¿Cómo podemos hacer que la segunda cookie se borre automáticamente al cerrar
el navegador? Compruébalo. 
*/
var nombre="";
const h2=document.getElementsByTagName("h2");
const button=document.getElementById("closeSession");
const pColor=document.getElementsByTagName('p');
const backColor=document.body;
const button2=document.getElementById("changeState");
var valPColor= document.getElementById('pColor').value;
var valBColor= document.getElementById('backColor').value;
var valPSize= document.getElementById('pSize').value;

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
button.addEventListener("click",close);
function close(){
    document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
if(getCookie("name")==""){
    h2[0].innerHTML="No has iniciado sesion";
    nombre = prompt("Cual es tu nombre?");
    document.cookie="name="+nombre+";max-age=300";
    h2[0].innerHTML="Bienvenido "+nombre;
}else{
    nombre=getCookie("name");
    h2[0].innerHTML="Bienvenido "+nombre;
}
//color fondo
//color parrafo
//tama;o letra
button2.addEventListener("click",changeStyle);
function changeStyle(){
    document.cookie="backColor="+valBColor;
    document.cookie="pColor="+valPColor;
    document.cookie="pSize="+valPSize;
}
pColor[0].style.backgroundColor=getCookie("pColor");
pColor[0].style.fontSize=getCookie("pSize");
backColor.style.backgroundColor=getCookie("backColor");