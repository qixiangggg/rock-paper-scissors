//write function body for getComputerChoice
function getComputerChoice(){
    //create variable for storing random number
    let randomNumber = Math.floor(Math.random() * 3);
    //create return variable
    let ret;
    switch(randomNumber){
        // if random number equal 2, then it is rock
        case 2:
            ret = "Rock";
            break;
        // if random number equal 1, then it is paper
        case 1:
            ret = "Paper";
            break;
        // if random number equal 0, then it is scissors
        case 0:
            ret = "Scissors"
            break;
    }
    return ret;
}

//write function body getHumanChoice
function getHumanChoice(){
    // initialize the variable for storing the user input
    let humanChoice;

    // set the user input to the variable
    humanChoice = prompt("Please select Rock, Paper or Scissors");

    //return the choice selected by human player
    return humanChoice;
}

// create two new variables of players score variables and initialize the values with 0
let humanScore = 0;
let computerScore = 0;

//write function body playRound with two parameters
function playRound(humanChoice, computerChoice){
    // set the value from getHumanChoice first letter uppercase and the rest lowercase
    humanChoice = humanChoice.toLowerCase();
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

    if ((humanChoice === "Rock" && computerChoice === "Scissors") || 
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanChoice++;
        }
    else if (humanChoice === computerChoice){
        console.log("Draw!");
    }
    else{
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }
}

playRound(getHumanChoice(),getComputerChoice());