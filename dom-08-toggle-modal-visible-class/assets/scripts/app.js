const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

/* Keyword function:
function toggleMovieModal() {
  addMovieModal.classList.toggle('visible');
}
*/

// or Arrow function:
const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible'); 
};
// We need to add/remove visible class to show/hide the modal

startAddMovieButton.addEventListener('click', toggleMovieModal); 
// Here toggleMovieModal without () because we don't want to execute it immediately