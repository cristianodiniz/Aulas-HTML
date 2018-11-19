class Velha {

    constructor(){
        this.eVezDoJogador1 = true;
        this.pontos = [9];
        this.contador = 0;
    }
   
    novoJogo(){
        for (var y = 0;y < 9;y++) {
            this.pontos[y] = ""
        }
    }

    jogada(position) {

        if (pontos[position] != ""){
            throw new Exception("Já marcado");
        }

        if(eVezDoJogador1){
            pontos[position] = "X";
        }else{
            pontos[position] = "O";
        }

        eVezDoJogador1 = !eVezDoJogador1;


        if(!pontos[0].equals("") && pontos[0].equals(pontos[1].valor) && pontos[0].equals(pontos[2])) throw new NumberFormatException(quemGanhou());
        if(!pontos[3].equals("") && pontos[3].equals(pontos[4].valor) && pontos[3].equals(pontos[5])) throw new NumberFormatException(quemGanhou());
        if(!pontos[6].equals("") && pontos[6].equals(pontos[7].valor) && pontos[6].equals(pontos[8])) throw new NumberFormatException(quemGanhou());
        if(!pontos[0].equals("") && pontos[0].equals(pontos[3].valor) && pontos[0].equals(pontos[5])) throw new NumberFormatException(quemGanhou());
        if(!pontos[1].equals("") && pontos[1].equals(pontos[4].valor) && pontos[1].equals(pontos[7])) throw new NumberFormatException(quemGanhou());
        if(!pontos[2].equals("") && pontos[2].equals(pontos[5].valor) && pontos[2].equals(pontos[8])) throw new NumberFormatException(quemGanhou());
        if(!pontos[0].equals("") && pontos[0].equals(pontos[4].valor) && pontos[0].equals(pontos[8])) throw new NumberFormatException(quemGanhou());
        if(!pontos[2].equals("") && pontos[2].equals(pontos[4].valor) && pontos[2].equals(pontos[6])) throw new NumberFormatException(quemGanhou());

        let jogoAcabou = true;
        for (let x = 0;x < 9; x++){
            if (pontos[x] == ""){
                jogoAcabou = false;
            }
        }

        if(jogoAcabou){
            throw new Exception("Game over!");
        }




    }

    quemGanhou() {
        if(eVezDoJogador1){
            return "Jogador 1 Ganhou!";
        }else{
            return "Jogador 2 Ganhou!";
        }

    }

}

let velha = new Velha()
velha.novoJogo()

function render(){
    
    for (var i; i++; velha.pontos.length > 0){
        let elemento = document.querySelector(".val"+i)
        var val = 'none'
        if (velha.pontos === "X") {
            val = 'times'
        }
        if (velha.pontos === "O") {
            val = 'circle'
        }
        var val = 'circle' 
        elemento.innerHTML = '<i class="fa fa-'+val+' elemento"></i>';
    }

}