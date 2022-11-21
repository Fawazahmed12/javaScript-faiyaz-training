//eg:

// console.log('first statement')
// const result = add(4,5);
// console.log(result);
// console.log('last statement')

// function add(a,b){
//     return a+b
// }


//synchronous (or) blocking - programming

// when we give time,you just wait for sometime ,while the execution is done it goes to the next line

//this style is not effecient

// console.log('first statement')
// const fileData=readFile(4,5)  //5sec
// // const fileData=readFile(4,5)  //5sec
// // const fileData=readFile(4,5)  //5sec
// console.log(fileData)
// console.log('last statement')



// function readFile(a,b){
//   return a+b;

// }
  
    





// explain before

// eg:1
// console.log('start execution');
// const returnedValue = doSomeOperation(3,4);
// console.log(returnedValue);
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
eg:2
console.log('start execution');
const returnedValue = doSomeOperation(3,4);
console.log(returnedValue);
const returnedValue2 = doSomeOperation(returnedValue,4);   // we have to put 7 also in that place(returnedValue)//
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