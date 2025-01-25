console.log("Hello World");

let computerScore = 0;
let humanScore = 0;
let roundCount = 3;

const getComputerChoice = () => {
    let choice = Math.random().toFixed(1);
    return choice < 0.3 ? "Rock" : choice < 0.6 ? "Paper" : "Scissors";
};

const getHumanChoice = () => {
    return prompt("Choose your weapon: Rock | Paper | Scissors");
};

const playRound = (compChoice, playerChoice) => {
    console.log(`Player Hand: ${playerChoice}\nComputer Hand: ${compChoice}`);
    if (compChoice.toUpperCase() === playerChoice.toUpperCase()) {
        console.log("This round is a draw");
    } else if (
        (playerChoice.toUpperCase() === "ROCK" && compChoice.toUpperCase() === "SCISSORS") ||
        (playerChoice.toUpperCase() === "SCISSORS" && compChoice.toUpperCase() === "PAPER") ||
        (playerChoice.toUpperCase() === "PAPER" && compChoice.toUpperCase() === "ROCK")
    ) {
        humanScore++;
        return "Player wins!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
};

const playGame = () => {
    for (let i = 1; i <= roundCount; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, humanSelection));
    }

    console.log(`Player Score: ${computerScore}\nComputer Score: ${humanScore}`);

    return humanScore > computerScore
        ? "Player wins the Game"
        : humanScore < computerScore
        ? "Computer wins the Game"
        : "The Game is a draw";
};

// console.log(playGame());
