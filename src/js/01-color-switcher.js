
import { getRandomHexColor } from '../helper/getRandomHexColor.js'

const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let idInterval = 0;

btnStop.disabled = true;
console.log(btnStart);
console.log(btnStop);
console.log(body);

btnStart.addEventListener('click', onClickBtnStart);
btnStop.addEventListener('click', onClickBtnStop);

function onClickBtnStart() {
    idInterval = setInterval(changeColorBody, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
}

function changeColorBody() {
    body.style.backgroundColor = getRandomHexColor();
}

function onClickBtnStop() {
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(idInterval);

}