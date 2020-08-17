// VARIABLES

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let display1 = document.getElementById("display1");
let display2 = document.getElementById("display2");
let maxScore = document.getElementById("max-score");
let maxInput = document.getElementById("max-number");
let resetButton = document.getElementById("reset-button");
let winner = document.getElementsByClassName("winner");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;
let restart = 0;


// EVENT LISTENERS

p1.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
           display1.classList.add("winner");
           gameOver = true;
        }
        display1.textContent = p1Score; 
    }
});

p2.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            display2.classList.add("winner");
            gameOver = true;
        }
        display2.textContent = p2Score;
    }  
});

resetButton.addEventListener("click", function(){
    reset();
});

maxInput.addEventListener("change", function(){
    maxScore.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

// FUNCTIONS



function reset(){
    p1Score = 0;
    p2Score = 0;
    display1.textContent = restart;
    display2.textContent = restart;
    display1.classList.remove("winner");
    display2.classList.remove("winner");
    gameOver = false;
};

