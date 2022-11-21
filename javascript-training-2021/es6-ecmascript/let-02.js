//1
var message='hai';
{
    var message='bye'
}
console.log(message)


//2
let message1='hai';
{
    let message1='bye'
}
console.log(message1)

//3 
let message2='hai';
function greet()
{
    let message2='bye'
}
console.log(message2)

//4
var fun=[];
for(var i=0;i<10;i++){
   fun.push(function() {
       console.log(i);

   })
}
fun.forEach((f)=>{
f();
})


//5
var fun=[];
for(let i=0;i<10;i++){
   fun.push(function() {
       console.log(i);

   })
}
fun.forEach((f)=>{
f();
})


//6
function varfun(){
    var pre=0;
    var cur=1;
    var i;
    var temp;
    for( var i=0;i<n;i+1){
        temp=pre;
        pre=cur;
        cur=temp+cur;
        
    }
    
}
console.log(varfun());

//7
 
function letfun(){
    let pre=0;
    let cur=1;
    let i;
    let temp;
    for(let i=0;i<n;i+1){
        let temp=pre;
        pre=cur;
        cur=temp+cur;
        
    }
    
}
console.log(letfun());

