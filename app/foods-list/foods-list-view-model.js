const observableModule = require("data/observable");
const Cache = require("tns-core-modules/ui/image-cache").Cache;


function FoodsListViewModel() {
    const viewModel = observableModule.fromObject({
      test_txt : "test text",
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
<<<<<<< HEAD

const screen = require("tns-core-modules/platform").screen;

// mainScreen is of type ScreenMetrics interface https://docs.nativescript.org/api-reference/interfaces/_platform_.screenmetrics
let scale =  screen.mainScreen.scale;
let widthPixels = screen.mainScreen.widthPixels;
let heightPixels = screen.mainScreen.heightPixels;
let widthDIPs = screen.mainScreen.widthDIPs; // DIPs === pixels/scale (e.g 1024 pixels / 2x scale = 512 DIPs)
let heightDIPs = screen.mainScreen.heightDIPs;
=======
>>>>>>> d351a4605a51143a9416791b7b6a448a838b719b
