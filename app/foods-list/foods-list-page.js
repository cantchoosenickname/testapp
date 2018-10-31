const FoodsListViewModel = require("./foods-list-view-model");
const listViewModule = require("tns-core-modules/ui/list-view");
const Cache = require("tns-core-modules/ui/image-cache").Cache;
var dialogs = require("tns-core-modules/ui/dialogs");
/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/

var page;
function onNavigatingTo(args) {
    page = args.object;
    page.bindingContext = new FoodsListViewModel();


}

exports.onNavigatingTo = onNavigatingTo;

exports.onFoodTap = function(args){
  if(!page){ return; } //shouldn't happen

  var list_entry = args.object.items[args.index];

  console.log();
  const getFrameById = require("tns-core-modules/ui/frame").getFrameById;

  const navigationEntry = {
      moduleName: "description/description-page",
      context: list_entry,
      animated: true,
  };


  page.frame.navigate(navigationEntry);
}

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
