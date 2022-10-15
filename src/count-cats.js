const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (matrix == 'undefined' || matrix == 'null') {
        return false
    } else {
        let count = 0;
        for (let i = 0; i < matrix.length; i++)
            for (let k = 0; k < matrix[i].length; k++)
                if (matrix[i][k] == '^^')
                    count++
                    if (count > 0) {
                        return count
                    } else return 0
    }
}

module.exports = {
  countCats
};
