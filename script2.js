const firstName = localStorage.getItem('fname');
document.getElementById('You').textContent = firstName;

let userScore = 0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * options.length);
    
    // let string = options[randomChoice];
    // string = "#" + string;
    // console.log(string);
    // document.querySelector(string).style.transform = "scale(1.1)";
    // document.querySelector(string).style.backgroundColor = "red";
    // let string = options[randomChoice];
    // string = "#" + string;
    // let pauseTime = setInterval(() => {
    //     document.querySelector(string).style.transform = "scale(1.1)";
    //     document.querySelector(string).style.backgroundColor = "red";
    // }, 100);
    // setTimeout(function(){
    //     clearInterval(pauseTime);
    // }, 1000);
    return options[randomChoice];
}

const tieGame = (computerChoice) => {
    console.log(`It's a tie! You both chose ${computerChoice}`);
    msg.innerText = `It's a tie! You both chose ${computerChoice}.`
    msg.style.color = "black";
    msg.style.backgroundColor = "white";
}

const declareWinner = (userWin, computerChoice, userChoice) => {
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    if(userWin){
        msg.innerText = `You win:) ${userChoice} beats ${computerChoice}!`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userScore++;
        document.querySelector("#user-score").innerText = userScore;
    }
    else{
        msg.innerText = `Computer win:( ${computerChoice} beats ${userChoice}!`;
        msg.style.backgroundColor = "red";
        computerScore++;
        document.querySelector("#comp-score").innerText = computerScore;
    }
}

const playGame = (userChoice) => {
    console.log(`${userChoice} was clicked`);
    // Generating computer choice
    const computerChoice = genCompChoice();
    console.log(`Computer chose ${computerChoice}`);
    if(userChoice===computerChoice){
        // Tie condition
        tieGame(computerChoice);
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            // computerChoices:-paper, scissors
            userWin = computerChoice==="paper"?false: true;
        }
        else if(userChoice==="paper"){
            // computerChoices:-rock, scissors
            userWin = computerChoice==="rock"?true: false;
        }
        else{
            // computerChoices:-rock, paper
            userWin = computerChoice==="rock"?false: true;
        }
        declareWinner(userWin, computerChoice, userChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

{/* <button id="finish">End Game</button> */}

const finishbtn = document.getElementById("finish");

finishbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.setItem('user-score', userScore);
    localStorage.setItem('computer-score', computerScore);
    const fName = document.getElementById('You').textContent;
    localStorage.setItem('f-name', fName);
    window.location.href = "page2.html";
})
