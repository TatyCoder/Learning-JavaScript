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

const div = document.querySelector('div');

// Changed to 'mouseenter' event:
div.addEventListener('mouseenter', event => {
  console.log('CLICKED DIV');
  console.log(event);
});

// Changed to 'mouseenter' event:
button.addEventListener('mouseenter', event => {
  // event.stopPropagation();  // I don't need to call it.
  console.log('CLICKED BUTTON');
  console.log(event);
});

/* Notes: mouse move events typically don't propagate, if I'm not sure whether  
they propagate or not, whether they bubble up, I can always just print the event  
object and have a look at it because I will find a 'bubbles' property in there,    
and if it says 'false' it means doesn't bubble up and hence I don't have to call  
stopPropagation() because it won't propagate anyways.
*/