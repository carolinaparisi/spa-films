function show(arrayMovies) {
	const filmElem = document.getElementById("films-container");

	arrayMovies.forEach((element) => {
		const newDiv = document.createElement("div");
		newDiv.setAttribute("class", "movieDiv");
		newDiv.innerHTML = element.title;
		filmElem.append(newDiv);
	});
}

export default { show };
