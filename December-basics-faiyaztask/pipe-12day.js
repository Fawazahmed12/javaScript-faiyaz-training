// write a function that converts the following input to the following output

//let input  = [
//     "lamp|switch" , "switch|bulb", "lamp|philip", "bulb|zero"
// ]

// let output = {
//     lamp:{
//         children:['switch','philip']
//     },
//     switch:{
//         children:['bulb']
//     },
//     bulb:{
//         children:['zero']
//     }
// }

// you have to convert string to object
// "|". string before this symblol is key and after is children of that key
// you have both input and output
// think and proceed step by step
// you can discuss the requirement with hidhaya but dont discuss any solution








let input = [
    "lamp|switch", "switch|bulb", "lamp|philip", "bulb|zero"
]

// function returnObject(arr) {
//     let output = {};
//     for (let i = 0; i < arr.length; i++) {
//         let parentChildPair = arr[i].split("|");
//         let parent = parentChildPair[0];
//         output[parent] = { children: [] }
//     }                                                       // empty output will return.try it
//     for (let k = 0; k < arr.length; k++) {
//         let parentChildPair = arr[k].split("|");
//         let parent = parentChildPair[0];
//         let child = parentChildPair[1];
//         output[parent].children.push(child)
//     }
//     return output;
// }
// let result = returnObject(input)
// console.log(result) 


// another method(use if else)

function returnObject(arr) {
    let output = {};

    for (let i = 0; i < arr.length; i++) {
        let parentChildPair = arr[i].split("|");
        let parent = parentChildPair[0];
        let child = parentChildPair[1];
        if (parent in output) {
            output[parent].children.push(child)
        } else {
            output[parent] = { children: [child] }
           
        }
    }
    return output;
}
let result = returnObject(input)
console.log(result) 





