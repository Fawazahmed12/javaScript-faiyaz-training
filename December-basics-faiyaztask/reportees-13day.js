// const people = [
//     {
//       "name": "Kumar",
//       "age": "30",
//       "reportsTo": "none"
//     },
//     {
//       "name": "Ahmed",
//       "age": "27",
//       "reportsTo": "Kumar"
//     },
//     {
//       "name": "Pete",
//       "age": "20",
//       "reportsTo": "Ahmed"
//     },
//     {
//       "name": "Kabeer",
//       "age": "37",
//       "reportsTo": "Ahmed"
//     },
//     {
//       "name": "John",
//       "age": "40",
//       "reportsTo": "Kumar"
//     },
//     {
//       "name": "Kathik",
//       "age": "20",
//       "reportsTo": "Kabeer"
//     },
//     {
//       "name": "Saleem",
//       "age": "30",
//       "reportsTo": "Kabeer"
//     }
//   ]


//   const output = [
//     { "name": "Kumar", "age": "30", "reportees": ["Ahmed", "John"] },
//     { "name": "Ahmed", "age": "27", "reportees": ["Kabeer", "Pete"] },
//     { "name": "Pete", "age": "20", "reportees": [] },
//     { "name": "Kabeer", "age": "37", "reportees": ["Kartik", "Saleem"] },
//     { "name": "John", "age": "40", "reportees": [] },
//     { "name": "Kathik", "age": "20", "reportees": [] },
//     { "name": "Saleem", "age": "30", "reportees": [] }
//   ]



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

//   function informationPerPerson (data){
//   let output = [];

//   for (let i = 0; i < data.length; i++) {
    
//     if (data in output) {
//     output[data[i]].reportees.push(data)
      
//     } else {
//       output[data[i]] = { reportees: [] }
//     }

//   }
//   return output;
// }
// let result = informationPerPerson(people)
// // console.log(result)




function extractReportees(people) {
  let output = []
  for (let i = 0; i < people.length; i++) {
    let person = {};
    person.name = people[i].name;
    person.age = people[i].age;
    person.reportees = [];
    output.push(person);
  }
  for(let k = 0; k < people.length; k++){
    let person = output.find((p)=>{
      //  return people[name] == p[k]
      return p.name === people[k].reportsTo;      
    })
    if(person){
      person.reportees.push(people[k].name);
    }
  }
  return output;
}
let result = extractReportees(people);
console.log(result);
 