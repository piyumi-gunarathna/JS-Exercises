class Player {
    constructor(symbol, name) {
        this.name = name;
        this.symbol = symbol;
        this.pickedCells = [];
    }
}

const combinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

let gameStatus = '';
let winner = '';
let player1;
let player2;
let currentPlayer;
this.startNewGame();

document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
      this.selectItem(item.id);
    });
});

function checkForWinner() {
    let i = 0;
    while (i < combinations.length) {
        if ( document.getElementById(combinations[i][0]).innerHTML.length > 0 &&
            (document.getElementById(combinations[i][0]).innerHTML === document.getElementById(combinations[i][1]).innerHTML) &&
            (document.getElementById(combinations[i][1]).innerHTML === document.getElementById(combinations[i][2]).innerHTML)) {
            this.endGame(document.getElementById(combinations[i][0]).innerHTML);
            break;
        }
        i++;
    }
    this.checkForEmptyCells();
}

function checkForEmptyCells() {
    for(var i = 1; i <= 9; i++) {
        if (!document.getElementById(i).innerHTML.length > 0) 
            return true;
    }
    document.getElementById('status').innerHTML = `Game Over - No One Wins`;   
    currentPlayer = null;
}

function selectItem(id){
    if(!currentPlayer) {
        document.getElementById('error').innerHTML = 'Please reset to play again';
        return;
    }
    if(document.getElementById(id).innerHTML.length > 0) {
        document.getElementById('error').innerHTML = 'Please select empty cell';
        return;
    }
    document.getElementById('error').innerHTML = '';
    document.getElementById(id).innerHTML = currentPlayer.symbol;
    
    if(currentPlayer.symbol === player1.symbol) {
        player1.pickedCells.push(id);
        currentPlayer = player2;
    } else {
        player2.pickedCells.push(id);
        currentPlayer = player1;
    }
    this.setStatus();
    this.checkForWinner();
}

function endGame(symbol) {
    document.getElementById('status').innerHTML = `Game Over - ${symbol} Wins`;
    const winner = symbol === player1.symbol? player1 : player2;
    for (var i=0; i < winner.pickedCells.length; i++ ){
        document.getElementById(winner.pickedCells[i]).style.color = "red";
    }   
    currentPlayer = null;
}

function startNewGame() {
    player1 = new Player('O', 'Player 1');
    player2 = new Player('X', 'Player 2');
    currentPlayer = player1;
    document.getElementById('error').innerHTML = '';
    this.setStatus();
}

function setStatus() {
    gameStatus = `${currentPlayer.name} Turn - '${currentPlayer.symbol}'`;
    document.getElementById('status').innerHTML = gameStatus;
}

function reset() {
    this.startNewGame();
    document.querySelectorAll('.grid-item').forEach(item => {
        item.innerHTML = '';
    });
}
