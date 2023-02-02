// Initialize Variables
let steve = document.getElementById("steveBtn");
let alex = document.getElementById("alexBtn");

let fish1 = document.getElementById("fish1");
let fish5 = document.getElementById("fish5");
let fish200 = document.getElementById("fish200");

let fishResult = document.getElementById("fishingResult");

let outElements = Array.from(document.getElementsByClassName("fishNum"));

let imgArray = new Array(4);
imgArray[0] = "./img/Raw_Cod.png";
imgArray[1] = "./img/Raw_Salmon.png";
imgArray[2] = "./img/Tropical_Fish.png";
imgArray[3] = "./img/Pufferfish.png";

let fish = [0,0,0,0];

let character = "steve"

// Add listeners
steve.addEventListener('click', setCharacter);
alex.addEventListener('click', setCharacter);

fish1.addEventListener('click', fishOnce);
fish5.addEventListener('click', fishFive);
fish200.addEventListener('click', fishTwoHundred);

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

function fishOnce() {
    let num;
    if(character==="steve") {
        num = Math.floor(Math.random()**2*4);
    } else {
        num = Math.floor(Math.random()*4);
    }
    fish[num]++;
    fishResult.src = imgArray[num];
    outElements[num].innerHTML = fish[num];
}

function fishFive() {
    for(let i = 0; i < 5; i++){
        fishOnce();
    }
}

function fishTwoHundred() {
    let newValue = fish[0]+200;
    while(fish[0] < newValue){
        fishOnce();
    }
}