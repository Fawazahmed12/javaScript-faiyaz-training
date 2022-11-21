// exercise:
// eg=1

// const events = {
//   add: function () {
//     console.log("added called");
//   },
// };

// function emit() {
//   events.add();
// }

// emit();           // output:added called



// eg=2

const events = {};

function fire() {
  events.new();
}

function add(name, fn) {
  events[name] = fn;
}

add("new", function () {
  console.log("added called");
});

console.log(events);

fire();

// output:
// { new: [Function (anonymous)] }
// added called



// eg=3


// const events = {};

// function fire(eventName) {
//   events[eventName]();
// }

// function add(name, fn) {
//   events[name] = fn;
// }

// add("new", function () {
//   console.log("added called"); // output:added called
// });

// fire("new");


// eg=4


// const events = {};

// function emit(eventName) {
//   events[eventName]();
// }

// function on(name, fn) {
//   events[name] = fn;
// }

// on("new", function () {
//   console.log("added called");
// });

// on("new", function () {
//   console.log("added two called");        //it will show in console,because it becomes overide
// });

// emit("new");                              // output:added two called




//i want multiple function to call, so we can use empty array

// eg=5


// const events = {};

// function emit(eventName){

//   // events[eventName]();                //it show error. so command it.
 
// }

// function on(name,fn){
//   if(events[name]){
//     events[name].push(fn)
//   }else{
//     events[name] = [];
//     events[name].push(fn)
//   }
// }


// on('new', function(){
//   console.log('added called');
// })

// on('new', function(){
//   console.log('added two called');
// })


// console.log(events)                              //{ new: [ [Function (anonymous)], [Function (anonymous)] ] }
// emit('new');



// eg=6

// const events = {};

// function emit(eventName){
//   events[eventName].forEach((fn) => {
//     fn()
//   })
// }

// function on(name,fn){
//   if(events[name]){
//     events[name].push(fn)
//   }else{
//     events[name] = [];
//     events[name].push(fn)
//   }
// }


// on('new', function(){
//   console.log('added called');
// })


// on('new', function(){
//   console.log('added two called');
// })


// on('old', function(){
//   console.log('added old called');
// })

// console.log(events)

// emit('new');

// emit('old');


//output:
// {
//   new: [ [Function (anonymous)], [Function (anonymous)] ],
//   old: [ [Function (anonymous)] ]
// }
// added called
// added two called
// added old called