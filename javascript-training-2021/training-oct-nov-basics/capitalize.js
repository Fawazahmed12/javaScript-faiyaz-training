

//20.
/**
  * Task description: Write a method that creates to capitalize the first letter of each word in a string.
  * Expected Result: (js string exercises) => "Js String Exercises"
  * Task Complexity: 1 of 5
*/
const capitalize = (str) => {

  let newstr = "";
  const words = str.split(" ");
  for (let word of words) {
    const finalWord = word[0].toUpperCase() + word.substring(1)
    newstr = newstr + " " + finalWord;
  }
  return newstr;
}
const str = 'js string exercises'
console.log(capitalize(str)) // "Js String Exercises"
