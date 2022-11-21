1
// var items=[1,2,3,4,5];
// var flitered=items.filter(a => a>3);
// console.log(flitered); // [ 4, 5 ]

// 1(ANOTHER TYPE)  FUNCTION  USING
let items=[1,2,3,4,5];
 let items1=items.filter(function(a){
    return (a>3);

});
  console.log(items1)  // [ 4, 5 ]


// 1(ANOTHER TYPE)
let items=[1,2,3,4,5];
 let items1=items.filter((a)=>{
    return (a>3);

});
  console.log(items1)     // [ 4, 5 ]






//2
// var people=[
//     {
//         name:'x',
//         pets:['aa','bb','cc']
//     },

// {
//         name:'y',
//         pets:['aa','bb']
//     },
//     {
//         name:'z',
//         pets:[]
//     },
// ]
// var flitered1=people.filter(x => x.pets.length)
// console.log(flitered1);



// //3
// var lessons=[
//     {
//         title:'javascript-join',
//         views:1000,
//         tags:['array','join']
//     },
//     {
//         title:'javascript-concat',
//         views:1050,
//         tags:['array','concat']
//     },
//     {
//         title:'javascript-sort',
//         views:2000,
//         tags:['array','sort']
//     },
//     {
//         title:'javascript-bind',
//         views:1200,
//         tags:['function','bind']
//     },
// {
//     title:'javascript-sort',
//     views:2000,
//     tags:['array','sort']
// } 
// ];
// var minView=1000;
// var searchTerm='array';

// var flitered2=lessons
// .filter(x=>x.tags.indexOf(searchTerm)>-1)
// .filter(x=>x.views>minView)
// .sort((a,b)=>b.views-a.views)
// .map(x=>` <li>${x.title}</li>`)
// .join('\n');
// console.log(`<ul> ${flitered2}   </ul>`);

// output
{/* <ul>  <li>javascript-sort</li>
 <li>javascript-sort</li>
 <li>javascript-concat</li>   </ul> */}

