i=0;
function exercise1(){
    /*
    Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert.
    */
   i++;
   alert("esto es la prueba numero "+i);
   
}
function exercise2(event){
    /*
    Captura el movimiento del ratón, para que se muestre la posición en la que se encuentra en cada momento.
    */
   x=event.offsetX;
   y=event.offsetY;
   document.getElementById("x").value=x;
   document.getElementById("y").value=y;
    
}
window.onload = function exercise4(){
    /*
    Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón en dos colores diferentes. Para ello primero simularemos que disponemos de un canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página(onLoad).
    */
    tabla=document.getElementById("tabla");
    tr=null;
    td=null;
    for (let i = 0; i < 100; i++) {
        tr=document.createElement('tr');
        tabla.append(tr);
        for (let j = 0; j < 100; j++) {
            td=document.createElement('td');
            tr.append(td);
            td.setAttribute("onmousemove","mover(event)")
        }
    }
}
    /*
    Lo siguiente será detectar el movimiento del ratón sobre las celdas para pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.
    */
    //dudas
    function mover(event){
        function ctrlMouse(e){
            if(e.ctrlKey){
                event.target.style.backgroundColor="red";
            }else if(e.shiftKey){
                event.target.style.backgroundColor="blue";
            }
        }
        document.addEventListener("keydown",ctrlMouse);
    }
    
    /*
    Añade las siguientes funcionalidades al ejercicio anterior:
    ◦Borrado de lineas con el ratón (mediante la pulsación del botón que túdecidas)
    ◦Borrar por completo el canvas (con un botón).
    */

   function borrarTodo(event){
        
   }