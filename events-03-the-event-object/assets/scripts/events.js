// Changed to plural and querySelectorAll for all the buttons:
const buttons = document.querySelectorAll('button');

// button.onclick = function() {

// };

// Changed, instead of showing an alert, now it's accepting an argument:
const buttonClickHandler = event => { 
// Called 'event' because it's describing the event we're getting.
  event.target.disabled = true;
// Every event has a target property which describes which target or element caused the event. 
// Buttons have a disabled property which we can set to 'true' to disable them once clicked.
  console.log(event); 
// To log that event object.
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// We can't use this because we don't have a single button anymore:
// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// New, to get access to each button:
buttons.forEach(btn => {
  btn.addEventListener('click', buttonClickHandler);
});