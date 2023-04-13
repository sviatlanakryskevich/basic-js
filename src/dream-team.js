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
    let arr = [];
    if (!Array.isArray(members)) {
        return false;
    }
    for (let i = 0; i < members.length; i++) {
        if (typeof(members[i]) === 'string') {
            arr.push(members[i]);
        }
    }
    console.log(arr);
    const symbol = [];
    for (let j = 0; j < arr.length; j++) {
        symbol.push(arr[j].trim().charAt(0).toUpperCase());
    }
    console.log(symbol);
    symbol.sort();
    const str = symbol.join('');
    console.log(str);
    return str;
}

module.exports = {
    createDreamTeam
};