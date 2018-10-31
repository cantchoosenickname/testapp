const observableModule = require("data/observable");
const Cache = require("tns-core-modules/ui/image-cache").Cache;


function FoodsListViewModel() {
    const viewModel = observableModule.fromObject({
      foods_all : {
        items: [
        {
          title:"Бабочки",
          image_url: "https://preview.redd.it/sqc4bazmoyp11.jpg?width=480&s=776153e248970fcc8ee7aaab7953f1052eb2f26e",
          descr: "Бабочки в животе",
          price: "5 $",
        },
        {
          title:"Сладкий хлеб",
          image_url: "https://i.ytimg.com/vi/nxAbwano41o/hqdefault.jpg",
          descr: "Братишка, я тебе покушать принес",
          price: "777 $",
        },
     ]
   },

    foods_fav : {
         items: [
         {
           title:"test",
           image_url: "https://preview.redd.it/sqc4bazmoyp11.jpg?width=480&s=776153e248970fcc8ee7aaab7953f1052eb2f26e",
           descr: "different data in same template component",
           price: "3 $",
         },
      ],
    }



    });



    return viewModel;
}

module.exports = FoodsListViewModel;
