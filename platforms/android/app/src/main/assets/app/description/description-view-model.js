const observableModule = require("data/observable");

function DescriptionViewModel(context) {
    const viewModel = observableModule.fromObject(context);

    return viewModel;
}

module.exports = DescriptionViewModel;
