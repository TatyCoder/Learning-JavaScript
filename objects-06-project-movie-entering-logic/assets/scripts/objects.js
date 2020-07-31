const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;
// Validation:
  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,  
      // I can use this if key name and value name are the same (title: title) 
      [extraName]: extraValue  
      // [] to assign a dynamic property name. 
      // On the right side of the colon holds the value we want to store in this property.
    },
    id: Math.random()
  };

  movies.push(newMovie);
  console.log(newMovie);
};

addMovieBtn.addEventListener('click', addMovieHandler);