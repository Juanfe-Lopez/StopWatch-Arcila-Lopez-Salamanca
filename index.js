const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
let text=document.getElementById("instructions");

let startTime;
let updateInterval;
let elapsedTime = 0;


function startTimer() {

    startBtn.disabled = true;
    pauseBtn.disabled = false;
    text.innerHTML="Ahora puedes pausarle o reseterle :))";
    startTime = Date.now() - elapsedTime;
    updateInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        let minutes = Math.floor(elapsedTime / 60000);
        let seconds = Math.floor((elapsedTime % 60000) / 1000);
        let milliseconds = elapsedTime % 1000;
        timerDisplay.innerHTML =
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds) +
        ":" +
        (milliseconds < 100 ? "0" + milliseconds : milliseconds);
    }, 10);
}

function pauseTimer() {
    
    startBtn.innerText="Continue";
    text.innerHTML= "Ahora puedes continuarle o reseterle :))";
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    clearInterval(updateInterval);
}

function resetTimer() {
    text.innerHTML="Apucharrele start";
    startBtn.innerText="Start";
    clearInterval(updateInterval);
    elapsedTime = 0;
    timerDisplay.innerHTML = "00:00:00";
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);