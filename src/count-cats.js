const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    if (backyard == 'undefined' || backyard == 'null') {
        return false
    } else {
        let count = 0;
        for (let i = 0; i < backyard.length; i++)
            for (let k = 0; k < backyard[i].length; k++)
                if (backyard[i][k] == '^^')
                    count++
                    if (count > 0) {
                        return count
                    } else return 0
    }

};