//1
// var items = [1,2,3,4,5];
// var copy = items.slice();

// console.log(copy) // [ 1, 2, 3, 4, 5 ]

// //2
// var items = [1,2,3,4,5];
// var copy = items.slice();

// copy.push(6)

// console.log(copy)  // [ 1, 2, 3, 4, 5, 6 ]


//3
// var items = [1,2,3,4,5];
// var copy = items.slice();

// copy[0] = 100

// console.log(copy)   //[ 100, 2, 3, 4, 5 ] 


//4
// var person = {name: 'shane'};
// var items = [1,person];
// var copy = items.slice();

// console.log(items);   //[ 1, { name: 'shane' } ]
// console.log(copy)     //[ 1, { name: 'shane' } ]


//5
// var person = {name: 'shane'};
// var items = [1,person];
// var copy = items.slice();

// copy[1].name = 'sally'
// console.log(items);   // [ 1, { name: 'sally' } ]
// console.log(copy)     //  [ 1, { name: 'sally' } ]


//6
// var items = [1,2,3,4,5];
// var copy = items.slice(0, 1);

//  console.log(copy)   //[ 1 ]


//7
// var items = [1,2,3,4,5];
// var copy = items.slice(0, 3);

//  console.log(copy) //[ 1, 2, 3 ]


//8
// var items = [0,1,2,3,4,5,6,7,8];
// var copy = items.slice(3);

//  console.log(copy) // [ 3, 4, 5, 6, 7, 8 ]

//9
// var items = [0,1,2,3,4,5,6,7,8];
// var copy = items.slice(3, 7);

//  console.log(copy) //[ 3, 4, 5, 6 ]


//10
// var items = [0,1,2,3,4,5,6,7,8];
// var copy = items.slice(-7);

//  console.log(copy) //[2,3,4,5,6,7,8]


//11
// var items = [0,1,2,3,4,5,6,7,8];
// var copy = items.slice(2, -1);

//  console.log(copy) //[ 2, 3, 4, 5, 6, 7 ]


 //12
//  var person = {
//      name: 'shane-osbourne'

//  };

//  var filters = {
//      'deslugify' : x => x.replace('-', ' '),
//      'uppercase' : x => x.toUpperCase()
//  };



//  var input = 'name | deslugify | uppercase';

//  var sections = input.split('|').map(x => x.trim());

//  console.log(sections);     // [ 'name', 'deslugify', 'uppercase' ]




 //13 
//  var person = {
//      name: 'shane-osbourne'

//  };

//  var filters = {
//      'deslugify' : x => x.replace('-', ' '),
//      'uppercase' : x => x.toUpperCase()
//  };


//  var input = 'name | deslugify | uppercase';

//  var sections = input.split('|').map(x => x.trim());
//  var ref = person[sections[0]];
//  var output = sections
//        .slice(1)
//        .reduce((prev, next) => {
//            if(filters[next]){
//                return filters[next].call(null,prev);
//            }
//            return prev;
//        },ref);

// console.log(output)       // SHANE OSBOURNE



