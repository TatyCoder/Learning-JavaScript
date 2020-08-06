'use strict';
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
    let text = getFormattedTitle.apply(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {  // Changes: to exclude '_title'
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

  if ( // Changes
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }
// New get & set:
  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title;  // New
  console.log(newMovie.info.title);  // new

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  console.log(this);
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

/* 
-- get:
special keyword 'get', then the property name of my choice, then the parentheses as if 
this were a method and then curly braces for the method body. This will create a so-called 
getter, so Javascript detects the special 'get' keyword and in combination with a method 
thereafter, this can actually be accessed like a property, so without adding parentheses 
to call it in quotes but still execute some logic to retrieve the value and the same can 
be done for setting...

-- set:
'set' keyword, then the property name, then again parentheses and curly braces.
Now here for setting, we also have to accept the parameter and that's the value parameter,
which holds the value you're trying to set. Now inside of the setter, you can now target 
a property with 'this' which refers to new movie if you call new movie.title later and 
for example set another property here, not the same, but often you use something like _title 
to make it clear that this is like the internal value, and for the outside world you have
title with your getter and setter.
*/