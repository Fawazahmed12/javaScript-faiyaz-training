// let sum = 0;
// const numbers = [65, 44, 12, 4];
// const output = numbers.forEach((currentValue) => {
//     return sum += currentValue
// });
// console.log(sum) // 125




// const ages = [3,4,5,7];

//  const output =ages.findIndex((a) => { 
// return a==4
// });
// console.log(output)



// console.log('start execution');
// const returnedValue = doSomeOperation(3,4);
// console.log(returnedValue);
// const returnedValue2 = doSomeOperation(returnedValue,4);
// console.log(returnedValue2);
// console.log('end execution');
// function doSomeOperation(a,b){
//     console.log('operation running');
//     sleep(3000);
//     return a + b;
// }
// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }









  console.log('start execution');
 doSomeOperationAsync(3,4,(output)=>{
    console.log(output)
});
console.log('end execution');
function doSomeOperationAsync(a,b,cb){
    console.log('operation running');
    setTimeout(() => {
        const sum = a + b;
        cb(sum);
        const finalresult=sum+10
        cb(finalresult);
    },3000)
}




  