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
    homeScoreEl.innerText = parseInt(homeScoreEl.innerText) + 1;
    highlightLeader();
}

function homeIncreaseTwo(){
    homeScoreEl.innerText = parseInt(homeScoreEl.innerText) + 2;
    highlightLeader();
}

function homeIncreaseThree(){
    homeScoreEl.innerText = parseInt(homeScoreEl.innerText) + 3;
    highlightLeader();
}



function guestIncreaseOne(){
    guestScoreEl.innerText = parseInt(guestScoreEl.innerText) + 1;
    highlightLeader();
}

function guestIncreaseTwo(){
    guestScoreEl.innerText = parseInt(guestScoreEl.innerText) + 2;
    highlightLeader();
}

function guestIncreaseThree(){
    guestScoreEl.innerText = parseInt(guestScoreEl.innerText) + 3;
    highlightLeader();
}

function resetHome() {
    homeScoreEl.innerText = 0;
    highlightLeader();
}

function resetGuest() {
    guestScoreEl.innerText = 0;
    highlightLeader();
}

function resetBoth() {
    homeScoreEl.innerText  = 0;
    guestScoreEl.innerText = 0;
    highlightLeader();
}

function highlightLeader() {
    const home = parseInt(homeScoreEl.innerText);
    const guest = parseInt(guestScoreEl.innerText);

    // Reset to default styles
    homeScoreEl.style.backgroundColor = "#111111";
    guestScoreEl.style.backgroundColor = "#111111";
    homeScoreEl.style.color = "#FF4136";
    guestScoreEl.style.color = "#FF4136";
    homeScoreEl.style.textShadow = `
        0 0 6px rgba(255, 65, 54, 0.7),
        0 0 12px rgba(255, 65, 54, 0.5)
    `;
    guestScoreEl.style.textShadow = `
        0 0 6px rgba(255, 65, 54, 0.7),
        0 0 12px rgba(255, 65, 54, 0.5)
    `;

    // Highlight the leading team's number
    if (home > guest) {
        homeScoreEl.style.color = "#FFD700"; // gold
        homeScoreEl.style.textShadow = "0 0 12px #FFD700, 0 0 24px #FFD700";
    } else if (guest > home) {
        guestScoreEl.style.color = "#FFD700";
        guestScoreEl.style.textShadow = "0 0 12px #FFD700, 0 0 24px #FFD700";
    }
}

// Call once on load
highlightLeader();


