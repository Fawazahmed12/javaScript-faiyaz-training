// array.prototype.indexOf();
//1

// var family = ['fawaz', 'sally', 'Issac', 'kittie']
// console.log(family.indexOf('kittie'));  // 3

//2
// var family = ['fawaz', 'sally', 'Issac']
// console.log(family.indexOf('kittie'));  // -1

//3
// var family = ['fawaz', 'sally', 'Issac']
// var kittyExists = family.indexOf('kittie') > -1;

// console.log(kittyExists);  // false

//4
// var family = ['fawaz', 'sally', 'Issac', 'kittie' ]
// var kittyExists = family.indexOf('kittie') > -1;

// console.log(kittyExists);  // true


//5
// var family = ['fawaz', 'sally', 'Issac' ]
// var kittyExists = family.indexOf('kittie') > -1;

// if(!kittyExists){
//     family.push('kittie')
// }

// console.log(family);  // [ 'fawaz', 'sally', 'Issac', 'kittie' ]


//6
// var family = ['fawaz', 'kittie', 'sally', 'Issac']
// console.log(family.indexOf('kittie', 2));  // -1


//7
// var family = ['fawaz', 'kittie', 'sally', 'Issac']
// console.log(family.indexOf('kittie', 1));  // 1


//8
// var x={
//     name:'X'
// }
// var y={
//    name:'Y'
// }
// var z={
//     name:'Z'
// } 
//  var family=['x','y'];
//  console.log(family.indexOf('z'))  // -1



 //9

var  whiteList=['.css','.js'];
var events=[
    {
        file:'css/core.css'
    },
    {
        file:'js/app.js'
    },
    {
        file:'index.html'  
    }
];

var flitered=events.filter(event=>{
    var ext=require('path').extname(event.file);
    return whiteList.indexOf(ext)>-1
})
console.log(flitered);    //[ { file: 'css/core.css' }, { file: 'js/app.js' } ]
