import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const delay = event.target.delay.value;
    const state = event.target.state.value;
    
    const createPromise = ((delay, state) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (state === 'fulfilled') {
                    resolve(delay);
                } else {
                    reject(delay);
                }
            }, delay);
        });
    });

    createPromise(delay, state)
        .then((delay) => {
        console.log(delay);
        
        iziToast.success({
            message: `✅ Fulfilled promise in ${delay}ms`,
        });
    })
    .catch(delay => {
        iziToast.error({
            message: `❌ Rejected promise in ${delay}ms`,
        });
    });
});