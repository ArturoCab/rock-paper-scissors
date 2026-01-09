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

function endGame(){
    buttons.forEach(element=>{
        element.disabled=true;
    })
}

function addResult(result){
    /*PSEUDO CODE
    si el h1 de resultado esta oculto, habilitarlo
    agregar el resultado en lista
    */
   const results_h1=document.querySelectorAll("h1")[1];
   results_h1.hidden=false;
   const r=document.createElement("div");
   r.textContent=(roundsPlayed+1)+": "+result;
   results_h1.appendChild(r);
   roundsPlayed++;
}

function addScore(who, qty){
    switch(who){
        case "human":
            document.querySelectorAll("h3")[0].textContent="Human: "+qty;
            break;
        case "computer":
            document.querySelectorAll("h3")[1].textContent="Computer: "+qty;
            break;
        default:
            alert("Invalid");
    }
    if(qty>=5){
        endGame();
        const winner=document.createElement("div");
        winner.textContent="The Winner is "+who;
        let h1=document.querySelectorAll("h1")[1];

        h1.appendChild(winner);
    }
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
        addResult("DRAW");
        console.log("DRAW");
        return 0;
    }
    if(result==1){
        addResult("WIN");
        console.log("You Win");
        humanScore++;
        addScore("human",humanScore);
        return 0;
    }
    addResult("LOSE");
    console.log("You lose!")
    computerScore++;
    addScore("computer",computerScore);
    
    return 0;
}

