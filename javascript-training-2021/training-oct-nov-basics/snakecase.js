//23.
/**
  * Task description: Write a method to convert a string into snakeCase case.
  * Expected Result: (Robin Singh from USA) => "robin-singh-from-usa"
  * Task Complexity: 1 of 5
*/
// const snakeCase = (str) => {
//   let result = "";
//    let newstr='';
//   const words = str.split(" ");
//   for (let word of words) {
//     const finalWord = word.toLowerCase()+
//     newstr = newstr + "-" + finalWord;
//     // if(newstr.charAt(0)==='-'){
//     result=newstr.slice(0)
//     // return  
//     // }
    
//   }
//   return result;
// }


// const str = 'Robin Singh from USA.'
// console.log(snakeCase(str)) // "robin-singh-from-usa"



// const snakeCase = (str) => {
//   //let newStr = "";
//   const words = str.split(" ")
//    const finalword=words.join('-').toLowerCase();
//    //newStr = newStr+finalword;
//   return finalword;
// }
// const str = 'Robin Singh from USA.'
// console.log(snakeCase(str));// "robin-singh-from-usa"




const snakeCase = (str) => {
const words = str.split(" ")
const finalword=words.join('-').toLowerCase();
   return finalword;
}
const str = 'Robin Singh from USA.'
console.log(snakeCase(str));// "robin-singh-from-usa"

