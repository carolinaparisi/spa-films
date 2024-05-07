import router from "/js/router.js";

async function show(movies, moviesImg) {
	const images = await moviesImg;

	const filmContainer = document.getElementById("films-container");

	images.forEach((image, index) => {
		const movieContainer = document.createElement("div");
		movieContainer.setAttribute("class", "movie-container");

		const imageDiv = document.createElement("img");
		imageDiv.setAttribute("src", image.url);
		movieContainer.append(imageDiv);

		const titleDiv = document.createElement("div");
		titleDiv.setAttribute("class", "movie-title");
		titleDiv.innerHTML = movies[index].title;

		movieContainer.append(titleDiv);
		//Button just to test the button router behavior
		createDetailsButton(movieContainer, movies[index].id);
		filmContainer.append(movieContainer);
	});

	function createDetailsButton(movieContainer, movieId) {
		const anchorButton = document.createElement("a");
		anchorButton.setAttribute("id", "details-button");
		anchorButton.setAttribute("href", `/details?id=${movieId}`);
		anchorButton.setAttribute("onclick", "route(event)");
		anchorButton.innerText = "DETAILS";

		movieContainer.append(anchorButton);
	}
}

export default { show };
