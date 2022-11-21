// use only map,filter,find  -  without using loop

// input:
const people = [
    {
      "name": "Kumar",
      "age": "30",
      "reportsTo": "none"
    },
    {
      "name": "Ahmed",
      "age": "27",
      "reportsTo": "Kumar"
    },
    {
      "name": "Pete",
      "age": "20",
      "reportsTo": "Ahmed"
    },
    {
      "name": "Kabeer",
      "age": "37",
      "reportsTo": "Ahmed"
    },
    {
      "name": "John",
      "age": "40",
      "reportsTo": "Kumar"
    },
    {
      "name": "Kathik",
      "age": "20",
      "reportsTo": "Kabeer"
    },
    {
      "name": "Saleem",
      "age": "30",
      "reportsTo": "Kabeer"
    }
  ]

//output:
// 1.get all the persons whose age is greater than or equal to 30
// 2. get the person whose name starts with k and end with k
// 3.create another people array with new property called  "reporter" added  whose values is "name-reportsTo"

// {
//     "name": "Ahmed",
//     "age": "27",
//     "reportsTo": "Kumar",
//     "reporter": "Ahmed-Kumar"
//   },

// 4.get the ages of all persons






// 1.get all the persons whose age is greater than or equal to 30

// let output = people.filter((a) =>{
//     return (a.age>=30)
// });
// console.log(output)



// function peopleAge(age){
// //    console.log(people[1].age)
//    console.log(people[5].name)

//     return 
// }
// let result =  peopleAge(people)
// console.log(result)




 //2. get the person whose name starts with k and end with k


function hasName(person){
    return person.name.startsWith ("K") && person.name.endsWith("k");
  }

  console.log(people.find(palindromeName));




// 3.create another people array with new property called  "reporter" added  whose values is "name-reportsTo"

// {
//     "name": "Ahmed",
//     "age": "27",
//     "reportsTo": "Kumar",
//     "reporter": "Ahmed-Kumar"
//   },


// let output = people.map(a => {
//     return {
//         name: a.name,
//         age: a.age,
//         reportsTo: a.reportsTo,

//         reporter: a.name + '-' + a.reportsTo,
//     }
// });
// console.log(output)

    



// 4.get the ages of all persons
// let ages = people.map((q) =>{
//     return (q.age)
// })
// console.log(ages)





