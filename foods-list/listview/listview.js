const getFrameById = require("tns-core-modules/ui/frame").getFrameById;

exports.onLoad = function(args){
    const container = args.object;
    container.bindingContext = container.list;
    console.log('load');
    console.log(container.list);
};

exports.onFoodTap = function(args){
  var list_entry = args.object.items[args.index];

  const frame = args.object.page.frame;

  const navigationEntry = {
      moduleName: "description/description-page",
      context: list_entry,
      animated: true,
  };


  frame.navigate(navigationEntry);
}
