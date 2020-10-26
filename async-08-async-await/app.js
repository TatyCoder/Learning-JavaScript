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

// Changed, using async-await & try-catch:
async function trackUserHandler() {
  // Working with variables instead of constants here, now available in the entire function:
  let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition(); 
    timerData = await setTimer(2000);
  // If getPosition() fails, setTimer() will not be executed, it will be skipped.  
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData); 
  // This always executes no matter if I made it into try or into catch. It logs undefined 
  // undefined because these two variables never received values when 'Block' location.

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

  // These will execute after the previous code is finished:
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

/* Notes: with 'async' the function automatically returns a promise. I never call 
'return' in this function, only in the nested functions but not in the function itself.
On expressions I enable it by adding the 'async' keyword in front of the function 
keyword; on declarations I add it in front of the function name on the right side 
of the equal sign.
By adding 'async', the entire function wraps all its content into one big promise.
When I added 'async', I can use the 'await' keyword in front of any promise: 'await' 
waits for the promise to resolve or to fail and the next line thereafter will only 
execute once that is the case. 
'await' always moves on to the next line as long as the previous line resolved, but 
what if I have an error? I can use the normal synchronous error handling: try-catch. 
So I make it into the 'catch' block if one of the previous promises rejects.
One downside I can have with async-await is that I can't run tasks simultaneously 
inside of the same function, because everything executes after each other. Another 
downside is that async-await is only available on functions.
*/