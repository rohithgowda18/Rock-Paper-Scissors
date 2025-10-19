const userScoreElem = document.querySelector("#userscore");
const computerScoreElem = document.querySelector("#computerscore");

const msgElem = document.querySelector("#msg");
const buttons = document.querySelectorAll(".img-button");


let userScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

const playRound = (userChoice) => {
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        msgElem.innerText = `It's a tie! Both chose ${userChoice}.`;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        msgElem.innerText = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        msgElem.innerText = `You lose! ${computerChoice} beats ${userChoice}.`;
    }

    userScoreElem.textContent = `Your score : ${userScore}`;
    computerScoreElem.textContent = `Computer score : ${computerScore}`;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const choice = button.querySelector("img").alt.toLowerCase();
        playRound(choice);
    });
});

const stopBtn = document.querySelector("#stop"); 

stopBtn.addEventListener("click", () => {
    if (userScore > computerScore) {
        msgElem.innerText = "You Won!";
    } else if (userScore < computerScore) {
        msgElem.innerText = "Computer Won!";
    } else {
        msgElem.innerText = "It's a Tie!";
    }

    userScore = 0;
    computerScore = 0;

    userScoreElem.textContent = `Your score : ${userScore}`;
    computerScoreElem.textContent = `Computer score : ${computerScore}`;
});

const modeBtn = document.getElementById("mode");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
