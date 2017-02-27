(function () {
'use strict';

var orders = [
  { amount: 100 },
  { amount: 200 },
  { amount: 300 },
  { amount: 300 }
];

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

// var totalAmount = orders.reduce(function (sum, order) {
//   return sum + order.amount;
// }, 0);

// var totalAmount = 0;
// for (var i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount;
// }

console.log(totalAmount);

})();
