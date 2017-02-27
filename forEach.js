(function () {
'use strict';

var arr = [1, 2, 3, 4, 5];

var show = function (item, index, array) {
  console.log(index + ". " + item);
}

arr.forEach(show);

// for (var i = 0; i < arr.length; i++) {
//   console.log(i + ". " + arr[i] );
// }

})();
