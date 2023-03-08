function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timer;
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
stopBtn.setAttribute('disabled', '');

function changeBgColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

startBtn.addEventListener('click', () => {
    startBtn.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled');
    timer = setInterval(changeBgColor, 1000);
});

stopBtn.addEventListener('click', () => {
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', '');
    clearInterval(timer);
});