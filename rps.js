var humanScore=0, computerScore=0;

function getComputerChoice(){
    /*
     * 0: rock
     * 1: paper
     * 2: scissor
     */
    var result= Math.trunc(Math.random()*3);
    console.log("computer choice is"+result);
    return result;
}

function getHumanChoice(){
    let choice=prompt("Your choice").toUpperCase().trim();
    console.log(choice+": "+typeof(choice));

    switch(choice){
        case "ROCK":
            choice=0;
            break;
        case "PAPER": 
            choice=1;
            break;
        case "SCISSORS":
                choice=2;
                break;
        default:
                choice=-1;
                alert("invalid option");
                break;
    }
    return choice;
}


function playRound(humanChoice, computerChoice){
    if(humanChoice<0 || humanChoice>2){
        return -1;
    }
    var result=humanChoice-computerChoice;
    if(result == 0){
        console.log("DRAW");
        return 0;
    }
    if(result==1){
        console.log("You Win");
        humanScore++;
        return 0;
    }
    console.log("You lose!")
    computerScore++;
    return 0;
}

function playGame(){
    for(var i=0; i<5; i++){
        i+=playRound(getHumanChoice(),getComputerChoice());
    }
}

playGame();
console.log("Final score\nHuman: "+humanScore+"Computer: "+computerScore
    
)
