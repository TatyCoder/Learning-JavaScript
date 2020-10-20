const button = document.querySelector('button');
const output = document.querySelector('p');

// Changed, adding a new method with callbacks:
function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {  // successCallback: a function that is executed if the position is successfully fetched.
      console.log(posData);
    },
    error => {  // errorCallback: which is executed if the position is not successfully fetched.
      console.log(error);
    }  // Didn't add the 3rd parameter: 'options'.
  );
  console.log('Getting position...');  // This executes right away, before previous lines:
  // This would print first because that goes into the event loop first. The code inside 
  // of the callback functions can never be executed before this code, because those are 
  // offloaded to the browser (see Notes).
}

button.addEventListener('click', trackUserHandler);

/* Notes: getCurrentPosition offloads this task to the browser and when it's done, 
it pushes this into the Message Queue where the Event Loop eventually 'moves it' 
into the JS call Stack to execute the code. The event loop will only do this once 
the call stack is empty.
*/

// Didn't need this example here:
// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
