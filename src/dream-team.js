const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
		return false;
	} else {
		let filtered = members.filter(item => typeof (item) == "string")
		console.log(filtered)
		// return filtered
		if (filtered.length == 0) {
			return false
		} else {
		for (let i=0; i< filtered.length; i++) {
			for (let j=0; j<filtered[i].length; j++) {
			// console.log(filtered[i]);/
			filtered[i] = filtered[i].replace(/\s/g, '')
			}
			// console.log(filtered);
		}
		filtered = filtered.map(item => item.slice(0, 1).toUpperCase())
		return (filtered.sort().join('').toString())
	}
}
}

module.exports = {
  createDreamTeam
};
