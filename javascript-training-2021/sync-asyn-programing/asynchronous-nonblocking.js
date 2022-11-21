

//asynchronous (or) non-blocking programming

// console.log('first statement')
// readFileAsync(4,5);  //5sec
// console.log('last statement')


// function readFileAsync(a,b){
//     setTimeout(() =>{
//         console.log(a+b);
//     },5000)

// }


//eg
// console.log('first statement')
// readFileAsync(4,5);  //5sec
// readFileAsync(4,5);  //5sec
// readFileAsync(4,5);  //5sec
// console.log('last statement')


// function readFileAsync(a,b){
//     setTimeout(() =>{
//         console.log(a+b);
//     },3000)

// }



//eg
// code is very hard to reason when we use callback:
// every async function need to be written accepting callback

console.log('first statement')

readFileAsync(4,5,(r1)=>{
     readFileAsync(r1,5,(r2)=>{     // first output will take and use in next input 
        console.log(r2)
     }) 
   
});  //5sec

console.log('last statement')


function readFileAsync(a,b,cb){
    setTimeout(() =>{
        cb(a+b);
    },3000)

}


//output
// first statement
// last statement
// 14                               //it should come with the time of 6 sec








//before explain(older)
// eg:1
// console.log('start execution');
// doSomeOperationAsync(3,4);
// console.log('end execution');
// function doSomeOperationAsync(a,b){
//     console.log('operation running');
//     setTimeout(() => {
//         const sum = a + b;
//                                             //we couldn't put like that in this line = console.log(sum); o/p come
        
//     },3000)
// }
// we use callback to get output in asynchronous
// eg:2 
// console.log('start execution');
// doSomeOperationAsync(3,4,(output)=>{
//     console.log(output)
// });
// console.log('end execution');
// function doSomeOperationAsync(a,b,cb){
//     console.log('operation running');
//     setTimeout(() => {
//         const sum = a + b;
//         cb(sum);
        
//     },3000)
// }
// fayaaz task: 1st output is given to the 2nd input


// console.log('start execution');
// doSomeOperationAsync(3,4,(output)=>{
//     console.log(output)
//     doSomeOperationAsync(7,4,(output2)=>{
//         console.log(output2)
//     });
// });
// console.log('end execution');
// function doSomeOperationAsync(a,b,cb){
//     console.log('operation running');
//     setTimeout(() => {
//         const sum = a + b;
//         cb(sum);
        
//     },3000)
// }
