const baseUrl = "https://api.themoviedb.org/3/movie";
const imageUrl = "https://image.tmdb.org/t/p/w300";
const apiKey = "api_key=00fafadfef9042a1a51d017c0969afc6";

async function fetchMovieList() {
	const movieList = await fetch(`${baseUrl}/popular?${apiKey}`);
	return movieList.json();
}

async function fetchMovieImage(imgPath) {
	const movieImage = await fetch(`${imageUrl}${imgPath}`);
	return movieImage;
}

async function fetchMovieTheatres() {
	console.log("Inside fetchMovieTheatres");
	const movieTheatres = await fetch(`${baseUrl}/now_playing?${apiKey}`);
	return movieTheatres;
}

async function fetchMovieById(id) {
	console.log("Inside fetchMovieTheatres");
	const movieById = await fetch(`${baseUrl}/${id}?${apiKey}`);
	return movieById.json();
}

export default {
	fetchMovieList,
	fetchMovieTheatres,
	fetchMovieById,
	fetchMovieImage,
};
