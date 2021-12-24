const central_area = document.getElementById('letsplayagame');
const HtmlCentralArea = central_area.innerHTML;
const house_element = document.getElementsByClassName('house');
const restart_button = document.getElementById('restart');
const radio_element = document.querySelectorAll('input[type=radio]');

restart_button.addEventListener('click', reset);

for(let e of house_element){
    e.addEventListener('click', mark);
}


const gamestate = {
    round: 0,
    turn: 0,
    symbols: ['x', 'o'],
    scores: [0, 0],
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
        this.round = (this.round + 1) % 11;
        this.turn = (this.turn + 1) % 2;
    },

    newMove: function(house){
        let symbol = this.symbols[this.turn];
        house.innerHTML = `<img src="images/${symbol}.png" alt="${symbol}"></img>`;
        let id = house.id;
        this.players[this.turn]['abc'.indexOf(id[0])][id[1]-1] = symbol;
        house.removeEventListener('click', mark);
        radio_element[Number(!Boolean(this.turn))].checked = 'checked';
    },

    increaseScore: function(player){
        this.scores[player]++;
        const elements_score = document.getElementsByClassName('score');
        const player_element_score = elements_score[player];
        const playerscore = this.scores[player];
        player_element_score.innerHTML = `<strong>${playerscore}</strong>`;
    },

    result: function(){//Função respónsavel por determinar se houve vitória.
        let c = 0;
        let currentplayer = this.turn;
        const completeline = ['x,x,x', 'o,o,o'][currentplayer];
        let playerboard = this.players[currentplayer];
    
        //Verificando horizontal e vertical.
        for(let row = 0; row < 3; row++){
            //Horizontal
            if(playerboard[row].toString() === completeline){
                return currentplayer;
            }

            //Vertical
            c = 0;
            for(let column = 0; column < 3; column++){
                if(playerboard[column][row] != undefined){
                    c++;
                }
            }
            if(c === 3){
                return currentplayer;
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
                return currentplayer;
            }
            row--;
            col++;
        }
        //alert(this.round);
        if(this.round === 8){
            return -1;
        }

        return -2;
    }
}


function mark(){
    gamestate.gamestart();
    gamestate.newMove(this);
    viewResult(gamestate.result());
    gamestate.nextRound();
}

function reset(){
    gamestate.turn = 0;
    gamestate.round = 0;
    gamestate.players = [
        [[],[],[]],
        [[],[],[]],
    ]

    radio_element[0].checked = 'checked';

    radio_element[Number(!Boolean(gamestate.turn))].removeAttribute('disabled');

    central_area.innerHTML = HtmlCentralArea;

    for(h of house_element){
        h.innerHTML = '';
        h.addEventListener('click', mark);
    }
}

function viewResult(result){
    if(result != -2){
        
        const element_result = document.createElement('div');
        element_result.id = 'viewresult';
        central_area.innerHTML = '';
        central_area.appendChild(element_result);

        let txt = '';
        if(result == -1){
            txt = 'EMPATE';
        }else{
            txt = `<p>${gamestate.symbols[result]}<br />VENCEU!</p>`
            gamestate.increaseScore(result);
        }
        element_result.innerHTML = txt;
    }
}
