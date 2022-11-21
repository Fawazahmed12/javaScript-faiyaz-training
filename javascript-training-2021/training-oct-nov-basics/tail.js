//5.
/**
 * Task description: Gets all but the first element of array.
 * Expected Result: [1, 2, 3] => [2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - The array to query.
 * @returns {Array}
 */
const tail = (array) => {
const output=[];
for(i=1;i<data.length;i++)
{
   output.push(data[i]); 
}
return output; 
}
const data = [1, 2, 3];
console.log(tail(data)); // [2, 3]


