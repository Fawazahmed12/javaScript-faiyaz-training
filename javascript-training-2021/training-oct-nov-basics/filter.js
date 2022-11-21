//filter

// const employees = [
//     {
//         name: 'john',
//         age: 20,
//         salary: 10
//     },
//     {
//         name: 'george',
//         age: 25,
//         salary: 20
//     },
//     {
//         name: 'kumar',
//         age: 30,
//         salary: 35
//     },

// ]

// const output = employees.filter((a) => {
//     return a.age >= 25 && a.salary >= 30;
// });
// console.log(output) //[{name:'kumar',age:30,salary:35}]


//filter
// const numbers = [2, 1, 3, 5, 6, 4, 8, 0];
// const evenIndexValue = numbers.filter((currentEle, index) => {
//   return index % 2 == 0;
// });
// console.log(evenIndexValue); // 2,3,6,8









const sum=[1,2,3,4]
const sumValue = sum.reduce(function(previousValue, currentValue){
    const value = previousValue + currentValue;
    return value;
});
console.log(sumValue);

// },8) // accumulator -> starting value
// const sumValue1 = sum.reduce(function(currentValue, nextValue){
// const value = currentValue + nextValue;
// return value
// })
//  const sum=[1,2,3,4]
// let startingValue = 0;
// const output=sum.forEach((currentValue)=>{
//  return startingValue += currentValue;
// });
// console.log(startingValue);







