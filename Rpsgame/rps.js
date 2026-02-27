let playerScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#player-score");
const compScore=document.querySelector("#computer-score");
const compChoice=()=>{
    const ops=["rock","paper","scissors"];
    const ranId=Math.floor(Math.random()*3);
    return ops[ranId];
};
const draw=()=>{
    console.log("It was a draw");
    msg.innerText="It was a draw";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin)=>{
    if(userWin===true){
        playerScore++;
        userScore.innerText=playerScore;
        console.log("You win!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        compScore.innerText=computerScore;
        console.log("You lose!");
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    console.log("User chose: ",userChoice);
    const comp_choice=compChoice();
    console.log("Computer chose: ",comp_choice);
    if(userChoice===comp_choice)
        draw();
    else{
        let userWin=true;
        if(userChoice==="rock")
            userWin=comp_choice==="paper"?false:true;
        else if(userChoice==="paper")
            userWin=comp_choice==="scissors"?false:true;
        else
            userWin=comp_choice==="rock"?false:true;
        showWinner(userWin);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});