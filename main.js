// tady je místo pro náš program
let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");

nadpis.classList.remove("zluty");

function secti(a,b){
console.log(a+b);
}

//Práce s písmem//

let text = document.querySelector('#odstavec');

function ztucni() {
text.style.fontWeight="bold";

}

function ztenci(){
    text.style.fontWeight="normal";   
}

function zcervenat(){
text.classList.add("cerveny");

}

function pismo(){
   text.style.fontSize="16px";
}

function vetsiPoKliknuti(){
    let id = document.querySelector('#odstavec'); 
    let style = window.getComputedStyle(id, null).getPropertyValue('font-size');
    let currentSize = parseInt(style);
    document.querySelector('#odstavec').style.fontSize = (currentSize + 1) + 'px';
}

// Práce se zvukem//

/**
 * @param {string} elementSelector
 */
let zvuk = document.querySelector("#js-audio");

function prehraj(elementSelector){
let audioElement = document.querySelector(elementSelector);
audioElement.play();
}

function zastav(elementSelector){
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
    }

function tiche(elementSelector){
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0;
        }

function hlasitejsi(elementSelector){
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.5;
            }
function nejhlasitejsi(elementSelector){
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 1;
                }

function pustZnovu(elementSelector){
    let audioElement = document.querySelector(elementSelector);
    audioElement.currentTime = 0;
}