const button = document.getElementsByTagName('button')[0];
var i=1;
function addLi() {
    /*
    Crea una web con una lista de elementos y un botón que cada vez que pulsemos introduzca una entrada nueva en la lista.
    */
    var li=document.createElement('li');
    var ul= document.getElementsByTagName('ul')[0];
    li.innerText="Elemento "+i;
    i++;
    ul.append(li);
}
button.addEventListener("click",addLi);