//1
var items = [1,2];
var newItems = items.concat(3,4,5)
console.log(newItems)  //[ 1, 2, 3, 4, 5 ]

//2
var items = [1,2];
var newItems = items.concat(3,4,5,'string',undefined)
console.log(newItems) // [ 1, 2, 3, 4, 5, 'string', undefined ]

//3
var items = [1,2];
var newItems = items.concat([3,4,5], [6,7])
console.log(newItems)  //[1,2,3,4,5,6,7]

//4
var items = [1,2];
var newItems = items.concat([3,[4,5]], [6,7])
console.log(newItems)  //[ 1, 2, 3, [ 4, 5 ], 6, 7 ]


//5 - object 
var people = [
    {
        name: 'shane'
    },
    {
        name: 'sally'
    }
];

people.forEach(function(person){
    console.log(person.name)
})

// 6
var people = [
    {
        name: 'shane'
    },
    {
        name: 'sally'
    }
];
var people2 = [
    {
        name: 'fawaz'
    },
    {
        name: 'priyo'
    }
];
people.forEach(function(person){
    console.log(person.name)
})
people2.forEach(function(person){
    console.log(person.name)
})


//7
var people = [
    {
        name: 'shane'
    },
    {
        name: 'sally'
    }
];
var people2 = [
    {
        name: 'fawaz'
    },
    {
        name: 'priyo'
    }
];
people.concat(people2).forEach(function(person){
    console.log(person.name)
})