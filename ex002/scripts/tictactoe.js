const board_element = document.getElementsByClassName('house');
//const restart_button = document.getElementById('restart');
const radio_element = document.querySelectorAll('input[type=radio]');

const gamestate = {
    round: 0,
    turn: 0,
    simbols: ['X', 'O'],
    players: [
             [[],[],[]], 
             [[],[],[]]
            ],


    gamestart: function(){
        if(!this.round){
            if(radio_element[1].checked){
                this.turn++;   
            }
            radio_element[Number(!Boolean(this.turn))].setAttribute('disabled', 'disabled');
        }
    },

    nextRound: function(){
        this.round = (this.round + 1) % 9;
        this.turn = (this.turn + 1) % 2;
    },

    newMove: function(house){
        let simbol = this.simbols[this.turn];
        house.innerHTML = simbol;
        let id = house.id;
        this.players[this.turn]['abc'.indexOf(id[0])][id[1]-1] = simbol;
        house.removeEventListener('click', mark);
    },

    result: function(){//Funcão respónsavel por determinar se houve vitória.
        let c = 0;
        const completeline = ['X,X,X', 'O,O,O'][this.turn];
        let playerboard = this.players[this.turn];
    
        //Verificando horizontal e vertical.
        for(let row = 0; row < 3; row++){

            //Horizontal
            if(playerboard[row].toString() === completeline){
                alert('venceu');
            }

            //Vertical
            c = 0;
            for(let column = 0; column < 3; column++){
                if(playerboard[column][row] != undefined){
                    c++;
                }
            }
            if(c === 3){
                alert('venceu');
            }
        }
        
        //Diagonal esquerda
        let row = 2; let col = 0;
        let diagonals = [0, 0];
        for(let i = 0; i < 3; i++){
            if(playerboard[col][row] != undefined){
                diagonals[0]++;
            }
            if(playerboard[col][col] != undefined){
                diagonals[1]++;
            }
            if(diagonals[0] === 3 || diagonals[1] === 3){
                alert('venceu');
            }
            row--;
            col++;
        }
    }
}

for(let e of board_element){
    e.addEventListener('click', mark);
}

function mark(){
    gamestate.gamestart();
    gamestate.newMove(this);
    gamestate.result();
    gamestate.nextRound();
}
