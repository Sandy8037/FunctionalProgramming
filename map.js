(function () {
'use strict';

var cars = [
  {
    name: 'Model S',
    brand: 'Tesla'
  },
  {
    name: 'Model X',
    brand: 'Tesla'
  },
  {
    name: 'Model 3',
    brand: 'Tesla'
  }
];

// Arrow Function ES6
var names = cars.map((c) => c.name);
// var names = cars.map((c) => { return c.name });

// ES5 way
// var names = cars.map(function (c) {
//   return c.name + ' is made by ' + c.brand;
// });

console.log(names);

// var names = [];
//
// for (var i = 0; i < cars.length; i++) {
//   names.push(cars[i].name);
// }

})();
