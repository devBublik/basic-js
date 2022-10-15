const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let compareNumeric = function(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
  let arrOfMinus = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      arrOfMinus.push(i)
    }
  }
  arr.sort(compareNumeric)
  arr.splice(0, arrOfMinus.length)
  for (let z = 0; z < arrOfMinus.length; z++) {
    arr.splice(arrOfMinus[z], 0, -1)
  }
  return arr
}

module.exports = {
  sortByHeight
};
