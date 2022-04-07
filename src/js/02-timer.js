
import {convertMs } from '../helper/convertMs.js'

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

let dreamDate = 0;

const refs = {
    input: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

refs.btnStart.disabled = true;

refs.btnStart.addEventListener('click', onClickStart);

function onClickStart() {
    const interval = setInterval(() => {

        if (Date.now() <= Date.parse(dreamDate)) {
            render(convertMs(dreamDate - Date.now()));
            refs.btnStart.disabled = true;

  refs.input.disabled =true;
        }else{refs.btnStart.disabled = false;

  refs.input.disabled =false;}
     
    }, 1000);
   
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      onCloseCalendar(selectedDates[0]);
      dreamDate = selectedDates[0];
  },
};

flatpickr(refs.input, options);

function onCloseCalendar(date) {
    if (Date.now() > date) {
        Notify.failure("Please choose a date in the future");
    }
    else {
        refs.btnStart.disabled = false;
        
    }

}


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function render({ days, hours, minutes, seconds }) {
    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
}