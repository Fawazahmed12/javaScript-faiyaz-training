// //8.
// /**
//   * Task description: Write a method that to get the sum of array actually the sum of all their elements.
//   * Expected Result: ([3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]) => 276
//   * Task Complexity: 1 of 5
// */
const sum = (numbers) => {
  let output = 0
  for (i = 0; i < numbers.length; i++) {
    output = output + numbers[i];
  }
  return output;
}
const numbers = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]
console.log(sum(numbers)) // 276
