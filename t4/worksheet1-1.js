var jotaS = document.getElementsByTagName("img")[0];
var jotaSx;
var jotaSy;
var botonPulsado=false;
function exercise9(){
    /*
    9.Crea una página web que haciendo uso de eventos permita arrastrar una imagen haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que sueltoel botón).
    10.Mejora el ejercicio anterior para que se pueda hacer en una página con un número cualquiera de imágenes.
    */
    //coges con css la posicion de la imagen
    //poner una variable boolean a false, si tocas una imagen 
    //la pones a true.
    //cuando clicas otra vez sueltas
    //pones en el css la posicion de la imagen y coges las 
    //coordenadas del raton 
    botonPulsado=!botonPulsado;
        jotaS.style.left=jotaSx+"px";
        jotaS.style.top=jotaSy+"px";
}
function nuevoRaton(e){
    if(botonPulsado){
        jotaSx=e.x;
        jotaSy=e.y;
        console.log('x ='+e.x+" - "+"y ="+e.y);
    }
    
}