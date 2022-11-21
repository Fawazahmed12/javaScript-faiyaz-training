//there are 4 types of binding

//implicit binding
//eg:
// let person = {
//     name: 'faiyaz',
//     showName: function () {
//         console.log(this.name)
//     }
// }
// person.showName();   // faiyaz

//another example:

// let person = {
//     name: 'faiyaz',
//     showName: function () {
//         console.log(this.name)
//     },

//   address : {
//     street: 'chennai',
//         showStreet :function(){
//             console.log(this.street);
//         }
// }
// }
// person.address.showStreet();   // chennai


// explicit binding
//1:call,2:apply,3:bind
//eg
//1:call

//with pass arguement
// let faiyaz = {
//     name: 'faiyaz',
//     age:12,
//     showName: function () {
//         console.log(this.name)
//     }
// }
//    let rassi ={
//         name: 'rassi',

    
// }
// faiyaz.showName.call(rassi); 


//another example
//with pass a,b

// let faiyaz = {
//     name: 'faiyaz',
//     age:12,
//     showName: function (a,b) {
//         console.log(this.name,a,b)
//     }
// }
// faiyaz.showName(2,3);
//    let rassi ={
//         name: 'rassi',

    
// }
// faiyaz.showName.call(rassi,4,5); 


//2:apply

// let faiyaz = {
//     name: 'faiyaz',
//     age:12,
//     showName: function (a,b) {
//         console.log(this.name,a,b)
//     }
// }
// faiyaz.showName(2,3);
//    let rassi ={
//         name: 'rassi',

    
// }
// faiyaz.showName.apply(rassi,[4,5]); 


//3:bind

// let faiyaz = {
//     name: 'faiyaz',
//     age:12,
//     showName: function (a,b) {
//         console.log(this.name,a,b)
//     }
// }
// faiyaz.showName(2,3);
//    let rassi ={
//         name: 'rassi',

    
// }
// const rassishowName = faiyaz.showName.bind(rassi); 
// rassishowName(4,5)


// new binding
// let p1 = {
//     name:"faiyaz",
//     age : 10,
     
// }
// console.log(p1);
// function person (name,age){
//     this.name = name;
//     this.age = age;

// }
// let p2 = new person ("faiyaz",10);
// console.log(p2);



//constructor
// using class=advance method

// let p1 = {
//     name: 'faiyaz',
//     age: 22
// }
// console.log(p1);
// class Person {
//  constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// let p2 = new Person('faiyaz', 10);
// console.log(p2);




//window or global binding
// let nums=[1,2,3,4];
// nums.forEach(function(e){
//      console.log(this)          //console.log(e) 

// })


// another example

// let nums=[1,2,3,4];
// nums.forEach(function(e){
//      console.log(this)

// })

