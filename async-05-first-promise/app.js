const button = document.querySelector('button');
const output = document.querySelector('p');

/* New, working with promises. Promise is the constructor function or the class built 
into Javascript and therefore I can construct it like shown below. The function takes 
two arguments and each argument itself actually is a function: resolve & reject. In  
the function body, it executes right away when the promise is created:
*/
const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {  // A callback. The browser executes this function.
      resolve('Done!');
    }, duration);
  });
  return promise;  // This is the return value of setTimer (setTimer returns a promise).
};

// Changed, replacing setTimeout with setTimer and adding .then() method:
function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      // I can call .then() and it will basically execute whenever this promise resolves:
      setTimer(2000).then(data => {   
        console.log(data, posData);
      });
    },
    error => {
      console.log(error);
    }
  );
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);
