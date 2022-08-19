// The Variables

let cover1 = document.querySelector(".cover1");
let cover2 = document.querySelector(".cover2");
let cover3 = document.querySelector("cover2");
let play = document.querySelector(".play");

let comscore = 0;
let youscore = 0;
let comScore = document.querySelector("#textcom1");
let youScore = document.querySelector("#textyou1");
let comresult = document.querySelector("#comresult");
let youresult = document.querySelector("#youresult"); 
let result = document.querySelector("#result");
let rock = document.querySelector(".brock");
let papper = document.querySelector(".bpapper");
let scissors = document.querySelector(".bscissors");
let spock = document.querySelector(".bspock");
let lizard = document.querySelector(".blizard");

// The functions

function playthegame() {
    play.addEventListener("click", function() {
        cover2.style.display = "grid";
        cover1.style.display = "none";
     })
}

playthegame();

function computerChoice() {
    let choice = ["rock", "paper", "scissors", "spock", "lizard"];
    let comRandom = Math.floor(Math.random() * 5)
    return choice[comRandom];
    console.log(comRandom);
}
computerChoice();

function won(you, comp) {
    youscore++;
    youScore.textContent = " " + youscore;
    youresult.textContent = " " + you;
    comresult.textContent = " " + comp;
    result.textContent = " " + "YOU WON";
}

function lost(you, comp) {
    comscore++;
    comScore.textContent = " " + comscore;
    youresult.textContent = " " + you;
    comresult.textContent = " " + comp;
    result.textContent = " " + "YOU LOST";
}

function draw(you, comp) {
    youresult.textContent = " " + you;
    comresult.textContent = " " + comp;
    result.textContent = " " + "IT'S A TIE";
}

function game(youChoice) {
    let compChoice = computerChoice();
    switch (youChoice + compChoice) {
        case "rockscissors":
        case "rockspock":
        case "rocklizard":
        case "paperrock":
        case "scissorspaper":
        case "scissorsspock":
        case "scissorslizard":
        case "spockpaper":
        case "spocklizard":
        case "lizardpaper":
            won(youChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "paperspock":
        case "paperlizard":
        case "scissorsrock":
        case "spockrock":
        case "spockscissors":
        case "lizardrock":
        case "lizardscissors":
        case "lizardspock":
            lost(youChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "spockspock":
        case "lizardlizard":
            draw(youChoice, compChoice);
            break;
    }
}

function theGame () {
    rock.addEventListener("click", function() {
        game("rock")
    })

    papper.addEventListener("click", function() {
        game("paper")
    })

    scissors.addEventListener("click", function() {
        game("scissors")
    })

    spock.addEventListener("click", function() {
        game("spock")
    })

    lizard.addEventListener("click", function() {
        game("lizard")
    })
}

theGame();
