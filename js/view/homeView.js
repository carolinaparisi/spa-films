async function show(movies, moviesImg) {
	const images = await moviesImg;
	console.log(images);

	const filmContainer = document.getElementById("films-container");

	images.forEach((image, index) => {
		const movieContainer = document.createElement("div");

		const imageDiv = document.createElement("img");
		imageDiv.setAttribute("src", image.url);
		movieContainer.append(imageDiv);

		const titleDiv = document.createElement("div");
		titleDiv.setAttribute("class", "movieDiv");
		titleDiv.innerHTML = movies[index].title;

		movieContainer.append(titleDiv);

		filmContainer.append(movieContainer);
	});
}

export default { show };
