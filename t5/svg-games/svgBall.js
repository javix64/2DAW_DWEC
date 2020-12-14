var posX = 10; var posY = 0;
var incX = 2; var incY=20;
var ball;
window.onload = () =>{
    ball=document.getElementsByTagName("circle")[0];
    setInterval(anima,5);
}

function anima(){
    ball.setAttribute('cx',posX);
    ball.setAttribute('cy',posY);
    
    posX+=incX;
    posY+=incY;
    
    if(posX>=window.innerWidth || posX<=0){
        incX*=-1;
    }
    if(posY>=window.innerHeight || posY<=0){
        incY*=-1;
    }
}