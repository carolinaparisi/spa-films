import router from "/js/router.js";

async function show(movies, moviesImg) {
	const images = await moviesImg;
	console.log(images);

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

		//Button just to test the button router behavior
		createDetailsButton(movieContainer);

		movieContainer.append(titleDiv);

		filmContainer.append(movieContainer);
	});

	function createDetailsButton(movieContainer) {
		const anchorButton = document.createElement("a");
		anchorButton.setAttribute("id", "details-button");
		anchorButton.setAttribute("href", "/details");
		anchorButton.setAttribute("onclick", "route(event)");
		anchorButton.innerText = "DETAILS";

		movieContainer.append(anchorButton);
	}
}

export default { show };
