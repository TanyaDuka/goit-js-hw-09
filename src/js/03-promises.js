import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const values = {
    amount: Number(event.currentTarget.elements.amount.value),
    position: Number(event.currentTarget.elements.step.value),
    delay: Number(event.currentTarget.elements.delay.value),
  };
  
  if (values.amount <= 0) {
    Notify.info("Enter plus amount");
    return;
  }
  

  repeat(values);
  
  form.reset();
  
}

function repeat({ amount, position, delay }) {
  
  for (let i = 0; i <= amount; i += 1){
    createPromise(position, delay)
    .then(({ position, delay }) => {
    Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += position;  
    
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position: position, delay: delay });
      } else {
        reject({ position: position, delay: delay });
      }
    }, delay);
  });
}

