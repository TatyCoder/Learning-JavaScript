const button = document.querySelector('button');

// Should be set equal to a function, can be an anonymous function:
// button.onclick = function() {
//     console.log('Hello!');
// };

// Or a named function:
const buttonClickHandler = () => {
    alert('Button was clicked!');
};

// button.onclick = buttonClickHandler;

const anotherButtonClickHandler = () => {
    console.log('This was clicked!');
}

button.onclick = anotherButtonClickHandler; 
// This overrides the previous 'buttonClickHandler' listener.

/* So it's recommended to use an addEventListener instead, because this
allows to add multiple event listeners to the same element and also has 
a removeEventListener function or method that can be useful. 
*/
// button.addEventListener();

// button.removeEventListener();