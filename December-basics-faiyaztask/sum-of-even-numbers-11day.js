// write a function that takes an array of numbers and returns the sum of even numbers in that array
// so if the input is. [1,3,2,5,6] then output is
//  2 + 6 = 8



let numbers = [1, 3, 2, 5, 6]
function returnSumOfEvenNumbers(arrayOfNumbers) {
    let output = 0;
    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {
            output = output + numbers[i]
        }
    }
    return output;
}
let result = returnSumOfEvenNumbers(numbers)
console.log(result)





//let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sumEvens = (numStr) => { 
   // let sum = 0; for (let i = 0; i < numStr. length; i++) {
       // if (i % 2 === 0){
        //    sum = sum + numStr[i];
        //  }
        //  }
        //   return sum;
        //  } console. log(sumEvens(numStr));