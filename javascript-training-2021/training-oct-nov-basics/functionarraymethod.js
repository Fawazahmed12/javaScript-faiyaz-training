// // map

// const a = [1, 2, 3, 4];
// const b = [2, 8, 9, 0]
// const output = a.map((num1, index) => {
//     return num1 * b[index]
// });
// console.log(output) //[2,16,27,0]

// var sum = array1.map(function (num, idx) {
//     return num + array2[idx];



// var array1 = [1,2,3,4];
// var array2 = [5,6,7,8];

// var sum = array1.map(function (num, idx) {
//   return num + array2[idx];
// }); // [6,8,10,12]
// console.log(sum)



// function add (a,b){
// return a+b
// }

// add(1,2)

// const add = (a,b) => { return a+b}
// const output = a.map((num,index)=>{
//     return num+b[index]
// });
// console.log(add(1,2)) 



// filter

// const ages = [32];

// output=ages.filter(checkAdult)    // Returns [32, 33, 40]

// function checkAdult(age) {
//   return age >= 18;
// }

// const ages = [32, 33, 16, 40];

// ages.filter(checkAdult)    // Returns [32, 33, 40]

// function checkAdult(age) {
//   return age >= 18;
// }

// fliter
// const a=[10,78,55,45,23,34,13,57]
// const output=a.filter((n)=>{
//     return n>=20;
// });

// console.log(output)


// const employees = [
//     {
//         name: 'john',
//         age: 20,
//         salary: 10
//     },
//     {
//         name: 'george',
//         age: 25,
//         salary: 20
//     },
//     {
//         name: 'kumar',
//         age: 30,
//         salary: 35
//     },

// ]

// const output=employees.filter((a)=>{
//     return a.age>=25 && a.salary>=30;
// });
// console.log(output) //[{name:'kumar',age:30,salary:35}]


// let sum=0;
// const numbers = [65, 44, 12, 4];
// const output=numbers.forEach((currentValue)=>{
// return sum+=currentValue
// });
// console.log(sum)

// let output=[]
// numbers.forEach((n,i)=>{
//     numbers[i]=n
//     output.push
    
//     }
//     );
//     console.log(output)
selectedSubjects = [
    { subject_id: 711, topics: ["Test", "Test2"] },
    { subject_id: 712, topics: ["topic1", "Topic2"] }
]

theOtherSubjects = [
    {subject_id: 711, subject_name: "Science"},
    {subject_id: 712, subject_name: "Maths"}
] // fixed the ids as I supposed the should be the same, otherwise it makes no sense with the provided data

let mergedSubjects = selectedSubjects.map(subject => {
    let otherSubject = theOtherSubjects.find(element => element.subject_id === subject.subject_id)
    return { ...subject, ...otherSubject }
})