var ex1 = document.getElementById('ex1');
function exercise1(){
    var p = document.createElement('p');
    var div = document.getElementsByTagName('div')[0];
    var enlaces = document.getElementsByTagName('a').length;
    
    
    p.append('1  Numero de enlaces: '+enlaces);
    div.append(p);
    var penEnlace = document.getElementsByTagName('a')[enlaces-1].getAttribute('href');
    p.append(' 2 Direccion del penultimo enlace '+penEnlace);
    var google = document.getElementsByTagName('a');
    for (const goo of google) {
        var href =goo.getAttribute('href');
        if(href=="https://google.com"){
            p.append(' 3 Numero de paginas que enlazan a google: 1');
        }
    }
  
    var p3= document.getElementsByTagName('p')[3];
    var p3a = p3.getElementsByTagName('a').length;
    p.append(' 3 hay: '+p3a+ ' enlaces')

}
ex1.addEventListener("click",exercise1);