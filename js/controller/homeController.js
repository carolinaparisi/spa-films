import homeView from "/js/view/homeView.js";
import movieService from "/js/service/movieService.js";

async function init() {
	const moviesList = await movieService.fetchMovieList();
	console.log(moviesList);
	const arrayMovies = moviesList.results;

	homeView.show(arrayMovies);
}

export default { init };
