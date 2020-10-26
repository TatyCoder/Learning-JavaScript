const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  // getPosition()
  //   .then(posData => {
  //     positionData = posData;
  //     return setTimer(2000);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     return 'on we go...';
  //   })
  //   .then(data => {
  //     console.log(data, positionData);
  //   });
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// New, using Promise constructor function:

/* The race method takes an array of promises, or functions that yield promises and then 
race() itself also returns a promise with the result of the fastest promise I pass to it:
*/
// Promise.race([getPosition(), setTimer(1000)]).then(data => {
//   console.log(data);
// });  
// Logs 'Done!' because setTimer() executes faster. The other promise result is just ignored.

/* With Promise.all I'll get a promise as a result but the data of that promise will be the 
combined data (an array) of all the promises, in the order that I passed it to Promise.all:
*/

// Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
//   console.log(promiseData);
// });
// Logs [Position, "Done!"].

/* I use Promise.allSettled if I want to wait for all promises resolved or all rejected. I'll 
get an array of the data, with objects that describe what the promise did (status and values):
*/
Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData);
});
// Logs (2) [{…}, {…}].

/* Notes: with Promise.all, if one of the promises is rejected (fails), then the other 
promise is not executed and I just get an error (which I could handle with a catch block).
So it's all resolved or at least one rejected.
With Promise.allSettled, it does not cancel the execution of other promises if one of them 
is rejected, instead it still completes or looks at all of them and then gives me a detailed 
summary of which promise failed and which promise succeeded.
*/