// //1.
// /** 
//   * Task description: Write a method that creates a new array with given values 
//   * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
//   * Task Complexity: 1 of 5 
// */
// const fill = (arraySize, value) => {
//   let output = [];
//   for (let i = 0; i < arraySize; i++) {
//     output.push(value);
//   }
//   return output;
// }
// const data = 3;
// const valueToFill = 'a';
// console.log(fill(data, valueToFill)) // ['a', 'a', 'a']

const kidsWithCandies = (candies, extraCandies) => {
  let maximum = 0;
  const output = [];

  for (const num of candies) {
      (num > maximum) && (maximum = num);
  }

  for (let i = 0; i < candies.length; i++) {
       output.push(candies[i] + extraCandies >=maximum);
  }
  return output;
};
console.log(kidsWithCandies( [4,2,1,1,2],  1))
