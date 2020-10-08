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

div.addEventListener('mouseenter', event => {
  console.log('CLICKED DIV');
  console.log(event);
});

button.addEventListener('click', event => {
  event.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });

// Changed, from inside this event listener now I want to trigger the button event listener:
list.addEventListener('click', event => {
  // console.log(event.currentTarget);
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  // form.submit();  // For when I click any list item and I want to submit the form.
  button.click();  // This click listener does execute.
});

/* Notes: If I trigger a submit event programmatically, then indeed the submit 
event listener is skipped. That is why the event listener for the form submission 
is not doing its work and preventing the default.
So if I need to submit the form, I can still trigger that programmatically by simulating 
or by triggering a click on the button instead of the form submission itself.
*/
