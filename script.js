const MAX_ROUNDS = 5
const choices = ["rock", "paper", "scissors"];

function getComputerChoice () {

    let choice = Math.floor(Math.random() * choices.length);

    return choices[choice];
}

function getPlayerElection() {

    let playerSelection = prompt("Enter your choice (rock, paper or scissors): ");

    while (!choices.includes(playerSelection.toLowerCase())) {
        console.log("Invalid choice, input a valid option")
        playerSelection = prompt("Enter your choice (rock, paper or scissors): ");
    }

    return playerSelection.toLocaleLowerCase();

}

function determineWinner (playerSelection, computerSelection) {
    const outcomes = {
        rock : {beats: "scissors", losesTo: "paper"},
        paper: {beats: "rock", losesTo: "scssors"},
        scissors: {beats: "paper", losesTo: "rock"},
    };

    if(playerSelection === computerSelection)
        return "tie";
    else if (outcomes[playerSelection].beats === computerSelection)
        return "player";
    else
        return "computer";
}





function game() {

    for (let i = 0; i < MAX_ROUNDS;) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerElection();
        let result = determineWinner(playerSelection, computerSelection);

        if(result === "tie")
            console.log("It's a tie, try again!")
        else {
            const winner = result === "player" ? "You" : "Computer";
            const losingChoice = result === "player" ? computerSelection : playerSelection;
            console.log(`${winner} won! ${winner === "You" ? playerSelection : computerSelection} beats ${losingChoice}`); 
            i++;
        }
    }
}



game();