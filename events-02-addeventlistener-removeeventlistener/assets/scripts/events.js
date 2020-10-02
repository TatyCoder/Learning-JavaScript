const button = document.querySelector('button');

// button.onclick = function() {

// };

const buttonClickHandler = () => {
  alert('Button was clicked!');
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// With addEventListener both listeners will work:
// button.addEventListener('click', buttonClickHandler);
// button.addEventListener('click', anotherButtonClickHandler);

// Using add & remove EventListeners:
/* We have to make sure we store the function in a constant which then holds the address  
of the function object, so if we want to remove it later, only use that same address 
and therefore the same function object. This because 'bind' creates new function 
objects in addEventListener and in removeEventListeners, so they are different.
*/
const boundFn = buttonClickHandler.bind(this);

button.addEventListener('click', boundFn);

setTimeout(() => {
  button.removeEventListener('click', boundFn);
}, 2000);
