const FoodsListViewModel = require("./foods-list-view-model");
const listViewModule = require("tns-core-modules/ui/list-view");
const Cache = require("tns-core-modules/ui/image-cache").Cache;

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
