/**
 * @param {string} s
 * @return {string}
 */
//  Input: s = "a1c1e1"
//  Output: "abcdef"

// s = "a1c1e1"

// var replaceDigits = function (s) {

//     let result = s.replace(/1/gi, "b");

//     return result;

// };
// console.log(replaceDigits(s))


/**
 * @param {string} s
 * @return {string}
 */
// let s = "a1c1e1"

// var replaceDigits = function (s) {
//   // let output = []
//   output = s.split()
//   for (i = 0; i < s.length; i++) {
//     let a;
//     if (s[1] == 1) {
//       a = s.replace(/1/g, "b")
//     }
//     output.push(a)
//   }
//   return output.join("");
// };
// console.log(replaceDigits(s))


// let s = "a1c1e1"
// function replaceDigits(s) {
//     let res = s.split("");
//     for (let i = 1; i < s.length; i += 2) {
//       res[i] = change(String(res[i-1]), Number(res[i]));
//     }
//     return res.join("");
//   }
//   function change(c, x) {
//     let r = c.charCodeAt(0) + x;
//     return String.fromCharCode(r);
//   }
//   console.log(replaceDigits(s))




//  let s = "a1c1e1"
// var replaceDigits = function(s) {
//   let a=s.split('');
//   for(i=0;i<s.length;i+=2){
//     a[i]=s

//   }
//   return a.join("")

// };
// console.log(replaceDigits("a1c1e1"))
// let s = "a1c1e1"
// var replaceDigits = function (s) {
//   for (let i = 1; i < s.length; i += 2) {
//     let value = String.fromCharCode(s[i - 1].charCodeAt() + Number(s[i]));
//     s = s.replace(s[i], value);
//   }
//   return s;
// };
// console.log(replaceDigits(s))



var replaceDigits = function(s) {
  let s = "a1c1e1"
  let 
  };












