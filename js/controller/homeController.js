import homeView from "/js/view/homeView.js";
import movieService from "/js/service/movieService.js";

async function init() {
	const moviesList = await movieService.fetchMovieList();
	console.log(moviesList);
	const arrayMovies = moviesList.results;

	let promisesMoviesImages = [];
	arrayMovies.forEach((element) => {
		const currentImage = movieService.fetchMovieImage(element.poster_path);
		promisesMoviesImages.push(currentImage);
	});

	const moviesImg = Promise.all(promisesMoviesImages);

	homeView.show(arrayMovies, moviesImg);
}

export default { init };
