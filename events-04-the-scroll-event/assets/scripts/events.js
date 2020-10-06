const buttons = document.querySelectorAll('button');

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

// Changed to 'mouseenter' event so it's triggered whenever the mouse/cursor enters the buttons:
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', buttonClickHandler);
});

// New 'scroll' event, which it's fired for every scrolling action:
window.addEventListener('scroll', event => {
  console.log(event);
});