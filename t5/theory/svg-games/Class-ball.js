class bola{
    constructor(radio, color, x, y, velX, velY){
        this.r = radio;
        this.c = color;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        //CREAR SU REPRESANTACION EN PANTALLA
        this.circ = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.circ.setAttributeNS(null,"r",this.r);
        this.circ.setAttributeNS(null,"fill",this.f);
        this.circ.setAttributeNS(null,"cx",this.x);
        this.circ.setAttributeNS(null,"cy",this.y);

        document.getElementsByTagName("circ")[0].appendChild(circ);
    }
    addBall(){
        
    }
    
}