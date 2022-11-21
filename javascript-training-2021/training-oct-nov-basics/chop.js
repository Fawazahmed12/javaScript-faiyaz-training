//22.
// /**
//   * Task description: Write a method that to chop a string into chunks of a given length
//   * Expected Result: (javascript) =>  ["ja", "va", "sc", "ri", "pt"]
//   * Task Complexity: 1 of 5
// */

const chop = (str, chunk) => {
   let choppedElements = [];
   let newstr = ""
   for (let i = 0; i < str.length; i += chunk) {
      newstr = str.substr(i, chunk)
      choppedElements.push(newstr)

   }

   return choppedElements;
}
const str = 'javascript'
const chunk = 2
console.log(chop(str, chunk))// ['ja','va','sc','ri','pt']





//23.
/**
  * Task description: Write a method to convert a string into snakeCase case.
  * Expected Result: (Robin Singh from USA) => "robin-singh-from-usa"
  * Task Complexity: 1 of 5
*/
// const snakeCase = (str) => {
//    const words = str.split(" ")
//    const finalword = words.join('-').toLowerCase();
//    return finalword;


// }
// const str = 'Robin Singh from USA.'
// console.log(snakeCase(str)) // "robin-singh-from-usa"

// reduce
sum=[1,2,3,4]
const sumValue1 = sum.reduce(function(currentValue, nextValue){
   const value = currentValue + nextValue;
   return value

})
console.log(sumValue1)