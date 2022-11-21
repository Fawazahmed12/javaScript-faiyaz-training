//16.
/** 
  * Task description: Write a method that finds shallow intersections of objects 
  * Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 } 
  * Task Complexity: 3 of 5 
  * @param {Object<string | number>} firstObj - Object with values of primitive data types 
  * @param {Object<string | number>} secondObj - Object with values of primitive data types 
  * @returns {Object} 
*/
const intersection = (firstObject, secondObject) => {
  const output = {};
  for (let key in firstObject) {
    if (secondObject[key] === firstObject[key]) {
      output[key] = firstObject[key];
    }
  }
  return output;
}

const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // { b: 2 }




//17.
/** 
  * Task description: Write a method that returns an object composed of key-value pairs. 
  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
  * Task Complexity: 2 of 5 
  * @param {Array} array - a deep array of pairs 
  * @returns {Array} 
*/
const fromPairs = (array) => {
  output={};
  for(key in array){
    key=array;
    output=key[i];
  }
   return output;
 }
   const data = [['a', 1], ['b', 2]];
   console.log(fromPairs(data)) // { a: 1, b: 2 }
   






   //18.
/**
  * Task description: Write a method that returns an array composed of nested array
  * Expected Result: {a : 1, b :2, c:3} => [['a', 1], ['b', 2], ['c', 3]]
  * Task Complexity: 2 of 5
  * @param {Object} obj - The object to query.
  * @returns {Array}
*/
const toPairs = (obj) => {
  const output={};
 for(i in obj){
    key= 
 }
}

const data = {
 a : 1,
 b : 2,
 c : 3,
}
console.log(toPairs(data)) // [['a', 1], ['b', 2], ['c', 3]]