//15.
/**
  * Task description: Write a method that to combine elements from 3 arrays to 
  * generate a string
  * Expected Result: (['A', 'B', 'C'],['1', '2', '3', '4', '5', '6', '7', '8'],['a', 'e', 'i', 'o', 'u']) => 'A1aB2eC3i4o5u678'
  * Task Complexity: 2 of 5
*/
const characters = ['A', 'B', 'C'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
const vowels = ['a', 'e', 'i', 'o', 'u']
const multi_combine = (characters, numbers, vowels) => {
  const maxLength = Math.max(characters.length, numbers.length, vowels.length);
  let output = [];
  for (let i = 0; i < maxLength; i++) {
    let a1 = characters[i] || '';
    let a2 = numbers[i] || '';
    let a3 = vowels[i] || '';
    output.push(a1, a2, a3);
  }
  return output.join('');
}
console.log(multi_combine(characters, numbers, vowels))