// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// const { GEOMETRY } = require("sequelize");

// console.log(char_count('s' ,
// 'o')

// function string(str){
//     return str.length;
// }
//     console.log(string('priyanka'));
   

// const nums = [1,12,3,6,8,2,8,4,5,9,11,7,10];
// //1.
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// for (let j = nums.length - 1; j > 0; j--) {
//   console.log(nums[j]);

// }

// for (let k = 0; k < nums.length; k += 2) {
//     console.log(nums[k]);
//   }
//  let i = 0;
// while (i < nums.length) {
//   i++;
//   console.log(nums[i]);
//   i++;
// }

//7.
// let i = 0;
// while (i < nums.length) {
//   i++;
//   console.log(nums[i]);
// }

// //8.
// let i = nums.length;
// while (i >= 0) {
//   console.log(nums[i]);
//   i--;
// }

//9. This will take some thinking
// //9. This will take some thinking
// for (let i = 0, j = i + 1; i < nums.length && j < nums.length; i++, j++) {
//   console.log(nums[i] + nums[j]);
// }


//10.Take time with this
// const nums=[1,2,3,4,5]
// let temp;
// let a= 0;
// let b = nums.length - 1; //4
// while (a < b) { 
//   temp = nums[a];  //1
//   nums[a] = nums[b]; // 1 a=5
//   nums[b] = temp; // 5 b=1
//   a++;
//   b--;
  
// }
// console.log(nums);


// const nums=[11,20,18,17,22]
//  output=[];
//  for(let i=0;i<nums.length;i++){
//    numbers=nums[i];
//    output[i]=numbers;
//  }
//  console.log(output);


// const nums=[11,20,18,17,22]
//  output=[];
//  c=0;
//  for(let i=nums.length-1;i>=0;i--){
//    a=nums[i];
//    output[c]=a;
//    c++
//  }
//  console.log(output);

//  const nums=[11,20,18,17,22]
//  output=[];
//  c=0;
//  for(let i=nums.length-1;i>=0;i--){
//    a=nums[i];
//    output[c]=a;
//    c++
//  }
//  console.log(output);


//  const nums=[11,20,18,17,22]
//  output=[];
//  c=0;
//  for(let i=nums.length-1;i>=0;i--){
//    a=nums[i];
//    output[c]=a;
//    c++
//  }
//  console.log(output);

//  arr = [1, 2, 3, 4];
//  arr1 = [];
//  for (let i = arr.length - 1; i >= 0; i--) {
//      arr1.push(arr[i]);
//  }
//  console.log(arr1);
const omit = (data,paths)
function omitKeys(obj, keys) {
    var target = {}; 

    for (var i in obj) { 
        if (keys.indexOf(i) >= 0) 
        continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) 
        continue; 

        target[i] = obj[i]; 
    } 


    return target; 
}