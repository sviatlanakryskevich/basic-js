const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    const message = Error("'arr' parameter must be an instance of the Array!");
    if (!Array.isArray(arr)) {
        throw message;
    }
    if ((arr.length) == 0) {
        return arr;
    }
    let transformarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--double-next') {
            if (i !== arr.length - 1) {
                transformarr.push(arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if (i !== arr.length - 1 - i) {
                transformarr.push(arr[i - 1]);
            }
        } else if (arr[i] === '--discard-prev') {
            if (i !== arr.length - 1 - i) {
                transformarr.pop(arr[i - 1]);
            }
        } else if (arr[i] === '--discard-next') {
            if (i !== arr.length - 1) {
                transformarr.pop(arr[i + 1]);
            }
        } else {
            transformarr.push(arr[i]);
        }
    }
    console.log(transformarr);
}

// transform([1, 2, 3, '--double-next', 4, 5]);
// transform([1, 2, 3, '--discard-prev', 4, 5]);

module.exports = {
    transform
};