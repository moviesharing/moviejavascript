const API = {
  baseUrl: 'https://yts.mx/api/v2',

  async getMovies() {
    const url = `${this.baseUrl}/list_movies.json`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },

  async getMovieDetails(movieId) {
    const url = `${this.baseUrl}/movie_details.json?movie_id=${movieId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
};

export default API;
