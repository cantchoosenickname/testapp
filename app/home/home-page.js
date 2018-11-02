/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
const HomeViewModel = require("./home-view-model");
const frameModule = require("tns-core-modules/ui/frame");
var view = require("ui/core/view");
var dialogs = require("tns-core-modules/ui/dialogs");
var app = require("application");


function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

exports.onNavigatingTo = onNavigatingTo;

exports.tapbtn = function(args){
  const button = args.object;
    const page = button.page;
    page.frame.navigate("foods-list/foods-list-page");

    console.log("tapped");

}

exports.goTo = function(args){
    const page = args.object.page;
    page.frame.navigate(args.object.path);
}

exports.onOpenMenuTap = function(args){
  var drawer = app.getRootView();
  drawer.toggleDrawerState();
}
