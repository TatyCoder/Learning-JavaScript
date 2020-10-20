const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}

button.addEventListener('click', trackUserHandler);

/* Notes: I pass the trackUserHandler function as a second argument which effectively 
is a callback function: the function the browser should call once a click occurs.
*/