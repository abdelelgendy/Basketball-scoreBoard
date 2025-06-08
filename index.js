// 1) Grab the two score‐display elements:
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

// 2) Grab each button by its correct ID:
const homeAddOne   = document.getElementById("home-btn-add1");
const homeAddTwo   = document.getElementById("home-btn-add2");
const homeAddThree = document.getElementById("home-btn-add3");

const guestAddOne   = document.getElementById("guest-btn-add1");
const guestAddTwo   = document.getElementById("guest-btn-add2");
const guestAddThree = document.getElementById("guest-btn-add3");




function homeIncreaseOne(){
    homeScoreEl.innerText =+ homeScoreEl.innerText +1
}

function homeIncreaseTwo(){
    homeScoreEl.innerText =+ homeScoreEl.innerText +2
}

function homeIncreaseThree(){
    homeScoreEl.innerText =+ homeScoreEl.innerText +3    
}



function guestIncreaseOne(){
       guestScoreEl.innerText =+ guestScoreEl.innerText +1 
}

function guestIncreaseTwo(){
       guestScoreEl.innerText =+ guestScoreEl.innerText +2    
}

function guestIncreaseThree(){
       guestScoreEl.innerText =+ guestScoreEl.innerText +3    
}

function resetHome() {
  homeScoreEl.innerText = 0;
}

function resetGuest() {
  guestScoreEl.innerText = 0;
}

function resetBoth() {
  homeScoreEl.innerText  = 0;
  guestScoreEl.innerText = 0;
}


