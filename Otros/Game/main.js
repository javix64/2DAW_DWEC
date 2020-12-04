class Tablero{
    constructor(div){
        this.vista=document.createElementNS('http://www.w3.org/2000/svg','svg');
        this.vista.setAttribute('style',"background-color:grey");
        this.vista.setAttribute('height',500);
        this.vista.setAttribute('width',800);
        this.vista.setAttribute('id','tablero');
        div.appendChild(this.vista);
    }
}
class Pelota{
    constructor(radio,color,posicionX,posicionY,velocidadX,velocidadY,contenedor){
        //ponemos las propiedades de la pelota
        this.x = posicionX;
        this.y = posicionY;
        this.color = color;
        this.radio = radio;
        this.vX = velocidadX;
        this.vY = velocidadY;
        //creamos el circulo y ponemos los atributos
        this.circle= document.createElementNS('http://www.w3.org/2000/svg','circle');
        this.circle.setAttribute('cx',this.x);
        this.circle.setAttribute('cy',this.y);
        this.circle.setAttribute('r',this.radio);
        this.circle.setAttribute('id','pelota');
        contenedor.appendChild(this.circle);
    }
    mover(anchoContenedor, altoContenedor){
        this.posX = this.x;
        this.posY = this.y;
        this.x+=this.vX;
        this.y+=this.vY;

        if (this.x-this.radio<=0 || this.x+this.radio >= anchoContenedor ){
            this.vX *= -1;
            this.x  = (this.x-this.radio<=0) ? this.radio: anchoContenedor-this.radio;
        }
        if (this.y-this.radio <=0 || this.y+this.radio >= altoContenedor ){
            this.vY *= -1;
            this.y  = (this.y-this.radio<=0) ? this.radio: altoContenedor-this.radio;
        }
    }
    dibuja(){
        this.Circle.setAttributeNS(null, "cx", this.x);
        this.Circle.setAttributeNS(null, "cy", this.y);
    }
}  
var juego= new Tablero(document.getElementsByTagName('div')[0]);
var pelota= new Pelota(10,'black',0,0,20,20,document.getElementsByTagName('svg')[0]);

