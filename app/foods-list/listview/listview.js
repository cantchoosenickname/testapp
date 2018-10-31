
exports.onLoad = function(args){
    const container = args.object;
    container.bindingContext = container.list;
};
