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

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

// New, to listen to the form submission:
const form = document.querySelector('form');

form.addEventListener('submit', event => {  // Only form elements have that 'submit' event.
  event.preventDefault();  // A method to prevent the default behavior*.
  console.log(event);  
});
// *For the 'submit' event on a form, the default behavior is      
// to submit that form to a server and then reload the page.