// HIDE SKILLS
let hide_show_btn :any = document.getElementById("skills" );

let display = true;

function hide_Show(){
    if(display == false){
        hide_show_btn.style.display = "block";
        display = true;

    }
    else{
        hide_show_btn.style.display = "none";
        display = false
    }
}


// HIDE REFERENCE
let hide_show_btn1 :any = document.getElementById("ref");


function hide_Show1(){
    if(display == false){
        hide_show_btn1.style.display = "block";
        display = true;

    }
    else{
        hide_show_btn1.style.display = "none";
        display = false
    }
}

// HIDE EDUCATION
let hide_show_btn2 :any = document.getElementById("education");


function hide_Show2(){
    if(display == false){
        hide_show_btn2.style.display = "block";
        display = true;

    }
    else{
        hide_show_btn2.style.display = "none";
        display = false
    }
}

// HIDE CERTOFICATE
let hide_show_btn3 :any = document.getElementById("certification" );

function hide_Show3(){
    if(display == false){
        hide_show_btn3.style.display = "block";
        display = true;

    }
    else{
        hide_show_btn3.style.display = "none";
        display = false
    }
}

// HIDE EXPERIENCE
let hide_show_btn4 :any = document.getElementById("exp" );


function hide_Show4(){
    if(display == false){
        hide_show_btn4.style.display = "block";
        display = true;

    }
    else{
        hide_show_btn4.style.display = "none";
        display = false
    }
}

// HIDE AWARDS
let hide_show_btn5 :any = document.getElementById("award" );


function hide_Show5(){
    if(display == false){
        hide_show_btn5.style.display = "block";
        display = true;

    }
    else{
        hide_show_btn5.style.display = "none";
        display = false
    }
}

// HIDE INTEREST
let hide_show_btn6 :any = document.getElementById("interest" );


function hide_Show6(){
    if(display == false){
        hide_show_btn6.style.display = "block";
        display = true;

    }
    else{
        hide_show_btn6.style.display = "none";
        display = false
    }
}

function printCV(){
    window.print();
}
