let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["red", "yellow", "green", "purple"];

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started..!");     //  Extra 
        started == true;   

        levelUp()
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 100);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 100);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // Random btn Choose
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log("Game sequenec :- ", gameSeq);      //  Extra
    gameFlash(randBtn);
}

let hiScr = 0;
function checkAns(idx){
    console.log(`Current level is ${level}.`);      //     Extra
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        if(hiScr < level){
            hiScr = level;
        }
        h2.innerHTML = `Game Over! Hi Score is <b>${hiScr}<b> Your score was <b>${level}<b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    console.log(this);  //  Extra
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);     // Extra
    userSeq.push(userColor);
    console.log("User sequenec :- ", userSeq);     // Extra

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}