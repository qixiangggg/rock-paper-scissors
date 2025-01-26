//write function body for getComputerChoice
function getComputerChoice(){
    //create variable for storing random number
    let randomNumber = Math.floor(Math.random() * 3);
    //create return variable
    let ret;
    switch(randomNumber){
        // if random number equal 2, then it is rock
        case 2:
            ret = "rock";
            break;
        // if random number equal 1, then it is paper
        case 1:
            ret = "paper";
            break;
        // if random number equal 0, then it is scissors
        case 0:
            ret = "scissors"
            break;
    }
    return ret;
}
console.log(getComputerChoice());