//write a function that takes an array of numbers as an argument and return the even numbers

// using  for of loop

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function returnEvenNumbers(arrayOfNumbers) {
//     let output = [];
//     for (let num of numbers) {
//         if (num % 2 == 0) {
//             output.push(num)

//         }

//     }

//     return output;
// }
// let result = returnEvenNumbers(numbers)
// console.log(result)



//  using for loop

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function returnEvenNumbers(arrayOfNumbers) {
//     let output = []
//     for (let i = 0; i < numbers.length; i++) {

//         if (numbers[i] % 2 == 0) {
//             output.push(numbers[i])
//         }

//     }
//     return output
// }
// let result = returnEvenNumbers(numbers)
// console.log(result)






// try with myself
//write a function that takes an array of numbers as an argument and return the odd numbers

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function returnOddNumbers(arrayOfNumbers) {
//     let output = [];
//     for (let num of numbers) {
//         if (num % 2 == 1) {
//             output.push(num)

//         }

//     }

//     return output;
// }
// let result = returnOddNumbers(numbers)
// console.log(result)



//return all  the numbers in arrays
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function returnOddNumbers(arrayOfNumbers) {
//     let output = [];
//     for (let num of numbers) {

//             output.push(num)



//     }

//     return  output;
// }
// let result = returnOddNumbers(numbers)
// console.log(result)




// reverse the values

let numbers = [1, 2, 3, 4, 5, 6]

function returnReverseValues(arrayOfNumbers) {
    
    let output = [];
    let outputArray = arrayOfNumbers.reverse()
    // output.push(outputArray)
    
    return outputArray;
}

let result = returnReverseValues(numbers)
console.log(result)


/* or = without using reverse method

let number=[1,2,3,4,5,6,7,8,9,10]
//console.log(number.reverse());
arr=[];
for(let i=number.length-1; i>=0;i--){
    arr.push(number[i]);
}
console.log(arr);*/










