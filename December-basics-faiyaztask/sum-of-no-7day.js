//write a function that take array of numbers are argument and return the sum of the numbers in the array

let numbers = [1,2,3,4]

function sumOfTheNumbers(arrayOfNumbers){
    let output = 0;

    for(let add of arrayOfNumbers){
      output = output + add
        
    }
return output;
}

let result = sumOfTheNumbers(numbers)
console.log(result)  // 0utput=10



//sample try:
// let numbers = [1,2,3,4]
// let output = 0;
// for(let num of numbers){
//    output = output+ num  
// }
// console.log(output);







// output = [10]

// let numbers = [1,2,3,4]

// function sumOfTheNumbers(arrayOfNumbers){
//     let output = 0;
//     let arr=[];

//     for(let add of arrayOfNumbers){
//       output = output + add
     
    
    
//     }
//     arr.push(output)
// return arr;
// }

// let result = sumOfTheNumbers(numbers)
// console.log(result)  
















