const button = document.querySelector('button');
const output = document.querySelector('p');

// Changed, setting the error:
const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {  
      // Call reject inside of the arrow callback and pass the error object into reject.
        reject(error); 
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

// Changed, handling error using the catch method:
function trackUserHandler() {
  let positionData;

  getPosition()
    .then((posData) => {
      positionData = posData;
      return setTimer(2000);
    })
    .catch((err) => {
      console.log(err);
      return 'on we go...';
    })
    .then((data) => {
      console.log(data, positionData); // positionData logs undefined when 'Block' location.
    });
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

/* Notes: what reject will do is it will mark the promise as failed.
Errors can be handle with the then() second argument, which is the potential error function.
The first function is the success case when the promise resolves, the second argument 
is the failure case, when a promise does not resolve but instead rejects.
An alternative to handle errors is to use the catch() that I can add anywhere in the promise 
chain. Catch() actually does exactly the same as if I pass it as a second argument to one of 
the then() blocks: they both catch any errors, any rejections produced anywhere in the promise 
chain prior to them; any then() blocks thereafter will continue to work. If I want to kind of 
cancel the promise chain, I have to move catch() to the end of all the then() blocks because 
only then I make sure that if one of them rejects, the other ones are skipped and I make it 
into that last catch().

The different promise states:

PENDING => Promise is doing work, neither then() nor catch() executes at this moment.

RESOLVED => Promise is resolved => then() executes.

REJECTED  => Promise was rejected => catch() executes.

When you have another then() block after a catch() or then() block, the promise re-enters 
PENDING mode (keep in mind: then() and catch() always return a new promise - either not 
resolving to anything or resolving to what you return inside of then()). Only if there are 
no more then() blocks left, it enters a new, final mode: SETTLED. Once SETTLED, you can use 
a special block - finally() - to do final cleanup work. finally() is reached no matter if 
you resolved or rejected before.

Here's an example:

PromiseCreatingCode()
.then(firstResult => {
  return 'done with first promise';
})
.catch(err => {
  // would handle any errors thrown before
  // implicitly returns a new promise - just like then()
})
.finally(() => {
  // the promise is settled now - finally() will NOT return a new promise!
  // you can do final cleanup work here
});

You don't have to add a finally() block (indeed we haven't in the lectures).
*/