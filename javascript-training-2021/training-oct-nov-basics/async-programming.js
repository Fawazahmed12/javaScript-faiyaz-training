// console.log('start execution');
//  doSomeOperationAsync(3,4,(output)=>{
//     console.log(output)
// });
// console.log('end execution');
// function doSomeOperationAsync(a,b,cb){
//     console.log('operation running');
//     setTimeout(() => {
//         const sum = a + b;
//         cb(sum);
//         const finalresult=sum+10
//         cb(finalresult);
//     },3000)
// }

// console.log('start execution');
//  doSomeOperationAsync(3,4,(output)=>{
//     console.log(output)
//     doSomeOperationAsync(output,4,(output2)=>{  
//     console.log(output2)
//     })
// });
// console.log('end execution');
// function doSomeOperationAsync(a,b,cb){
//     console.log('operation running');
//     setTimeout(() => {
//         const sum = a + b;
//         cb(sum);

//     },3000)
// }


// const inputstr = "malayalam";
// function occurences(str){
//     let output= [];
//     for (let i = 0; i < str.length; i++) {
//         if (output[str[i]]) {
//         output[str[i]] += output[str[i]];
//         } else {
//           output[str[i]] = 1;
//         }
//       }
//       return output;

//   };

// // const out = {
// //   m:2,
// //   a:4,
// //   l:2,
// //   y:1
// // }
// //  console.log(occurences( inputstr))


// // const countRepeatChar = (str) => {
// //     let obj = {};

// //     if (str) {
// //       for (let i = 0; i < str.length; i++) {
// //         if (obj[str[i]]) {
// //           obj[str[i]] += obj[str[i]];
// //         } else {
// //           obj[str[i]] = 1;
// //         }
// //       }
// //       console.log(obj);
// //     }
// //   };
// //   countRepeatChar("aabcddeee");

const inputstr = "malayalam";
const output = {}
for (let i = 0; i < inputstr[i]; i++) {
  // console.log(inputstr[i]);
  const char = inputstr[i];
  if (!output[char]++) {
    output[char] == 0;
  }
 return output[char]++;

}
console.log(output);





