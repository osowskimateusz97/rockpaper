let computerScore = 0;
let userScore=0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result >p");
const userPick= document.getElementById("userChoose");
const compPick= document.getElementById("compChoose");
const getRock = document.getElementById("r");
const getPaper = document.getElementById("p");
const getScissors = document.getElementById("s");

 
//computer selection
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
//convert letter to word
function convertWord(letter) {
    if(letter==="r") return "Rock";
    if (letter==="s") return "Scissors";
     return "Paper";
}
//showing pick
function showPicking (user,comp) {
    userPick.innerHTML= `${convertWord(user)}`;
    compPick.innerHTML= `${convertWord(comp)}`;

}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result.innerHTML = `${convertWord(userChoice)} beats  ${convertWord(computerChoice)}. You win!`; 
    document.getElementById(userChoice).classList.add('goodChoice'); 
    setTimeout(()=> document.getElementById(userChoice).classList.remove('goodChoice'),300);

}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result.innerHTML = `${convertWord(userChoice)} loses to ${convertWord(computerChoice)}. Computer wins!`; 
    document.getElementById(userChoice).classList.add('badChoice'); 
    setTimeout(()=> document.getElementById(userChoice).classList.remove('badChoice'),300);
}
function draw(userChoice, computerChoice) {
    result.innerHTML = `It's a draw. Pick again`;
     document.getElementById(userChoice).classList.add('drawChoice'); 
    setTimeout(()=> document.getElementById(userChoice).classList.remove('drawChoice'),300);
}

function game(userChoice) {

    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice,computerChoice);
        showPicking(userChoice,computerChoice);
        break;
        case "sr":
        case "rp":
        case "ps":
        lose(userChoice,computerChoice);
        showPicking(userChoice,computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice,computerChoice);
        showPicking(userChoice,computerChoice);
        break;
    }
    
    

}

function main() {

    getRock.addEventListener('click', () => {
       game("r");
            })

    getPaper.addEventListener('click', () => {

       game("p");
       })

    getScissors.addEventListener('click', () => {

       game("s");
       })
}

main();
