async function show(movies, moviesImg) {
	const images = await moviesImg;
	console.log(images);

	const filmContainer = document.getElementById("films-container");

	images.forEach((image) => {
		const imageDiv = document.createElement("img");
		imageDiv.setAttribute("src", image.url);
		filmContainer.append(imageDiv);
	});

	movies.forEach((movie) => {
		const titleDiv = document.createElement("div");
		titleDiv.setAttribute("class", "movieDiv");
		titleDiv.innerHTML = movie.title;
		filmContainer.append(titleDiv);
	});
}

export default { show };
