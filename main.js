// Initialize Variables
let steve = document.getElementById("steveBtn");
let alex = document.getElementById("alexBtn");

let fish1 = document.getElementById("fish1");
let fish5 = document.getElementById("fish5");
let fish200 = document.getElementById("fish200");

let fishResult = document.getElementById("fishingResult");

let outElements = Array.from(document.getElementsByClassName("fishNum"));

let imgArray = Array.from({length:4}, () => new Image());
imgArray[0].src = "./img/Raw_Cod.png";
imgArray[1].src = "./img/Raw_Salmon.png";
imgArray[2].src = "./img/Tropical_Fish.png";
imgArray[3].src = "./img/Pufferfish.png";

let character = "steve"

// Add listeners
steve.addEventListener('click', setCharacter);
alex.addEventListener('click', setCharacter);

fish1.addEventListener('click', fishOnce)

// Functions

function setCharacter(event) {
    if(event.srcElement.classList.contains("selected")) return;

    getOppositeCharacter(character).classList.add("selected");
    character = event.srcElement.alt;
    getOppositeCharacter(character).classList.remove("selected");
}

function getOppositeCharacter (string) {
    return string==="steve" ? alex : steve;
}

async function fishOnce() {
    let num;
    if(character==="steve") {
        num = Math.floor(Math.random()*2**2);
    } else {
        num = Math.floor(Math.random()*4);
    }
    console.log(num);
    outElements[num].innerHTML += 1;
    fishResult = imgArray[num];
}