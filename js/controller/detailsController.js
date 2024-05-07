import detailsView from "/js/view/detailsView.js";
import movieService from "/js/service/movieService.js";

async function init(movieId) {
	const movieInfo = await movieService.fetchMovieById(movieId);

	const movieImage = await movieService.fetchMovieImage(movieInfo.poster_path);

	detailsView.show(movieInfo, movieImage);
}

export default { init };
