//MV
    //vista -> mostrar objetos
    //modelo -> objetos en si
//objetos
    //2 barras
        //1 barra la mueve la persona
        //es movida por la bola
    //bola
    //escenario
//clases
    //juego
    //controles
class GamePingPong{
    constructor(){

    }
    get tablero(){
        var svg1=document.createElementNS('http://www.w3.org/2000/svg','svg');
        svg1.setAttribute('style',"background-color:green");
        svg1.setAttribute('height',500);
        svg1.setAttribute('width',800);
        svg1.setAttribute('id','tablero');
        document.body.appendChild(svg1);
    }
    //creada la pelota
    get pelotita(){
        //creamos el circulo
        var circles= document.createElementNS('http://www.w3.org/2000/svg','circle');
        //coordenadas del objeto
        let cx=0;
        let cy=0;
        circles.setAttribute('cx',cx);
        circles.setAttribute('cy',cy);
        circles.setAttribute('r',10);
        circles.setAttribute('id','pelota');
        document.getElementById('tablero').appendChild(circles);
        //si se mueve tengo cambiar el cx y cy
        for (let i = 0; i < 10; i++) {
            setInterval(this.moverPelotita,1000);
            console.log(i);
        }
        
        
    }
    moverPelotita(){
        var pelota= document.getElementById('pelota');
        let cx=0;
        let cy=0;
        let incremento=10;
        cx+=incremento;
        pelota.setAttribute('cx',cx);
    }
}    
var juego= new GamePingPong;
juego.tablero;
juego.pelotita;
