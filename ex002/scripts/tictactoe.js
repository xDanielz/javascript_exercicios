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
    scores: [0, 0],
    players: [
             [[],[],[]], 
             [[],[],[]]
            ],

    symbol: function(){
        return 'xo'[this.turn];
    },

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
        let symbol = gamestate.symbol();
        house.innerHTML = `<img src="images/${symbol}.png" alt="${symbol}"></img>`;//Adicionando imagem no site
        let id = house.id;
        this.players[this.turn]['abc'.indexOf(id[0])][id[1]-1] = symbol;//Adicionando simbolo no array respectivo do jogador
        house.removeEventListener('click', mark);
        radio_element[Number(!Boolean(this.turn))].checked = 'checked';
    },

    increaseScore: function(){
        let player = Number(!Boolean(this.turn));
        this.scores[player]++;
        const elements_score = document.getElementsByClassName('score');
        const player_element_score = elements_score[player];
        const playerscore = this.scores[player];
        player_element_score.innerHTML = `<strong>${playerscore}</strong>`;
    },

    result: function(){//Função respónsavel por determinar se houve vitória.
        let c = 0;
        let currentplayer = this.turn;
        let victorioushouses = [];
        const completeline = ['x,x,x', 'o,o,o'][currentplayer];
        let playerboard = this.players[currentplayer];
    
        //Verificando horizontal e vertical.
        for(let row = 0; row < 3; row++){
            
            //Horizontal
            if(playerboard[row].toString() === completeline){
                let letter = 'abc'[row];
                victorioushouses = [`${letter}1`, `${letter}2`, `${letter}3`]
                return victorioushouses;
            }

            //Vertical
            c = 0;
            for(let column = 0; column < 3; column++){
                if(playerboard[column][row] != undefined){
                    c++;
                }
                if(c === 3){
                    let position = row+1
                    victorioushouses = [`a${position}`,`b${position}`,`c${position}`]
                    return victorioushouses;
                }
            }
        }
        
        //Diagonais
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
                if(diagonals[0] === 3){
                    victorioushouses = ['a3', 'b2', 'c1'];
                }else{
                    victorioushouses = ['a1', 'b2', 'c3'];
                }
                return victorioushouses;
            }
            row--;
            col++;
        }

        //Empate;
        if(this.round === 8){
            return -1;
        }

        return -2;
    }
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

function viewResult(){
    let position = gamestate.result();

    if(position != -2){
        let symbol = gamestate.symbol();
        let c = 0;

        for(let h of house_element){
            if(h.id === position[c]){
                h.children[0].src = `images/${symbol}v.png`
                c++;
            }
            h.removeEventListener('click', mark);
        }

        setTimeout(function(){
            const element_result = document.createElement('div');
            element_result.id = 'viewresult';
            central_area.innerHTML = '';
            central_area.appendChild(element_result);
            let txt = '';

            if(position == -1){
                txt = 'EMPATE';

            }else{
                txt = `<p>
                            <img src="images/${symbol}.png" alt="${symbol}" id="imgresult"></img>
                            <br />VENCEU!
                       </p>`
                gamestate.increaseScore();
            }
            element_result.innerHTML = txt;
        }, 500);
    }
}

function mark(){
    gamestate.gamestart();
    gamestate.newMove(this);
    viewResult();
    gamestate.nextRound();
}
