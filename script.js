    var computerScore = 0;
    var playerScore = 0;

function computerPlay(){
    var randomNumber = Math.floor(Math.random() * (3));
    switch (randomNumber) {
        case 0:
            return 'Rock'
            break;
        case 1:
            return 'Paper'
            break;
        case 2:
            return 'Scissors'
            break;
            default:
                return 'default';
        
    }
}

function playRound (playerSelection, computerSelection){
    var player = playerSelection.toLowerCase() 
    var computer = computerSelection.toLowerCase()

    

    if (computer == player){
        return `It's a tie! ${computer} and ${player} are equal!`
    }
    if (computer == 'rock' && player == 'paper'){
        playerScore++;
        return 'You win! paper beats rock!';
    }
    if (computer == 'paper' && player == 'scissors'){
        playerScore++;
        return 'You win! Scissors beats Paper!';
    }
    if (computer == 'scissors' && player == 'rock'){
        playerScore++;
        return 'You win! rock beats scissors!';
    }
    if (computer == 'rock' && player == 'scissors'){
        computerScore++;
        return 'You lose! rock beats scissors!';
    }
    if (computer == 'paper' && player == 'rock'){
        computerScore++;
        return 'You lose! paper beats rock!';
    }
    if (computer == 'scissors' && player == 'paper'){
        computerScore++;
        return 'You lose! scissors beats paper';
    }

}








function rockPaperScissors(maxRounds){
    for (let i = 0; i < maxRounds; i++){
        const input = prompt("rock, paper, scissors");
        const resultado = playRound(input, computerPlay());
        console.log(resultado);
    }
}
rockPaperScissors(5);