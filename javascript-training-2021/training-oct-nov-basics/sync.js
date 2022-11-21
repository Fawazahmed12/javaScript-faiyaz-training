// console.log('start execution');
// const returnValue=doSomeOPeration(3,4);
//
// const returnValue2=doSomeOPeration(ab,4);
// console.log(returnValue2);
// console.log('end excution');
//   function doSomeOPeration(a,b,ab){
//     console.log('operation running');
//     setTimeout(()=>{
//         const sum=a+b;
//         console.log(sum);
//          ab=sum;
//          console.log(ab)

//     },3000)
// }

console.log('start execution');
const returnedValue = doSomeOperation(3,4);
console.log(returnedValue);
const returnedValue2 = doSomeOperation(returnedValue,4);
console.log(returnedValue2);
console.log('end execution');
function doSomeOperation(a,b){
    console.log('operation running');
    sleep(3000);
    return a + b;
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }










// console.log('start execution');
// doSomeOperationAsync(3,4);
// console.log('end execution');
// function doSomeOPeration(a,b){
//         console.log('operation running');
//         setTimeout(()=>{
//             const sum=a+b;
//             console.log(sum);
//         },3000)
//     }
    