//write a function that takes an array of numbers and returns the largest number in that array
//eg
//if [1,4,2,7] is the input
//then 7 is the output
//you only need for loop and if condition to do this
//try and let me know

let numbers = [1,3,5,2,4,7,9,8,10]
function biggestNumberInArray (arr){
    let biggest = arr[0];
    
    for(let num of arr){
        if(num>biggest){
            biggest=num
        }
    
    }
    return biggest; 
}
let result = biggestNumberInArray(numbers)
console.log(result)











