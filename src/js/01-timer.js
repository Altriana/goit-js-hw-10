import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const input = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("[data-start]");
const spanDays = document.querySelector("[data-days]");
const spanHours = document.querySelector("[data-hours]");
const spanMinutes = document.querySelector("[data-minutes]");
const spanSeconds = document.querySelector("[data-seconds]");


btnStart.disabled = true;
let userSelectedDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if (selectedDate < new Date()) {
            iziToast.warning({
                position: 'topRight',
                backgroundColor: 'red',
                messageColor: '#fff',
                iconColor: '#fff',
                message: 'Please choose a date in the future',
            });
            btnStart.disabled = true;
        } else {
            btnStart.disabled = false;
            userSelectedDate = selectedDate;
        };
    },
};

flatpickr(input, options);  


function addingZero(value) {
    return String(value).padStart(2, '0');
}

function updateTime({ days, hours, minutes, seconds }) {
    spanDays.textContent = addingZero(days);
    spanHours.textContent = addingZero(hours);
    spanMinutes.textContent = addingZero(minutes);
    spanSeconds.textContent = addingZero(seconds);
}


btnStart.addEventListener('click', () => {
    let remainingTime;
    const stopwatch = setInterval(() => {
        const currentTime = new Date();
        remainingTime = userSelectedDate - currentTime;
        
        if (remainingTime <= 0) {
            clearInterval(stopwatch);
            iziToast.success({
                position: 'topRight',
                backgroundColor: '#59A10D',
                messageColor: 'white',
                message: 'Countdown finished!',
            });
            return;
        };
        const time = convertMs(remainingTime);
        updateTime(time);
    },1_000)
});


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