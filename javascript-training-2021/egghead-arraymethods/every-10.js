const items=[1,2,3,4,5];
const output=items.every(x => x<10);
console.log(output);


var items1=[1,2,3,4,5];
const output1=items1.every(x => x<5);
console.log(output1);
    

var items2=[1,2,3,4,5];
const output2=items2.every(x => {
   console.log('called with',x);
   return x<5;
});

console.log(output2);


var items3=["1",1,"4"];
const output3=items3.every(x=> typeof x==='string');

console.log(output3);

const fields=[
    {
        field:'xx',
        value:'100',
        error :[]
    },
    {
        field:'yy',
        value:'',
        error :['avalible']
    },
    
];
const isValid=fields.every(x=> x.error.length===0);
console.log(isValid);


 
var lessons=[
    {
        title:'javascript-join',
        length:100,
        views:100

    },
    {
        title:'javascript-concat',
        length:300,
        views:300
    },
    {
        title:'javascript-sort',
        length:200,
        views:200
    }
    
];
function complete(x){
    return x.views===x.length
}
const result=lessons.every(complete)
console.log(result);
const isComplete=lessons.every(x=>x.views===x.length)
console.log(isComplete);



