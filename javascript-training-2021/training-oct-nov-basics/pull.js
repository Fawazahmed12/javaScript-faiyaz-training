//3.
/**
 * Task description: Removes all given values from array using values array for equality comparisons.
 * Expected Result: ['a', 'b', 'c', 'a', 'b', 'c'] => ['b', 'b']
 * Task Complexity: 1 of 5
 * @param {Array} array - The array to query.
 * @param {Array} values - The values to remove.
 *
 * @returns {Array}
 */
const pull = (array, values) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {

    if (!values.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}
const data = ['a', 'b', 'c', 'a', 'b', 'c'];
const values = ['a', 'c'];
console.log(pull(data, values)); // ['b', 'b']



var extend = function(obj){ 
  var x = Object.keys(arguments[0]);
  var y = Object.keys(arguments[1]);
  var inter =[];
  for(var i = 0; i < x.length; i++){
      for(var k = 0; k < y.length;i++){

        if(x[i] === y[k]) {
          inter.push(y[k]);
      }

      }
  }
return inter;   
}      
