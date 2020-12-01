var imgArr=[];
var valArr=[];
var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var h3= document.getElementsByTagName('h3')[0];
var h31= document.getElementsByTagName('h3')[1];
var cati=0;
var cato=0;
img1.addEventListener('click',iplus);
img2.addEventListener('click',iplas);

function iplus(){
    cati++;
    h3.innerText=cati;
}

function iplas(){
    cato++;
    h31.innerText=cato;
}