// Back to one button:
const button = document.querySelector('button');

// button.onclick = function() {

// };

const buttonClickHandler = event => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

// To get access to the only div:
const div = document.querySelector('div');

// To add an EventListener on the div:
div.addEventListener('click', event => {
  console.log('CLICKED DIV');
  console.log(event);
});

// EventListener for one button:
button.addEventListener('click', event => {
  event.stopPropagation();  // To stop propagation^.
  console.log('CLICKED BUTTON');
  console.log(event);
});

/* Notes: it executes from inside to outside because by default all event listeners are 
registered in the 'bubbling' phase which means that 'capturing' phase, which runs first, is 
totally ignored. So when I click on the button, it executes both: button and then the div.

I could switch to the 'capturing' phase by adding an extra third argument on the event 
listeners, for example, on the div:

div.addEventListener('click', event => {
  console.log('CLICKED DIV');
  console.log(event);
}, true);

If I set this to 'true' (the default is 'false'), I'm telling the browser this event 
listener should be part of the 'capturing' phase; which runs from outside to inside.

This entire process of having multiple listeners for the same event, because the event 
doesn't just trigger on the element itself but also on ancestors, that's called propagation.

^Which means any other listeners for the same type of event on some ancestor elements  
won't trigger their event listeners for this event.
*/