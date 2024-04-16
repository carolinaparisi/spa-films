import routes from "/js/routes.js";

function init() {
  window.location.hash = window.location.hash || routes.paths.home.path;
  const pathToLaunch = window.location.hash;

  window.addEventListener("hashchange", function () {
    const pathToLaunch = window.location.hash;
    console.log("FIRST");
    launchController(pathToLaunch);
  });

  console.log("SECOND");
  launchController(pathToLaunch);
}

async function launchController(controllerName) {
  console.log(controllerName);
  let controller = "";
  if (controllerName === "/") {
    //WHY DOES THIS GIVE ME A PROMISE?
    controller = await import(`/js/controller/homeController.js`);
    console.log(controller);
    controller.default.init();
    return;
  }
  controller = await import(`/js/controller${controllerName}.js`);
  controller.init();
}

export default { init };
