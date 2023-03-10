import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let time;
let timer;
let dateNow;
let selectedDates;
const dateInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled', '');

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const today = new Date();
    selectedDates = selectedDates[0];
    dateNow = Date.now();
    if (selectedDates < today) {
      // window.alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');

      startBtn.setAttribute('Active', '');

      startBtn.addEventListener('click', function () {
        startBtn.setAttribute('disabled', '');
        timer = setInterval(counter, 1000);
      });

      function counter() {
        dateNow = Date.now();
        countDown(selectedDates, dateNow);
      }
    }
  },
});

function countDown(selectedDates, dateNow) {
  time = convertMs(selectedDates - dateNow);
  if (
    time.days >= 0 &&
    time.hours >= 0 &&
    time.minutes >= 0 &&
    time.seconds >= 0
  ) {
    daysEl.innerHTML = addLeadingZero(time.days);
    hoursEl.innerHTML = addLeadingZero(time.hours);
    minutesEl.innerHTML = addLeadingZero(time.minutes);
    secondsEl.innerHTML = addLeadingZero(time.seconds);
  } else {
    clearInterval(timer);
  }
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
