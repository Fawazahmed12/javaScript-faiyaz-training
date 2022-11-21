/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let maximum = 0;
    const output = [];
    for (const candy of candies) {
        check = (candy > maximum) && (maximum = candy);
    // output.push(candies[candy] + extraCandies >= maximum);
    }
    for (i = 0; i < candies.length; i++) {
        output.push(candies[i] + extraCandies >= maximum);
    }
    return output;
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))







// var kidsWithCandies = function(candies, extraCandies) {
//     let maximum = Math.max(candies);
//     let result = [];
//     for (let i=0; i<candies.length; i++) {
//         if ((candies[i]+extraCandies)>=maximum) {
// 		result.push(true);
// 		} else {
// 		result.push(false);
// 		};
//     };
//     return result;
// };
// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))



// var kidsWithCandies = function (candies, extraCandies) {
//     let maximum =Math.max(candies);
//     const output = [];
//     for (i = 0; i < candies.length; i++) {
//         if ((candies[i] + extraCandies) >= maximum) {
//             output.push(true);
//         } else {
//             output.push(false);
//         };
//     }
//     return output;
// };
// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))











