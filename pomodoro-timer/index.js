const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500; /* 1500 seconds = 25 minutes */

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    /* padStart makes it to two digits, and if the first digit doesn't exist, make it a 0 */
    /* backticks `, changes the whole string to a variable, so don't use + to concatenate */
    let formattedTime = `${minutes.toString().padStart(2, "0")}  :  ${seconds.toString().padStart(2,"0")}`;


    timerEl.innerHTML = formattedTime;
}

function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            alert("Time's up!");
            clearInterval(interval);
            timeLeft = 1500;
        }
    }, 1000); /* Trigger every 1 second */
}

function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}


startEl.addEventListener("click", startTimer)

stopEl.addEventListener("click", stopTimer);

resetEl.addEventListener("click",resetTimer);