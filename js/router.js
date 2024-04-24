import routes from "/js/routes.js";

function init() {
	history.pushState({}, "", "/");
	handleRouter();

	window.handleRouter = route;
}

function handleRouter() {
	const url = window.location.href;
	const homeUrl = new URL(window.location.href);
	console.log(homeUrl.pathname);
	launchController(homeUrl.pathname);
}

async function launchController(controllerName) {
	if (controllerName === "/") {
		const homeController = await import(`/js/controller/homeController.js`);
		homeController.default.init();
		return;
	}

	const currentController = await import(
		`/js/controller/${controllerName}Controller.js`
	);

	currentController.default.init();
}

window.addEventListener("popstate", () => {
	history.pushState(null, null, "/details");
	detailsButton();
});

function route() {
	console.log("Helloooooo");
	//handleRouter();
}

export default { init };
