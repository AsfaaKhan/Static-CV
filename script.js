// HIDE SKILLS
var hide_show_btn = document.getElementById("skills");
var display = true;
function hide_Show() {
    if (display == false) {
        hide_show_btn.style.display = "block";
        display = true;
    }
    else {
        hide_show_btn.style.display = "none";
        display = false;
    }
}
// HIDE REFERENCE
var hide_show_btn1 = document.getElementById("ref");
function hide_Show1() {
    if (display == false) {
        hide_show_btn1.style.display = "block";
        display = true;
    }
    else {
        hide_show_btn1.style.display = "none";
        display = false;
    }
}
// HIDE EDUCATION
var hide_show_btn2 = document.getElementById("education");
function hide_Show2() {
    if (display == false) {
        hide_show_btn2.style.display = "block";
        display = true;
    }
    else {
        hide_show_btn2.style.display = "none";
        display = false;
    }
}
// HIDE CERTOFICATE
var hide_show_btn3 = document.getElementById("certification");
function hide_Show3() {
    if (display == false) {
        hide_show_btn3.style.display = "block";
        display = true;
    }
    else {
        hide_show_btn3.style.display = "none";
        display = false;
    }
}
// HIDE EXPERIENCE
var hide_show_btn4 = document.getElementById("exp");
function hide_Show4() {
    if (display == false) {
        hide_show_btn4.style.display = "block";
        display = true;
    }
    else {
        hide_show_btn4.style.display = "none";
        display = false;
    }
}
// HIDE AWARDS
var hide_show_btn5 = document.getElementById("award");
function hide_Show5() {
    if (display == false) {
        hide_show_btn5.style.display = "block";
        display = true;
    }
    else {
        hide_show_btn5.style.display = "none";
        display = false;
    }
}
// HIDE INTEREST
var hide_show_btn6 = document.getElementById("interest");
function hide_Show6() {
    if (display == false) {
        hide_show_btn6.style.display = "block";
        display = true;
    }
    else {
        hide_show_btn6.style.display = "none";
        display = false;
    }
}
function printCV() {
    window.print();
}
