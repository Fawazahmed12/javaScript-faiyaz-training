// //Map

// const a = [1,2,3,4];
// // const b=[2,8,9,0]
// const output = a.map(myFunction=>{
//     return myFunction+myFunction
// })
// console.log(output)

// map
// const a = [1, 2, 3, 4];
// const b = [2, 8, 9, 0]
// const output = a.map((num1,index) => {
//     return num1 *b[index]
// });
// console.log(output) //[2,16,27,0]

const word="apple";
// let c=0;
function WordCount(word,letter) {
  let c=0;
    for (var i = 0; i < word.length; i++){
      if (word[i] === letter ) { 
        c++; 
    }
}

    return c; 
  }

console.log(WordCount(word, "p"));



