const button = document.querySelector('button');
const output = document.querySelector('p');

// Changed, adding a timer:
function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimeout(() => { // A function nested inside of a function (actually, nested callbacks). 
        console.log(posData);
      }, 2000);
    },
    error => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log('Timer done!');
  }, 0);   // This function only executes after the following line is done.
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);
