const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page5btn = document.querySelector("#page5btn");
const closebtn = document.querySelector("#closebtn");
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
scor = 0;
const quizscore = document.querySelector("#score");
submitbtn.addEventListener("click", function () {
    quizscore.classList.remove("noshow");
    scor = 0;
    checkans(1, "a1");
    checkans(2, "a3");
    score.innerHTML = "Score: "+scor;
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
    cssSel = "input[name='q" + qno + "']:checked";
    qtemp = document.querySelector(cssSel).value;
    console.log(qtemp);
    if (qtemp == corrans) scor++;
}
