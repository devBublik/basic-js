const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
     let res = [];
   let current = 1;
   for (let i = 0; i < str.length; i++) { 
     if (str[i] == str[i + 1]) {
         console.log(true)
         current = current + 1
         //i = i+1
       } else {
         res.push(current)
       res.push(str[i])
        current = 1;
       }
   }
    return res.join('').replace(/1/g, '')
}

module.exports = {
  encodeLine
};
