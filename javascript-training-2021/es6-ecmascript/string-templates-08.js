//1
let names="hai";
var greetings=`${names} ,"world"`;
console.log(greetings);


//2 
 var x=1;
 var y=2;
 var result=`${x}+${y}=${x+y}`;
 console.log(result);

 
 
 //3
 var message=`It is ${new Date().getDate()} I'm sleeppy`;
 console.log(message);

 //4
function tag(string,...values){
    console.log(string);
    console.log(values);
}
 var message= tag`It is ${new Date().getDate()} I'm sleeppy`;
 console.log(message);

 //5
function tag(string,...values){
    if (values[0]>20){
        values[1]="awake";
    }
    return `${string[0]}${values[0]}${string[1]}${values[1]}`
}
 var message= tag`It is ${new Date().getHours()} I'm ${""}`;
 console.log(message);