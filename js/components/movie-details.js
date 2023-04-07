import API from './api.js';

const movieDetailsContainer = document.querySelector('#movie-details-container');
const movieId = new URLSearchParams(window.location.search).get('id');

async function displayMovieDetails() {
  const movieDetails = await API.getMovieDetails(movieId);

  const movieDetailsHtml = `
    <div class="movie-details">
      <h1 class="movie-title">${movieDetails.data.movie.title}</h1>
      <img class="movie-cover" src="${movieDetails.data.movie.large_cover_image}">
      <div class="movie-info">
        <div class="movie-rating">Rating: ${movieDetails.data.movie.rating}</div>
        <div class="movie-genres">Genres: ${movieDetails.data.movie.genres.join(', ')}</div>
        <div class="movie-runtime">Runtime: ${movieDetails.data.movie.runtime} minutes</div>
      </div>
      <div class="movie-summary">${movieDetails.data.movie.description_full}</div>
      <div class="movie-cast">
        <h2>Cast</h2>
        <ul>
          ${movieDetails.data.movie.cast.map(castMember => `<li>${castMember.name} - ${castMember.character_name}</li>`).join('')}
        </ul>
      </div>
      <div class="movie-download">
        <h2>Download</h2>
        <ul>
          ${movieDetails.data.movie.torrents.map(torrent => `<li>${torrent.quality} - ${torrent.size} - <a href="${torrent.url}">Download</a></li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  movieDetailsContainer.innerHTML = movieDetailsHtml;
}

displayMovieDetails();
