//7.
/**
  * Task description: Write a method that to add up each element in the same position and
    create a new array containing the sum of each pair. Assume both arrays are of the same length.
  * Expected Result: ([4, 6, 7],[8, 1, 9]) => [12, 7, 16]
  * Task Complexity: 1 of 5
*/
// const sumOfPairs = (num1, num2) => {

//     var c = [];
//     for (var i = 0; i < num1.length; i++) {
//      c. push((num1[i] ) + (num2[i]));
//  }
//     return c;
// }
//     let num1 = [4, 6, 7];
//    let num2 = [8, 1, 9];
//    console.log(sumOfPairs(num1, num2))  // [12, 7, 16]


//4.
/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/


// const reverse = (array) 
// {
//     array=[]
//     for(i=data.length-1;i>=0;i--){
//     array.push(data[i]);
// }
//  return array
// }
// const data = [1, 2, 3];
// console.log(reverse(data)); // [3, 2, 1]


// // arr = [1, 2, 3, 4];
// // arr1 = [];
// // for (let i = arr.length - 1; i >= 0; i--) {
// //     arr1.push(arr[i]);
// // }
// // // console.log(arr1);



// // // const nums=[11,20,18,17,22]
// // //  output=[];
// // //  c=0;
// //  for(let i=nums.length-1;i>=0;i--){
// //    a=nums[i];
// //    output[c]=a;
// //    c++
// //  }
// //  console.log(output);

//4.
/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/
// const reverse = (array) => {
//     const output=[]
//     for( let i=data.length-1;i>=0;i--){
//     output.push(data[i]);
//  }
//   return output 
//  }

// const data = [1, 2, 3];
// console.log(reverse(data)); // [3, 2, 1]


//13.
/**
 * Task description: Omit the properties from the source object
 * Expected Result: {a :1 ,b:2 : c:3} => {b : 2}
 * Task Complexity: 1 of 5
 * @param {object} data - The source object
 * @param {Array} paths - The property paths to omit.
 * @returns {Object}
 */
//  const omit = (data,paths) => {
//     const output={};
//   for(i=0;i<data.length;i++)
// {
//   if()
// }
//  return ;
// }

//    const data = {
//     a : 1,
//     b : 2,
//     c : 3,
// }
// const paths = ['a', 'c']
// console.log(omit(data,paths));




//5.
/**
 * Task description: Gets all but the first element of array.
 * Expected Result: [1, 2, 3] => [2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - The array to query.
 * @returns {Array}
 */
// const tail = (array) => {
// const output=[];
// for(i=1;i<data.length;i++)
// {
//    output.push(data[i]); 
// }
// return output; 
// }
// const data = [1, 2, 3];
// console.log(tail(data)); // [2, 3]



//11.
/**
 * Task description: Creates an object composed of the picked object properties.
 * Expected Result: { 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'] => { 'a': 1, 'c': 3 }
 * Task Complexity: 1 of 5
 * @param {Object} data - The source object
 * @param {Array} paths - TThe property paths to pick.
 * @returns {Object}
 */
//    const pick = (data,paths) => {
//    const ouput={}
//    for(i=0;i<data.length;i++)

// const data = {
//   a : 1,
//   b : 2,
//   c : 3
// }
// const paths =  ['a', 'c']
// console.log(pick(data,paths));




//2.
/**
 * Task description: Write a method to creates a slice of array with n elements dropped from the beginning.
 * Expected Result: [1, 2, 3, 4] => [3, 4]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @param {Number} elementToDrop - number of elements to drop.
 * @returns {Array}
 */
// const drop = (array, elementToDrop) => {
//   const output = []
//   for (i = 2; i < data.length; i++) {
//     output.push(data[i]);
//   }
//   return output;
// }
// const data = [1, 2, 3, 4];
// const elementToDrop = 2;
// console.log(drop(data, elementToDrop)); // [3, 4]



// //8.
// /**
//   * Task description: Write a method that to get the sum of array actually the sum of all their elements.
//   * Expected Result: ([3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]) => 276
//   * Task Complexity: 1 of 5
// */
// const sum = (numbers) => {
//   let output = 0
//   for (i = 0; i < numbers.length; i++) {
//     output = output + numbers[i];
//   }
//   return output;
// }
// const numbers = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]
// console.log(sum(numbers)) // 276

//12.
/**
 * Task description: Get all the values from the source object
 * Expected Result: {a :1 ,b:2 : c:3} => [1,2,3]
 * Task Complexity: 1 of 5
 * @param {object} data - The source object
 * @returns {Array}
 */
 const values = (data) => {
  output=[];
  for(key in data){
    output.push(data[key])
  }
 return output
}
const data = {
  a : 1,
  b : 2,
  c : 3,
}
console.log(values(data)); // [1,2,3]



//1.
/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
*/
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


//3.
/**
 * Task description: Removes all given values from array using values array for equality comparisons.
 * Expected Result: ['a', 'b', 'c', 'a', 'b', 'c'] => ['b', 'b']
 * Task Complexity: 1 of 5
 * @param {Array} array - The array to query.
 * @param {Array} values - The values to remove.
 *
 * @returns {Array}
 */
//  const pull = (array,values) => {
//   let output=[];
//    for(i=0;i<array.length;i++){
//      if(array[i]==='b'){
//        output.push(array[i]);
//      }
//      }
//    return output;
//   }
// const data = ['a', 'b', 'c', 'a', 'b', 'c'];
// const values = ['a', 'c'];
// console.log(pull(data,values)); // ['b', 'b']

//10.
/**
 * Task description: Creates an array of the own enumerable property names of object.
 * Expected Result: { 'a': 1, 'b': 2, 'c': 3 } => ['a', 'b', 'c']
 * Task Complexity: 1 of 5
 * @param {Object} data - The object to query.
 * @returns {Array} - Returns the array of property names.
 */
// const keys = (data) => {
//   const output = [];
//   for (let key in data) {
//     output.push(key);
//   }
//   return output
// }
// const data = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// console.log(keys(data)); // ['a', 'b', 'c']




//6.
/**
  * Task description: Write a method that to print a even Numbers only without conditional statement using loop.
  * Expected Result: (15) => 0,2,4,6,8,10,12,14,16,18,20,22,24,26,28
  * Task Complexity: 1 of 5
*/
// const printEvenNumbers = (size) => {
// }
// const size = 15
// console.log(printEvenNumbers(size))
