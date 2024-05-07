async function show(movieInfo, movieImg) {
	const image = await movieImg;
	console.log(image);
	console.log(movieInfo);

	const filmContainer = document.getElementById("films-container");
	filmContainer.innerHTML = "";

	const supportDiv = document.createElement("div");
	supportDiv.setAttribute("class", "support-details");
	const movieCardInfo = document.createElement("div");
	movieCardInfo.setAttribute("class", "details-card");
	const img = document.createElement("img");
	img.setAttribute("class", "film-img");
	img.setAttribute("src", image.url);

	movieCardInfo.append(img);
	supportDiv.append(movieCardInfo);
	filmContainer.append(supportDiv);
}

export default { show };
