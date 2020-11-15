
    class Player{
        constructor(wins,loses,lastMove=null){
            this.wins=0;
            this.loses=0;
            this.lastMove=null;
            this.hand=null;
        }
        mano(){
            let rosh=Math.floor(Math.random()*3+1);
            switch (rosh) {
                case 1:
                    this.hand='Piedra';
                    break;
                case 2:
                    this.hand='Papel';
                    break;
                case 3:
                    this.hand='Tijera';
                    break;
            }
        }
    }
    class Game{
        constructor(player1,player2){   
            this.player1=player1;
            this.player2=player2;
        }
        partidita(){
            if(this.player1.hand == this.player2.hand){
                console.log("Empate");
            }else if(this.player1.hand=="Piedra" &&this.player2.hand=="Tijera"){
                console.log("El jugador 1 ha ganado");
                this.player1.wins++;
                this.player2.loses++;
            }else if(this.player1.hand=="Piedra" &&this.player2.hand=="Papel"){
                console.log("El jugador 2 ha ganado");
                this.player2.wins++;
                this.player1.loses++;
            }else if(this.player1.hand=="Papel" &&this.player2.hand=="Piedra"){
                console.log("El jugador 1 ha ganado");
                this.player1.wins++;
                this.player2.loses++;
            }else if(this.player1.hand=="Papel" &&this.player2.hand=="Tijera"){
                console.log("El jugador 2 ha ganado");
                this.player2.wins++;
                this.player1.loses++;
            }else if(this.player1.hand=="Tijera" &&this.player2.hand=="Papel"){
                console.log("El jugador 1 ha ganado");
                this.player1.wins++;
                this.player2.loses++;
            }else if(this.player1.hand=="Tijera" &&this.player2.hand=="Piedra"){
                console.log("El jugador 2 ha ganado");
                this.player2.wins++;
                this.player1.loses++;
            }
            }
        }

    
    const jugador1 = new Player(0,0,0);
    const jugador2 = new Player(0,0,0);

    function jugar(){
        
    jugador1.mano();
    jugador2.mano();
    const juego = new Game(jugador1,jugador2);
    console.log(jugador1.hand);
    console.log(jugador2.hand);
    console.log(juego.partidita());
    console.log("El jugador1 tiene: " +jugador1.wins+" Victorias"+" y "+jugador1.loses+" Derrotas");
    console.log("El jugador2 tiene: " +jugador2.wins+" Victorias"+" y "+jugador2.loses+" Derrotas");
    }