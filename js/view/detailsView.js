async function show(movieInfo, movieImg) {
	const image = await movieImg;

	const filmContainer = document.getElementById("films-container");
	filmContainer.innerHTML = "";

	const supportDiv = document.createElement("div");
	supportDiv.setAttribute("class", "support-details");

	const supportMovieDetailsCard = document.createElement("div");
	supportMovieDetailsCard.setAttribute("class", "support-details-card");

	const movieCardInfo = document.createElement("div");
	movieCardInfo.setAttribute("class", "details-card");

	const img = document.createElement("img");
	img.setAttribute("class", "film-img");
	img.setAttribute("src", image.url);

	const genres = document.createElement("div");
	genres.setAttribute("class", "genresContainer");
	let genreInitialString = "Genres: ";

	const year = document.createElement("div");
	year.setAttribute("class", "yearContainer");
	year.innerText = "Released year: " + movieInfo.release_date.split("-")[0];

	const supportOverview = document.createElement("div");
	supportOverview.setAttribute("class", "support-overview");

	const overviewTitle = document.createElement("div");
	overviewTitle.setAttribute("class", "overviewTitle");
	overviewTitle.innerText = "Overview:";

	const overviewText = document.createElement("div");
	overviewText.setAttribute("class", "overviewText");
	overviewText.innerText = movieInfo.overview;

	movieInfo.genres.forEach((genre, index) => {
		genreInitialString = genreInitialString.concat(genre.name + " ");
	});

	genres.innerText = genreInitialString;

	movieCardInfo.append(img);
	movieCardInfo.append(supportMovieDetailsCard);
	supportOverview.append(overviewTitle);
	supportOverview.append(overviewText);
	supportMovieDetailsCard.append(genres);
	supportMovieDetailsCard.append(year);
	supportMovieDetailsCard.append(supportOverview);
	supportDiv.append(movieCardInfo);
	filmContainer.append(supportDiv);
}

export default { show };
