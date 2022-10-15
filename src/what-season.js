const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
        return "Unable to determine the time of year!";
    } else if (!date || !(date instanceof Date) || date.toString !== new Date().toString ) {
		// console.log(toString.call(date))
        throw new Error('Invalid date!');
    } else {
        let season = date.getMonth();

        if (season === 0 || season === 1 || season === 11) {
            return "winter";
        } else if (season === 2 || season === 3 || season === 4) {
            return "spring";
        } else if (season === 5 || season === 7 || season === 6) {
            return "summer";
        } else if (season === 9 || season === 10 || season === 8) {
            return "autumn";
        }
    }
}

module.exports = {
  getSeason
};
