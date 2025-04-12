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

function getHumanChoice(){
    let humanchoice = prompt("what is the user choice ?").toLowerCase();
    if(humanchoice === "scissors"){
        return "scissors";
    }else if(humanchoice === "rock"){
        return "rock";
}else if(humanchoice === "paper"){
    return "paper";
}
}

let humanScore = 0;
let computerScore = 0;

function playRound( humanchoice, computerchoice){
    humanScore;
    computerScore;
    const human = humanchoice.toLowerCase();
    console.log(`human: ${human} vs computer : ${computerchoice}`);
    if(human === computerchoice){
        return "it's a tie!";

    }else if(human ==="paper" && computerchoice === "rock"){
        humanScore++;
        console.log(`human score: ${humanScore} vs computer score: ${computerScore}`);
        return "congrats you won! paper beats rock";
        
    }else if (human ==="rock" && computerchoice === "paper"){
        computerScore++;
        console.log(`human score: ${humanScore} vs computer score: ${computerScore}`);
        return "Oh you lost! paper beats rock";

    }else if (human === "paper" && computerchoice === "scissors"){
        computerScore++;
        console.log(`human score: ${humanScore} vs computer score: ${computerScore}`);
        return "Oh you lost! scissors beats paper" ;

    }else if (human ==="rock" && computerchoice === "scissors"){
        humanScore++;
        console.log(`human score: ${humanScore} vs computer score: ${computerScore}`);
        return"you won! rock beats scissors" ;

    }else if (human ==="scissors" && computerchoice === "paper"){
        humanScore++;
        console.log(`human score: ${humanScore} vs computer score: ${computerScore}`);
        return "you won! scissors beats paper";

    }else if (human ==="scissors" && computerchoice === "rock"){
        computerScore++;
        console.log(`human score: ${humanScore} vs computer score: ${computerScore}`);
        return "Oh you lost! rock beats scissors";
    }
}

function playGame(){
    humanScore=0;
    computerScore=0;

    for(let i=1; i<=5;i++){
        const humanselection = getHumanChoice();
        const computerselection = getComputerChoice();
        console.log(playRound(humanselection, computerselection));
}
    if(humanScore>computerScore){
        console.log("congrats you won the game!");
    }else if(computerScore > humanScore){
        console.log("too bad you lost the game!");
    }else{
    console.log("it's a tie!");
}
}
console.log(playGame());


`//creating a function to get rock,paper,scissors randomly 
//creation another function to get the human choice this time
//variable to make the human choice is case sensitive
//necessary to get the outcome with the score
//loop to get five round of rock paper scissors
//1. using the math.floor() method to get a random number and get rock,paper or scissors
//2. The prompt asks the user for a choice
//3. The Lowercase method is there to make sure the human could write one the choices as he wishes 
// 4. incrementation of the score and making sure that we see what the human and computer played 
// 5.at the end the user will finally know if he won or lost`