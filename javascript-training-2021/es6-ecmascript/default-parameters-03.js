
//1
function greet(greeting,name){
    console.log(greeting+" "+name);
}
greet();




//2
function greet1(greeting,name="pavi"){
    console.log(greeting+" "+name);
}
greet1();



//3
function greet2(greeting,name="pavi"){
    console.log(greeting+" "+name);
}
greet2("hai");



//4
function greet3(greeting,name="pavi"){
    console.log(greeting+" "+name);
}
greet3("hai","puni");


//5
function receive(complete){
    complete()
}
 receive();


 //6
function receive(complete=()=>console.log("completed")){

    complete();
}
receive();



//7
let receive=(complete=()=>console.log("completed"))=> complete()


receive();