import { fetchMovies } from './api.js';

const movieList = document.querySelector('#movie-list');

const renderMovies = (movies) => {
  movieList.innerHTML = '';

  movies.forEach((movie) => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    const titleEl = document.createElement('h2');
    titleEl.classList.add('movie__title');
    titleEl.textContent = movie.title;
    movieEl.appendChild(titleEl);

    const yearEl = document.createElement('span');
    yearEl.classList.add('movie__year');
    yearEl.textContent = `(${movie.year})`;
    movieEl.appendChild(yearEl);

    const ratingEl = document.createElement('span');
    ratingEl.classList.add('movie__rating');
    ratingEl.textContent = `Rating: ${movie.rating}`;
    movieEl.appendChild(ratingEl);

    const posterEl = document.createElement('img');
    posterEl.classList.add('movie__poster');
    posterEl.src = movie.poster;
    movieEl.appendChild(posterEl);

    movieList.appendChild(movieEl);
  });
};

const init = async () => {
  const movies = await fetchMovies();
  renderMovies(movies);
};

init();
