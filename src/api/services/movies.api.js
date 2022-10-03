import Api from "../http";

const MoviesApi = {
  addMovie(movie) {
    Api.postData("movies.json", movie);
  },
  async getMovies() {
    let loadedMovies = [];
    const data = await Api.getData("movies.json");
    for (const key in data) {
      loadedMovies.push({
        id: key,
        title: data[key].title,
        openingText: data[key].openingText,
        releaseDate: data[key].releaseDate,
      });
    }

    return loadedMovies;
  },
};
export default MoviesApi;
