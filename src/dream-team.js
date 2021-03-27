const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let filtered = members.filter(item => typeof(item) == "string")
        // console.log(filtered)
        // return filtered
    if (filtered.length == 0) {
        return false
    } else {
        filtered = filtered.map(item => item.slice(0, 1))
        return (filtered.sort().join('').toUpperCase())
    }
};