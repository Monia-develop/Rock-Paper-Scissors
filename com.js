function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber ===1 ){
        return "rock";
    }else if(randomNumber === 2){
        return "paper";
    }else if (randomNumber=== 3){
        return "scissors";
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound( humanchoice, computerchoice){
    humanScore;
    computerScore;
    const human = humanchoice.toLowerCase();
    resultdisplay(`human: ${human} vs computer : ${computerchoice}`);
    if(human === computerchoice){
        resultdisplay("it's a tie!");

    }else if(human ==="paper" && computerchoice === "rock"){
        humanScore++;
        resultdisplay("congrats you won! paper beats rock");
        
    }else if (human ==="rock" && computerchoice === "paper"){
        computerScore++;
        resultdisplay("Oh you lost! paper beats rock");

    }else if (human === "paper" && computerchoice === "scissors"){
        computerScore++;
        resultdisplay("Oh you lost! scissors beats paper") ;

    }else if (human ==="rock" && computerchoice === "scissors"){
        humanScore++;
        resultdisplay("you won! rock beats scissors" );

    }else if (human ==="scissors" && computerchoice === "paper"){
        humanScore++;
        resultdisplay("you won! scissors beats paper");

    }else if (human ==="scissors" && computerchoice === "rock"){
        computerScore++;
        resultdisplay("Oh you lost! rock beats scissors");
    }
    scoredisplay();
    GameOver();
}

const rock = document.querySelector('#rock');

rock.addEventListener('click', () => {
    const computerchoice = getComputerChoice();
    const result = playRound("rock",computerchoice);
    console.log(result);
})

const paper = document.querySelector('#paper');

paper.addEventListener('click', () => {
    const computerchoice = getComputerChoice();
    const result = playRound("paper", computerchoice);
    console.log(result);
})

const scissors = document.querySelector('#scissors');


scissors.addEventListener('click', () => {
    const computerchoice = getComputerChoice();
    const result = playRound("scissors", computerchoice);
    console.log(result);
})

// Everything below is useful for the function playRound
const resultDIV = document.querySelector('#result');
resultDIV.setAttribute("style", "color: yellow");
const scoreDIV = document.querySelector('#score');
scoreDIV.setAttribute("style", "color: yellow");


function resultdisplay(message){
resultDIV.textContent='';
const p = document.createElement('p');
p.textContent = message;
p.setAttribute("style", "border : 2px solid black");
resultDIV.appendChild(p);
}

function scoredisplay(){
    scoreDIV.textContent = `Human score : ${humanScore} vs Computer score : ${computerScore}`;
}

function GameOver(){
    if(humanScore === 5 || computerScore === 5){
        scissors.disabled = true;
        paper.disabled = true;
        rock.disabled = true;
        if(humanScore> computerScore){
             resultdisplay('you won !');
        }else{
            resultdisplay('Computer won :( ');
        }
    }
}
const reset = document.querySelector('#reset')
reset.addEventListener('click', resetGame)
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    
    // better to use textcontent that innerHTML to avoid cross-site scripting attack.
    resultDIV.textContent = '';
    
    scoredisplay();
    
    resultdisplay("New game started! Choose your move.");
}
