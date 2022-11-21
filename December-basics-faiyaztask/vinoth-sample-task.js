// input = "v1i2n3o5t4h"

// output = "vinoth12345"


// hardcoding

// const firstName = "v1i2n3o5t4h"
// function returnString (str){
//     let output = "";
//     for (let i=0;i<str.length;i+=2){
//         output += str[i]
          
//     }

//     return output;
// }
// let result = returnString(firstName)
// console.log(result) // ouput = vinoth







const alphaNumeric = "v1i4n2o5t3h6";

let alphabets = alphaNumeric.replace(/[0-9]/g, '');
let numbers = alphaNumeric.replace(/\D/g,'');

let output = "";

output = output+alphabets +numbers;

console.log(output);