function show() {
  console.log("Inside homeView");
  const filmElem = document.getElementById("films-container");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = "HERE I'M GONNA SHOW THE MOVIES!";

  filmElem.append(newDiv);
}

export default { show };
