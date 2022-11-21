// const person={
//     name:'Priyanka',
//     age:22,
//     isMale:false,
//     printMyName:function(){
//         console.log(this.name,this.age,this.isMale)
//     }
// }
// person.printMyName();

// const person={
//     name:'Priyanka',
//     age:22,
//     a:10,
//     b:10,
//     isMale:false,
//     printsum:function(){
//         return this.a+this.b
//     }
// }
// const r=person.printsum();
// console.log(r);

// let name="Priyanka";
// let p={
//     name:'Priyanka',
//     age:22

// }
// console.log(Object.values(p))
// let n=10
// let nums=[1,2,3]
// nums.push(4)
// console.log(nums)

//array methods

// //push
// let nums=[1,2,3]
// nums.push(4)
// console.log(nums) //[1,2,3,4]

//pop
// let nums=[1,2,3]
// nums.pop()
// console.log(nums) //[1,2]

// //shift
// let nums=[1,2,3]
// nums.shift()
// console.log(nums) //[2,3]

// //unshift
// let nums=[1,2,3]
// nums.unshift(0)
// console.log(nums) //[0,1,2,3]

// //slice
// const nums = [1,2,3];
//  const a=nums.slice(0, 1);
// console.log(a) //[1]


//splice
// const nums = [1,2,3];
// nums.splice(2,0,4,5)
// console.log(nums) //[1,2,4,5,3]

// //concat
// const a = [1,2,3];
// const b=[4,5,6];
// c=b.concat(a);
// console.log(c) //[1,2,3,4,5,6]

// // join
// let a=["1,2,3"]
//  const b=a.join()
// console.log(b)  //['1,2,3']

// includes
//  const nums=[1,2,3]
//  const a=nums.includes(4)
//  console.log(a) //false

// //  indexOf
// const nums=[1,2,3]
// const a=nums.indexOf(3)
//  console.log(a) // 2

 
// // object methods
// // keys
// let name="Priyanka";
// let p={
//     name:'Priyanka',
//     age:22

// }
// console.log(Object.values(p)) //  ['Priyanka',22]

// //assign 

// // const a = { a: 1, b: 2 };
// //  const b = { b: 4, c: 5 };
// //  const c= Object.assign(a,b);
// //  console.log(a);//{ a: 1, b: 4, c: 5 }
// //  console.log(c);// { a: 1, b: 4, c: 5 }

//string methods 
// spilt
// const a = "where are you from";
//  const b= a.split(" ");
//  console.log(b) //[ 'where','are', 'you','from']

//  substring
// const a= "Hello world!";
//  const b=a.substring(6,11)
//  console.log(b) // world

// // charAt
// let a="Hello"
//  const b =a.charAt(1); 
//  console.log(b) //e

// //includes
// let a= "Hello world";
//  const b=a.includes("world")
//  console.log(b) // true

// //  let a= "Hello world";
//  const b=a.includes("welcome")
//  console.log(b) // false
 
// //repeat
// const  a = "Hello";
//  const b=a.repeat(3);
//  console.log(b) //HelloHelloHello


//  // tolowercase
//  const a= "Hello";
//  const b=a.toLowerCase();
//  console.log(b) // hello

//  // touppercase
//  const a= "Hello";
//  const b=a.toUpperCase();
//  console.log(b) //HELLO

// //Trim
//  const a = "       Hello        "
//   const b=a.trim()   
//   console.log(b) // Hello

//1.
let dividend = 18;
let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
let idx;
for (idx = 0; idx < numbers.length; idx++) {
  let factor;
  let divisor = numbers[idx];
  if (dividend % divisor === 0) {
    factor = true;
  }
  if (factor) {
    console.log(divisor + ' is a factor of ' + dividend + '!');
  }
}

//5.
/**
 * Task description: Gets all but the first element of array.
 * Expected Result: [1, 2, 3] => [2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - The array to query.
 * @returns {Array}
 */
 const tail = (array) => {
const ouput=[];
for(i=1;i<data.length;i++)
{
   output.push([i]); 
}
return output
}
const data = [1, 2, 3];
console.log(tail(data)); // [2, 3]
