let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgP = document.querySelector("#msg");
const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");

//Computer Choice Function-----
const genCompChoice = () =>{
    const options  = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    // console.log("Game was Draw!!");
    msgP.innerText = "Game was Draw, Play again!!!!";
    msgP.style.backgroundColor = "rgb(141, 111, 178)";
    msgP.style.color = "black";
}

//Show Winner ----

const showWinner = (userWin) => {
  if(userWin){
    // console.log("You Winn!!!");
    userScore++;
    userScoreP.innerText = userScore;
    msgP.innerText = "You are the Winner!!";
    msgP.style.backgroundColor = "yellow";
    msgP.style.color = "black";
  }
  else{
    // console.log("You Lose!");
    compScore++;
    compScoreP.innerText = compScore;
    msgP.innerText = "You Lose the Game!!";
    msgP.style.backgroundColor = "red";
    msgP.style.color = "black";
  }
}

//Main game play Logic Function----
const playGame = (userChoice) =>{
    // console.log("User Choice =", userChoice);
    const compChoice = genCompChoice();
    // console.log("Computer Choice =", compChoice);

    if(userChoice === compChoice){
        //game draw
         drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor or paper---
            userWin - compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
           //paper, scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
           //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
