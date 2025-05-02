let userScore = 0;
let comScore = 0;

// Select individual choice elements
const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


// Generate computer's choice
const genComcChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawgame=() =>{
    console.log("game was draw");
     msg.innerText="Game Was Draw,Play Again!"
     msg.style.backgroundColor="#081b31";
}

// Game logic placeholder
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const comChoice = genComcChoice();
    console.log("comp choice =", comChoice);
    

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!!");
        msg.innerText=`You Win!! ${userChoice }beats ${comChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comScore++;
        compScorePara.innerText=comScore;
        console.log("you loose");
         msg.innerText=`You Loose  ${comChoice } beats ${userChoice}`;
         msg.style.backgroundColor="red";
    }
}

    if(userChoice===comChoice){
        //draw
        drawgame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=comChoice==="paper"?false:true;

        }else if(userChoice==="paper"){
            userWin=comChoice==="scissors"?false:true;
        }
        else{
            userWin=comChoice==="rock"?false:true;
        }
        showWinner(userWin);

    }
   
};

// Add event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
