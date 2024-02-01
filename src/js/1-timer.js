import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/izitoast-icon.svg';
import closeIcon from '../img/izitoast-close.svg';

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('[data-start]');
    const daysElement = document.querySelector('[data-days]');
    const hoursElement = document.querySelector('[data-hours]');
    const minutesElement = document.querySelector('[data-minutes]');
    const secondsElement = document.querySelector('[data-seconds]');
    const datePicker = document.getElementById('datetime-picker');

    startButton.addEventListener('click', startCountdown);

    let userSelectedDate;

    flatpickr('#datetime-picker', {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            const selectedDate = selectedDates[0];

            if (selectedDate < new Date()) {
                startButton.disabled = true;
                iziToast.show({
                    title: 'Error',
                    message: 'Please choose a date in the future',
                    class: 'error-message',
                    position: 'topCenter',
                    titleColor: '#ffffff',
                    titleSize: '16px',
                    titleLineHeight: '1.5',
                    messageColor: '#ffffff',
                    messageSize: '16px',
                    messageLineHeight: '1.5',
                    backgroundColor: '#ef4040',
                    icon: '',
                    iconText: '',
                    iconColor: '#ffffff',
                    iconUrl: errorIcon ,
                    image: '',
                    imageWidth: 50,
                    timeout: 10000,
                    close: false,
                    buttons: [
                        [
                        `<button type="button" style="background-color: #EF4040"><img src=${closeIcon}></button>`,
                        function (instance, toast) {
                            instance.hide({ transitionOut: 'fadeOut' }, toast);
                        },
                        ],
                    ],
                    closeOnEscape: true,
                    pauseOnHover: false,
                });

            } else {
                startButton.disabled = false;
                userSelectedDate = selectedDate;
            }
        },
    });

    function updateTimerDisplay(timeRemaining) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        daysElement.textContent = formatTime(days);
        hoursElement.textContent = formatTime(hours);
        minutesElement.textContent = formatTime(minutes);
        secondsElement.textContent = formatTime(seconds);

        if (isNaN(minutes)) {
            minutesElement.textContent = '00';
        } else {
            minutesElement.textContent = formatTime(minutes);
        }
    
        if (isNaN(seconds)) {
            secondsElement.textContent = '00';
        } else {
            secondsElement.textContent = formatTime(seconds);
        }
    }

    function startCountdown() {
        startButton.disabled = true;
        const selectedDate = new Date(datePicker.value);
        const now = new Date();

        const timeRemaining = selectedDate - now;
        updateTimerDisplay(timeRemaining);

        const timerInterval = setInterval(() => {
        const currentTimeRemaining = selectedDate - new Date();
        if (currentTimeRemaining <= 0) {
            clearInterval(timerInterval);
            updateTimerDisplay(0);
        } else {
            updateTimerDisplay(currentTimeRemaining);
        }
    }, 1000);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
});

