const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const arr1 = s1.split('');
    const arr2 = s2.split('');
    let find;
    let counter = 0;
    for (let i = 0; i < arr1.length; i++) {
        find = arr1[i];
        for (j = 0; j < arr2.length; j++) {
            if (find === arr2[j]) {
                counter++;
                arr2[j] = null;
                break;
            }
        }
    }
    console.log(counter);
    return counter;
}
getCommonCharacterCount("aabcc", "adcaa");

module.exports = {
    getCommonCharacterCount
};