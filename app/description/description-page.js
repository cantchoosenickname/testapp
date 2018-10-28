const DescriptionViewModel = require("./description-view-model");
var dialogs = require("tns-core-modules/ui/dialogs");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    const context = page.navigationContext || {};

    page.bindingContext = new DescriptionViewModel(context);


}

exports.onNavigatingTo = onNavigatingTo;

exports.reserveTap = function(){
  dialogs.alert({
      title: "Reservation was successfull",
      message: "You can take food at specified time",
      okButtonText: "OK"
  });
};
