import detailsView from "/js/view/detailsView.js";
import movieService from "/js/service/movieService.js";

async function init(movieId) {
	const movieInfo = await movieService.fetchMovieById(movieId);
	console.log(movieInfo);
	//detailsView.show();
}

export default { init };
