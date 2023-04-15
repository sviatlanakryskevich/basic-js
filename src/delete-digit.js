const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const arr = Array.from(String(n));
    min = arr[0];
    max = min;
    for (i = 1; i < arr.length; ++i) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) {
            min = arr[i];
        };
    }
    const newarr = arr.filter(item => item > min);
    const num = +newarr.join('');
    console.log(num);
    return num;

}
deleteDigit(152);
module.exports = {
    deleteDigit
};