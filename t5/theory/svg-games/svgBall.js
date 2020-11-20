var posX = 0; var posY = 0;
var incX = 5; var incY=3;
var ball;
window.onload = () =>{
    ball=document.getElementsByTagName("circle")[0];
    setInterval(anima,10);
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