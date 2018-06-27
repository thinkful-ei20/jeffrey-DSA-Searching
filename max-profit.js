'use strict';

function maxProfit(arr) {
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    let dayProfit = 0;
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] - arr[i] > dayProfit){
        dayProfit = arr[k] - arr[i];
      }
    }
    if (dayProfit > maxProfit){
      maxProfit = dayProfit;
    }
  }
  return maxProfit;
}
// O(n^2)

let input = [128, 97, 121, 123, 98, 97, 105];
let output = maxProfit(input);
console.log('Max Profit: ', output);
