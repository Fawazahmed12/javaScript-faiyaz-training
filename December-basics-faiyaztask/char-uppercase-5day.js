
// return first and last character 0f the name should be in uppercase
// output will return in string




// var myName = "fawaz";
// var outputName = myName.charAt(0).toUpperCase() + myName.slice(1,4)+ myName[ myName.length-1].toUpperCase()
// console.log(outputName)
//(here 4 is hard-coded, so we use length-1 method)



function capitalize(myName) {
  
    let outputName = myName.charAt(0).toUpperCase() + myName.slice(1,myName.length - 1) + myName[myName.length - 1].toUpperCase()
    return outputName;
}

let result = capitalize("muhammed")
console.log(result) 




// try: output will return in array

// function capitalize(myName) {

//     let output = [];
//     let outputName = myName.charAt(0).toUpperCase() + myName.slice(1,myName.length - 1) + myName[myName.length - 1].toUpperCase()
//     output.push(outputName)
//     return output;
// }
// let result = capitalize("muhammed")
// console.log(result) 
