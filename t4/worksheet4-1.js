function temaNormal(){
    var nav = document.getElementById('nav');
    nav.style.backgroundColor="lightblue";
    nav.style.fontWeight="bold";
    nav.style.border="5px dotted green";
    
    var encabezado1 = document.getElementsByTagName('h1')[0];
    encabezado1.style.fontWeight="lighter";
    
    var aside = document.getElementsByTagName('aside')[0];
    aside.style.float="left";
    aside.style.backgroundColor="blue";
    aside.style.width="10%";
    aside.style.height="500px";
    
    var section = document.getElementsByTagName('section')[0];
    section.style.float="right";
    section.style.width="89%";
    
    var body = document.body;
    body.style.backgroundColor="beige";
    
    var oculto = document.getElementById('oculto');
    oculto.style.display="contents";
    oculto.style.fontWeight="bold";

    var marco = document.getElementById('marco');
    marco.style.backgroundColor="yellow";
    marco.style.border="2px solid black";

}

function temaMinimalista(){
    var nav = document.getElementById('nav');
    nav.style.backgroundColor="";
    nav.style.fontWeight="";
    nav.style.border="";
    
    var encabezado1 = document.getElementsByTagName('h1')[0];
    encabezado1.style.fontWeight="";
    
    var aside = document.getElementsByTagName('aside')[0];
    aside.style.float="";
    aside.style.backgroundColor="";
    aside.style.width="";
    aside.style.height="";
    
    var section = document.getElementsByTagName('section')[0];
    section.style.float="";
    section.style.width="";
    
    var body = document.body;
    body.style.backgroundColor="";
    
    var oculto = document.getElementById('oculto');
    oculto.style.display="none";

    var marco = document.getElementById('marco');
    marco.style.backgroundColor="";
    marco.style.border="";
}

document.getElementById('normal').addEventListener('click',temaNormal);
document.getElementById('minimalista').addEventListener('click',temaMinimalista);