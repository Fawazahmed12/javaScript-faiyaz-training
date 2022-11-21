//1
var names = ['fawaz', 'rasikhan', 'pavithran'];
console.log(names[0] + ' ' + names[1] + ' ' + names[2]); //  fawaz rasikhan pavithran

//2  join
var names = ['fawaz', 'rasikhan', 'pavithran'];
console.log(names.join( ' ')); // fawaz rasikhan pavithran

//3
var name1 = 'fawaz rasikhan';

var upper = name1.split(' ')
     .map(x => x.charAt(0).toUpperCase() + x.slice(1))
     .join(' ');

console.log(upper);     //Fawaz Rasikhan


// priyanga notes:

// var names = ['usage',
//     'foo-app'
// ];
// // // console.log(names[0]+' '+names[1]+' '+names[2]);
// // // console.log(names.join(' '))
// // // console.log(names.join(' -'))
// // // console.log(names.join(' .'))
// // console.log(names.join())
// var process = {
//     names=['usage',
//         'foo-app'
//     ]
//     //     // name:'xx',
//     //     // 'yy-app<input>'
// }
// if (process.names === names)
//     console.log(names.join('\n'));
// console.log(process.argv)
//  var names=['xx','yy','zz'];
//   console.log(names[0]+' '+names[1]+' '+names[2]);
//  console.log(names.join(' '))
//  console.log(names.join(' -'))
//  console.log(names.join(' .'))
//  console.log(names.join())
// var help = [
//     'xx',
//     'foo-app<inputs>'
// ];
// if (process.argv === help[2]) {
// }
// console.log(help.join(' \n'))

// var name1 = 'sowmi priya';
// var upper = name1.split('')//[xx,yy]
//     .map(x => x.charAt(0).toUpperCase() + x.slice(1))
//     .join(' ')
// console.log(upper);