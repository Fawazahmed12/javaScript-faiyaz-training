// Write a function that takes a string as an input and returns the first and last character of that string in an array
//So if the input is "Fawaz"
//The function should return ["F","z"]


// let word = "Fawaz"

// function returnCharacters(term) {
//     let output = [];
//     let splits = term.split("")
//     output.push(splits[0], splits[4])

//     return output;

// }

// let result = returnCharacters("Fawaz")
// console.log(result)





//now 4 is what we call hard coding
//try to. call the function with another input
//you wont get the correct output
//"muhammed"
//try to remove the hard coding



// //  pop method


// function returnCharacters(term) {
//     let output = [];
//     let splits = term.split("")
//     output.push(splits[0], splits.pop())

//     return output;

// }

// let result = returnCharacters("Fawaz")
// console.log(result)



//(or) length-1 

function returnCharacters(term) {
    let output = [];
    let splits = term.split("")
    output.push(splits[0], splits[splits.length-1])

    return output;

}

let result = returnCharacters("Fawaz")
console.log(result)










