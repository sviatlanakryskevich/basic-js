const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([1,[1,[1]]]) => 3
 *
 */


class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        let maxdepth = 0;
        for (let item of arr) {
            if (Array.isArray(item)) {
                maxdepth = Math.max(this.calculateDepth(item), maxdepth);
            }
        }
        return depth + maxdepth;
    }
}
const depthCalc = new DepthCalculator();

module.exports = {
    DepthCalculator
};