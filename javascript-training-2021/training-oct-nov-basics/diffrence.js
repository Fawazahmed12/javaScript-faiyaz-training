//14.
/**
 * Task description: Creates an array of data values not included in the other given arrays
 * Expected Result: [2, 1], [2, 3] => [1]
 * Task Complexity: 2 of 5
 * @param {Array} array - The array to inspect.
 * @param {Array} valuesToExclude - The values to exclude.
 * @returns {Array}
 */
const difference = (array, valuesToExclude) => {
    let output = [];
    const maxLength = Math.max(array.length, valuesToExclude.length)
    for (let i = 0; i < maxLength; i++) {
    let value = array[i]
        if (!valuesToExclude.includes(value) && array.includes(value)) {
            output.push(value);
        }
    }
    return output;
}
// const data = [3,1];     
// const valuesToExclude = [2,1];
// console.log(difference(data, valuesToExclude)); // [3]


console.log(difference([1,2],[2,3])) // [1]
console.log(difference([3,2],[2,1])) // [3]
console.log(difference([2,2],[2,2])) // []
console.log(difference([1,2,3,5],[2,3,4])) // [1,5]
console.log(difference([2,3,4],[1,2,3,5])) // [4]





     

