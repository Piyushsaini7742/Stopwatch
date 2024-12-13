const timerDisplay = document.querySelector('.timer');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function formatTime(ms) {
    const milliseconds = Math.floor((ms % 1000) / 10).toString().padStart(2, '0');
    const seconds = Math.floor((ms / 1000) % 60).toString().padStart(2, '0');
    const minutes = Math.floor((ms / (1000 * 60)) % 60).toString().padStart(2, '0');
    const hours = Math.floor(ms / (1000 * 60 * 60)).toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function startTimer() {
    if (timerInterval) return;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerDisplay.textContent = formatTime(elapsedTime);
    }, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    timerDisplay.textContent = '00:00:00.00';
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);