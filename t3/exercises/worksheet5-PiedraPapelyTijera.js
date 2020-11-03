function piedraPapelyTijera(){
    class Player{
        constructor(wins,loses,lastMove=null){
            this.wins=wins;
            this.loses=loses;
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
                return "Empate";
            }
            }
        }
    const jugador1 = new Player(0,0,0);
    const jugador2 = new Player(0,0,0);
    jugador1.mano();
    jugador2.mano();
    const juego = new Game(jugador1,jugador2);
    console.log(jugador1.hand);
    console.log(jugador2.hand);
    console.log(juego.partidita());
}