//6.
/**
  * Task description: Write a method that to print a even Numbers only without conditional statement using loop.
  * Expected Result: (15) => 0,2,4,6,8,10,12,14,16,18,20,22,24,26,28
  * Task Complexity: 1 of 5
*/

const printEvenNumbers = (size) => {


  const a = []
  for (let i = 0; i < size; i++) {

    a.push(i * 2);
  }
  return a.join();
}
const size = 15
console.log(printEvenNumbers(size))







// const printEvenNumbers = (size) => {
//   for(i=0;i<size;i++)
//   {
//      console.log(i*2); 
//   }
// }
// const size = 15
// console.log(printEvenNumbers(size))
