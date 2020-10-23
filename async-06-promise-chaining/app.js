const button = document.querySelector('button');
const output = document.querySelector('p');

// New function, a promisified version of getCurrentPosition:
const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {},  // Setting this later.
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

// Changed, applying 'promise chaining' (multiple steps in a promise):
function trackUserHandler() {
  // If I need the position data, I could store it in a variable outside of the chain:
  let positionData;
  getPosition()  // Calling the new function here.
    .then(posData => {  // Here I get the 'success' data which is the position data.
      positionData = posData;
      return setTimer(2000);  // I can return this inside of this function.
      // The overall promise is now set back from being resolved to being pending.
    })
    .then(data => {  // I can now add a new then() block after the first one.
      // Here I get the data of this inner promise which is the timer data.
      console.log(data, positionData); 
    });
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

/* Notes: a promise can be pending or be resolved or have an error (failed).
Promise chaining: I wait for a promise to finish, to resolve, and then I make it 
into the next then() block and execute that with the data of the returned promise.
*/