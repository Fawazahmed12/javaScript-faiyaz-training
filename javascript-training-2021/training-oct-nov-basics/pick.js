// //11.
// /**
//  * Task description: Creates an object composed of the picked object properties.
//  * Expected Result: { 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'] => { 'a': 1, 'c': 3 }
//  * Task Complexity: 1 of 5
//  * @param {Object} data - The source object
//  * @param {Array} paths - TThe property paths to pick.
//  * @returns {Object}
//  */
// const pick = (data, paths) => {
//   const object = {}
//   for (let key in data) {
//     if (paths.includes(key)) {
//       object[key] = data[key]
//     }
//   }
//   return object
// }
// const data = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// const paths = ['a', 'c']
// console.log(pick(data, paths));

const word="apple";
const letter="p";
 let x=0;
 for(i=0;i<word.length;i++){
 if(word[i]===letter){
   x++
  
}
}
 console.log(x);




//  function WordCount(word,letter) {
//   var  c = 0;
//   for (var i = 0; i < WordCount.length; i++)
//     if (word === letter ) { 
//       c++; 
//   }
//   return c++; 
// }


// console.log(c);