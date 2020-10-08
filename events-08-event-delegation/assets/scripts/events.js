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

button.addEventListener('mouseenter', event => {
  event.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
});

// New, to add multiple listeners on each list item:
const listItems = document.querySelectorAll('li');

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });

// An alternative way that uses the event delegation pattern, which takes advantage of the  
// event propagation, of the event bubbling up and therefore I get access to the entire list:
const list = document.querySelector('ul');

// Now I can register an event listener on that list, with only one event listener 
// instead of multiple event listeners:
list.addEventListener('click', event => {
  // console.log(event.currentTarget);  // event current target is the entire unordered list.
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  // This will give me the closest li ancestor which is the list item.
});

/* Notes: Closest method exists on all DOM objects and it traverses up in    
the ancestor tree and there I can select the closest element with a certain  
CSS selector: by id, by class or by tag.
*/
