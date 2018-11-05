const FoodsListViewModel = require("./foods-list-view-model");
const listViewModule = require("tns-core-modules/ui/list-view");
const Cache = require("tns-core-modules/ui/image-cache").Cache;
var dialogs = require("tns-core-modules/ui/dialogs");
var app = require("application");
/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/

var page;
function onNavigatingTo(args) {
    page = args.object;
    page.bindingContext = new FoodsListViewModel();
}

exports.onNavigatingTo = onNavigatingTo;



//search
exports.onSearchLoaded = function(args){
  //some magic to remove keyboard
  var searchBar = args.object;
  if (searchBar.android) {
      searchBar.android.setFocusableInTouchMode(true);
      searchBar.android.setFocusable(true);
      searchBar.android.clearFocus();
  }
}



exports.onSearchPress = function(args){

  dialogs.alert({
      title: "Search debug placeholder",
      message: args.object.text,
      okButtonText: "OK"
  });
}

exports.onOpenMenuTap = function(args){
  var drawer = app.getRootView();
  drawer.toggleDrawerState();
}
