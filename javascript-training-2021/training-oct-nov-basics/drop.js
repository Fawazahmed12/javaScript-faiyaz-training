//2.
/**
 * Task description: Write a method to creates a slice of array with n elements dropped from the beginning.
 * Expected Result: [1, 2, 3, 4] => [3, 4]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @param {Number} elementToDrop - number of elements to drop.
 * @returns {Array}
 */
const drop = (array, elementToDrop) => {
  const output = []
  for (i = 2; i < data.length; i++) {
    output.push(data[i]);
  }
  return output;
}
const data = [1, 2, 3, 4];
const elementToDrop = 2;
console.log(drop(data, elementToDrop)); // [3, 4]

