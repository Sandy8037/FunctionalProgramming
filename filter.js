(function () {
'use strict';

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var greaterThanFour = function (c) {
  return c > 4;
}

var lessThanFive = function (c) {
  return c < 5;
}

var newFilter = arr.filter(greaterThanFour);
console.log(newFilter);

var newReject = arr.filter(lessThanFive);
console.log(newReject);

// for (var i = 0; i < 10; i++) {
//   if (arr[i] > 4) {
//     console.log(arr[i]);
//   }
// }

})();
