import routes from "/js/routes.js";

function init() {
	history.pushState({}, "", "/");
	handleRouter();

	window.route = route;
}

function handleRouter() {
	const url = new URL(window.location.href);
	console.log(url.pathname);
	launchController(url.pathname);
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

const route = (event) => {
	event.preventDefault();
	history.pushState({}, "", event.target.href);
	handleRouter();
};

export default { init };
