// //7.
// /**
//   * Task description: Write a method that to add up each element in the same position and
//     create a new array containing the sum of each pair. Assume both arrays are of the same length.
//   * Expected Result: ([4, 6, 7],[8, 1, 9]) => [12, 7, 16]
//   * Task Complexity: 1 of 5
// */
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



//17.
/** 
  * Task description: Write a method that returns an object composed of key-value pairs. 
  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
  * Task Complexity: 2 of 5 
  * @param {Array} array - a deep array of pairs 
  * @returns {Array} 
*/
const fromPairs = (array) => {
   let output = {};
   for (let i = 0; i < array.length; i++) {
      let e = array[i];
      for (let j = 0; j < e.length; j += 2) {
         let nextIndex = j + 1
         let key = e[j]
         let val = e[nextIndex]
         output[key] = val
      }

   }
 return output;
}
const data = [['a', 1], ['b', 2]];
console.log(fromPairs(data)) // { a: 1, b: 2}




// const data = [['a', 1], ['b', 2]];

// function formPairs(arr){
//   objPairValues = {};
//   for(let i=0;i<arr.length;i++){
// let ele = arr[i];
// objPairValues[ele[0]]=ele[1]
//   }
//   return objPairValues;
// }

// console.log(formPairs(data));







// //18.
// /**
//   * Task description: Write a method that returns an array composed of nested array
//   * Expected Result: {a : 1, b :2, c:3} => [['a', 1], ['b', 2], ['c', 3]]
//   * Task Complexity: 2 of 5
//   * @param {Object} obj - The object to query.
//   * @returns {Array}
// */
// const toPairs = (obj) => {
//    let output = [];
//    for (key in data) {
//       output.push([key, obj[key]])
//    }
//    return output;
// };
// const data = {
//    a: 1,
//    b: 2,
//    c: 3,
// }
// console.log(toPairs(data)) // [['a', 1], ['b', 2], ['c', 3]]