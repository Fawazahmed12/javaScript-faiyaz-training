
  
//   // example
//   const one =  function () {
//     console.log('one');
    
//   };
  
//   function two() {
//     console.log('two');
    
//   }
  
//   function three() {
//     console.log('three');
    
//   }
  
//   const fns = [];
//   fns.push(one);
//   fns.push(two);
//   fns.push(three);
  
//   fns.forEach((a) => {
//     console.log(a(3));
//   });




  // another example:
  const one = function (a) {
    console.log('one');
    return a;
  };
  
  function two(b) {
    console.log('two');
    return b;
  }
  
  function three(c) {
    console.log('three');
    return c;
  }
  
  const fns = [];
  fns.push(one);
  fns.push(two);
  fns.push(three);
  
  fns.forEach((a) => {
    console.log(a(3));
  });





  