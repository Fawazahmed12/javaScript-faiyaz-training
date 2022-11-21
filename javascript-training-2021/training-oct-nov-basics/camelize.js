//19.
/**
  * Task description: Write a method to convert a string into camel case.
  * Expected Result: (JavaScript exercises) => "JavaScriptExercises"
  * Task Complexity: 1 of 5
*/
const camelize = (str) => {


    let newstr = "";
    const words = str.split(" ");
    for (let word of words) {
        const finalWord = word[0].toUpperCase() + word.substring(1)
        newstr = newstr +" " +finalWord
    }
    return newstr;
}


const str = 'JavaScript exercises'
console.log(camelize(str)) // "JavaScriptExercises"
