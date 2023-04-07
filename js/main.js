import { fetchMovieList } from './api.js';
import { renderMovieList } from './movie-list.js';
import { renderMovieDetails } from './movie-details.js';

const movieListContainer = document.querySelector('#movie-list-container');
const movieDetailsContainer = document.querySelector('#movie-details-container');

// Function to handle click events on movie items in the movie list
const handleMovieClick = async (movieId) => {
  // Fetch the details for the selected movie
  const movieDetails = await fetchMovieDetails(movieId);
  // Render the movie details in the movie details container
  renderMovieDetails(movieDetails, movieDetailsContainer);
};

// Initial page load - fetch and render the movie list
fetchMovieList().then((movieList) => {
  renderMovieList(movieList, movieListContainer, handleMovieClick);
});
