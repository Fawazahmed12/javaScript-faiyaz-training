//1
// The sort() sorts the elements as strings in alphabetical and ascending order.

// var items = ['shane', 'sally', 'isaac'];
// items.sort()
// console.log(items)   //[ 'isaac', 'sally', 'shane' ]

//2
// var items = [10,100,50,33];
// items.sort()
// console.log(items)      //[ 10, 100, 33, 50 ]

//3
// var items=[10,30,15];
// items.sort();
// console.log(items);   //[ 10, 15, 30 ]


//4
// var items1=['p','a','i'];
// items1.sort();          
// console.log(items1);   //[ 'a', 'i', 'p' ]

//5
//  var items2=[10,30,2,40];
//  items2.sort((a,b)=>a-b);   // 10-30 = 20(compare with array values)
//  console.log(items2);   // output = [ 2, 10, 20, 30 ]


//6
//  var  items3=[10,2,30,20];
//  items3.sort((a,b)=>{
//      if(a-b===0){
//          return 0;
//      }
//      if(a-b<0){
//         return -1;
//     }
//     if(a-b>0){
//         return 1;
//     }
//  })
// console.log(items3)    //[ 2, 10, 20, 30 ]


//7
//  var  items3=[10,2,30,20];
//  items3.sort((a,b)=>{
//      if(a-b===0){
//          return 0;
//      }
//      if(a-b<0){
//         return -62662787;
//     }
//     if(a-b>0){
//         return 1562672672;
//     }
//  })
// console.log(items3)    //[ 2, 10, 20, 30 ]



//8
// var items4=['fawaz','priyanga','sowmiya'];
// items4.sort((a,b)=>b.length-a.length);  // it check the length first and compare and comes decsending to ascending order
// console.log(items4);




//9

var lessons=[
    {
        title:'javascript-join',
        views:50
    },
    {
        title:'javascript-concat',
        views:10
    },
    {
        title:'javascript-sort',
        views:200
    }
    
];
var list=lessons
.sort((a,b)=>a.views-b.views)
.map(x=>`   <li>${x.title}(${x.views})</li>`)
.join('\n');
 var output=`<ul>\n${list}\n</ul>`;
 console.log(output);