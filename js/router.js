import { paths } from "/js/routes.js";

function init() {
	history.pushState({}, "", "/");
	handleRouter();

	window.route = route;
}

function handleRouter(movieId) {
	const url = new URL(window.location.href);
	console.log(url.pathname);
	launchController(url.pathname, movieId);
}

async function launchController(pathname, movieId) {
	let currentController = "";

	if (pathname === paths.home.path) {
		const homeController = await import(
			`/js/controller/${paths.home.controller}.js`
		);
		homeController.default.init();
		return;
	}

	if (pathname === paths.details.path) {
		currentController = await import(`/js/controller${pathname}Controller.js`);
		currentController.default.init(movieId);
		return;
	}

	currentController = await import(
		`/js/controller/${paths.notFound.controller}.js`
	);

	currentController.default.init();
}

const route = (event) => {
	console.log(event);
	event.preventDefault();
	history.pushState({}, "", event.target.href);
	const searchParams = new URLSearchParams(window.location.search);
	const movieId = searchParams.toString().substring(3);
	handleRouter(movieId);
};

export default { init, handleRouter };
