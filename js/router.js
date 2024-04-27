import { paths } from "/js/routes.js";

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

async function launchController(pathname) {
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
		currentController.default.init();
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
	handleRouter();
};

export default { init, handleRouter };
