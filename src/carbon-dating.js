const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / HALF_LIFE_PERIOD; //1,2094240837696335078534031413613e-4

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  
  if (isNaN(Number(sampleActivity)) || sampleActivity === null || sampleActivity === undefined || Number(sampleActivity) > 15 || Number(sampleActivity) < 0 || typeof(sampleActivity) == 'number' || sampleActivity == false || typeof(sampleActivity) == 'object') {
    return false
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k);
}

module.exports = {
  dateSample
};
