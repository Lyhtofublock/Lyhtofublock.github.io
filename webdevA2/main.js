//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page5btn = document.querySelector("#page5btn");
const page6btn = document.querySelector("#page6btn");
const closebtn = document.querySelector("#closebtn");
const submitbtn = document.querySelector("#submitbtn");
const score = document.querySelector("#score");
const gamescore = document.querySelector("#gamescore");
const chili = document.querySelector("#chili");
const startbtn = document.querySelector("#startbtn");
const speedupbtn = document.querySelector("#speedupbtn");
var allpages = document.querySelectorAll(".page");
//select all subtopic pages
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}
function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "block"; //show the page
    quizscore.classList.add("noshow");
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
page4btn.addEventListener("click", function () {
    show(4);
});
page5btn.addEventListener("click", function () {
    show(5);
});
page6btn.addEventListener("click", function () {
    show(6);

});
closebtn.addEventListener("click", function () {
    hideall();
});
hideall();
var scor = 0;
const quizscore = document.querySelector("#score");
submitbtn.addEventListener("click", function () {
    //unhide the score after submit is pressed
    quizscore.classList.remove("noshow");
    scor = 0;
    checkans(1, "a1");
    checkans(2, "a3");
    score.innerHTML = "Correct answers: " + scor;
});

const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector("nav ul");
hamBtn.addEventListener("click", toggleMenus);
function toggleMenus() { /*open and close menu*/
    //if menuItemsList dont have the class "menuShow", add it, else remove it
    menuItemsList.classList.toggle("menuShow");
    //if menu is showing (has the class “menuShow”)
    if (menuItemsList.classList.contains("menuShow")) {
        hamBtn.innerHTML = "Close Menu"; //change button text to chose menu
    } else { //if menu NOT showing
        hamBtn.innerHTML = "Open Menu"; //change button text open menu
    }
}
const btnFS = document.querySelector("#btnFS");
const btnWS = document.querySelector("#btnWS");
btnFS.addEventListener("click", enterFullscreen);
btnWS.addEventListener("click", exitFullscreen);
function enterFullscreen() { //must be called by user generated event
    document.documentElement.requestFullscreen();
}
function exitFullscreen() {
    document.exitFullscreen();
}

function checkans(qno, corrans) {
    var cssSel = "input[name='q" + qno + "']:checked";
    var qtemp = document.querySelector(cssSel).value;
    console.log(qtemp);
    if (qtemp == corrans) scor++;
}


var scoreval = 0;

function GetRandom(min, max) {
    //this will select a number between min and max
    return Math.round(Math.random() * (max - min)) + min;
}
function Movechili() {
    chili.style.left = GetRandom(-110, 110) + "px";
    chili.style.top = GetRandom(-10, 210) + "px";
}
var chiligo;
startbtn.addEventListener("click", function () {
    music.pause();
    intensemusic.pause();
    music.currentTime = 0;
    music.play();
    music.loop = true;
    scoreval = 0;
    gamescore.innerHTML = "Score: 0";
    gamescore.style.opacity = 1;
    clearInterval(chiligo);
    chiligo = setInterval(Movechili, 500);
});

const stopbtn = document.querySelector("#stopbtn");
stopbtn.addEventListener("click", function () {
    music.pause();
    intensemusic.pause();
    gamescore.style.opacity = 0;
    clearInterval(chiligo);
    chili.style.left = "0px";
    chili.style.top = "100px";
});

speedupbtn.addEventListener("click", function () {
    intensemusic.pause();
    music.pause();
    intensemusic.currentTime = 0;
    intensemusic.play();
    intensemusic.loop = true;
    scoreval = 0;
    gamescore.innerHTML = "Score: 0";
    gamescore.style.opacity = 1;
    clearInterval(chiligo);
    chiligo = setInterval(Movechili, 10);
});

scoreval = 0;


chili.addEventListener("click", function () {
    chilihit();
    hitsound.volume = 0.3;
    //when chili is pressed before sound finished playing, then another sound will play
    hitsound.load();
    hitsound.play();
});

function chilihit() {
    //increases score after clicking
    scoreval++;
    //update html scorebox
    gamescore.innerHTML = "Score: " + scoreval;
}
const music = new Audio("audio/Loonboon.mp3");
const intensemusic = new Audio("audio/Black Knife.mp3");
const hitsound = new Audio("audio/deltarune-explosion.mp3");
