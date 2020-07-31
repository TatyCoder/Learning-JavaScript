const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

// (filter = '') it's a default argument, that means that by default 
// this will be an empty string if we don't pass any specific value:
const renderMovies = (filter = '') => {  // '' is falsy
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  // New (ternary expression):
  const filteredMovies = !filter  // if it's not truthy => it's falsy
    ? movies  // then use all movies because no filter was set
    : movies.filter(movie => movie.info.title.includes(filter)); // otherwise use movie.filter
  // Filter method (arrays module) takes a function which executes on every element in the array.

  // Renamed including filteredMovies:
  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    let text = movie.info.title + ' - '; 
    // Chaining: multiple dots. Useful on properties and methods.
    for (const key in movie.info) {
      if (key !== 'title') {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

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
      [extraName]: extraValue
    },
    id: Math.random()
  };

  movies.push(newMovie);
  renderMovies();
};

// New:
const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
// New:
searchBtn.addEventListener('click', searchMovieHandler);
