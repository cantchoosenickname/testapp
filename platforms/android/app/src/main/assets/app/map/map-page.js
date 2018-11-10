const MapViewModel = require("./map-view-model");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new MapViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
