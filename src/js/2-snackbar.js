import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import errorIcon from '../img/izitoast-icon.svg';
import closeIcon from '../img/izitoast-close.svg';
import okIcon from '../img/izitoast-ok.svg';

const form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const delayInput = document.querySelector('input[name="delay"]');
    const stateInputs = document.querySelectorAll('input[name="state"]');
    const selectedState = [...stateInputs].find(input => input.checked);

    if (!delayInput || !selectedState) {
        
        iziToast.show({
            title: 'Error',
            message: 'Please fill the fields',
            class: 'error-message',
            position: 'topCenter',
            titleColor: '#ffffff',
            titleSize: '16px',
            titleLineHeight: '1.5',
            messageColor: '#ffffff',
            messageSize: '16px',
            messageLineHeight: '1.5',
            backgroundColor: '#ef4040',
            iconColor: '#ffffff',
            iconUrl: errorIcon ,
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

        return;
    }

    const delay = parseInt(delayInput.value);

        const promise = new Promise((resolve, reject) => {
            if (selectedState.value === 'fulfilled') {
                setTimeout(() => {
                    resolve(delay);
                }, delay);
            } else {
                reject(delay);
}});

promise.then(
    (delay) => {
        
        iziToast.show({
            title: 'OK',
            message: `✅ Fulfilled promise in ${delay}ms`,
            class: 'success-message',
            position: 'topCenter',
            titleColor: '#ffffff',
            titleSize: '16px',
            titleLineHeight: '1.5',
            messageColor: '#ffffff',
            messageSize: '16px',
            messageLineHeight: '1.5',
            backgroundColor: '#59A10D',
            iconColor: '#ffffff',
            iconUrl: '' ,
            imageWidth: 50,
            timeout: 10000,
            close: false,
            buttons: [
                [
                `<button type="button" style="background-color: #59A10D"><img src=${okIcon}></button>`,
                function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOut' }, toast);
                },
                ],
            ],
            closeOnEscape: true,
            pauseOnHover: false,
        });
    },

    (delay) => {

        iziToast.show({
            title: 'Error',
            message: `❌ Rejected promise in ${delay}ms`,
            class: 'error-message',
            position: 'topCenter',
            titleColor: '#ffffff',
            titleSize: '16px',
            titleLineHeight: '1.5',
            messageColor: '#ffffff',
            messageSize: '16px',
            messageLineHeight: '1.5',
            backgroundColor: '#ef4040',
            iconColor: '#ffffff',
            iconUrl: errorIcon ,
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
    }
);
});
