console.log("Hello World");

let computerScore = 0;
let humanScore = 0;
let playedRounds = 0;
let roundCount = 5;

const getComputerChoice = () => {
    let choice = Math.random().toFixed(1);
    return choice < 0.3 ? "Rock" : choice < 0.6 ? "Paper" : "Scissors";
};

const playRound = (playerChoice) => {
    document.querySelector(".result-box").innerText;
    document.querySelector("#playerScore").innerText;
    document.querySelector("#compScore").innerText;
    document.querySelector("#currentRound").innerText;
    document.querySelector("#totalRounds").innerText;
    let results;

    if (playedRounds < roundCount) {
        const compChoice = getComputerChoice();

        console.log(`Player Hand: ${playerChoice}\nComputer Hand: ${compChoice}`);
        if (compChoice.toUpperCase() === playerChoice.toUpperCase()) {
            playedRounds++;
            results = `Match Draw! \n\n${playerChoice} cancels ${compChoice}`;
        } else if (
            (playerChoice.toUpperCase() === "ROCK" && compChoice.toUpperCase() === "SCISSORS") ||
            (playerChoice.toUpperCase() === "SCISSORS" && compChoice.toUpperCase() === "PAPER") ||
            (playerChoice.toUpperCase() === "PAPER" && compChoice.toUpperCase() === "ROCK")
        ) {
            humanScore++;
            playedRounds++;
            results = `You win! \n\n${playerChoice} beats ${compChoice}`;
        } else {
            computerScore++;
            playedRounds++;
            results = `Computer wins! \n\n${playerChoice} loses to ${compChoice}`;
        }

        document.querySelector("#playerScore").innerText = humanScore;
        document.querySelector("#compScore").innerText = computerScore;
        document.querySelector(".result-box").innerText = results;

        //Update Round
        document.querySelector("#currentRound").innerText = playedRounds;
        document.querySelector("#totalRounds").innerText = roundCount;
    } else {
        checkRound();
    }
};

const checkRound = () => {
    if (playedRounds === roundCount) {
        return humanScore > computerScore
            ? "Player wins the Game"
            : humanScore < computerScore
            ? "Computer wins the Game"
            : "The Game is a draw";
    }
};

// console.log(playGame());
