var humanScore=0, computerScore=0, roundsPlayed=0;

var buttons=document.querySelectorAll("button");

buttons.forEach(element=>{
    element.addEventListener("click",playRound);
});



function getComputerChoice(){
    /*
     * 0: rock
     * 1: paper
     * 2: scissor
     */
    var result= Math.trunc(Math.random()*3);
    console.log("computer choice is "+result);
    return result;
}

function getHumanChoice(choice){
    /*let choice=prompt("Your choice").toUpperCase().trim();
    console.log(choice+": "+typeof(choice));*/

  /*  for(v in choice){
        console.log(v,choice[v]);
    }*/

    console.log("human choice: "+choice);
    switch(choice.toUpperCase().trim()){
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
                //alert("invalid option");
                break;
    }
    return choice;
}


function playRound(event){
    const boton=event.target;
    //console.log("hiciste click en ", boton);

    let value="";
    //console.log(boton.value);
    for(const v in boton){
        if(v.toString()=="firstChild")
            value=boton[v];
    }
    console.log("linea 60, typeof value:",typeof(value),"valor",value.wholeText);
    
    //choice, computerChoice
    var humanChoice=getHumanChoice(value.wholeText), computerChoice=getComputerChoice();
    

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
    roundsPlayed++;
    return 0;
}

function playGame(){
    /*for(var i=0; i<5; i++){
        i+=playRound(getHumanChoice(),getComputerChoice());
    }*/
}

playGame();
console.log("Final score\nHuman: "+humanScore+"\nComputer: "+computerScore);
