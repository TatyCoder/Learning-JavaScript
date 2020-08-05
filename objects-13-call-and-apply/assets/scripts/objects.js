"use strict";
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const { title: movieTitle } = info;
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);  
    // .bind is useful whenever you want to preconfigure a function for the future execution
    
    // For executing the function right away is better to use the call() method:
    // let text = getFormattedTitle.call(movie) + ' - ';

    /* apply() is similar to call(), both for right away execution. Call() allows you to 
    pass additional arguments as a comma separated list; apply() allows you to pass 
    additional arguments as an array.
    */
    let text = getFormattedTitle.apply(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text = text + `${key}: ${info[key]}`;
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
    id: Math.random().toString(),
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    }
  };

  movies.push(newMovie);
  renderMovies();
};

// With a normal anonymous function:
const searchMovieHandler = function () {
  console.log(this);  // logs button id = search-btn
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

// With an arrow function:
// const searchMovieHandler = () => {
//   console.log(this); (see next video: objects-14)
//   const filterTerm = document.getElementById('filter-title').value;
//   renderMovies(filterTerm);
// };

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
