function success(val){
    console.log('operation successfull');
    console.log('returned value',val)
  }
  function error(){
    console.log('operation failed');
  }
  const options = {
    success:success,
    error:error,
  }
  function operation(options){
    console.log('operation happening');
    options.success(10);
  }
  operation(options);
//   const myMath = {
//     double(num){
//       return num * 2
//     },
//     isEven(num){
//       return num%2 == 0
//     }
//   }
//   const doubled  = [1,3,5].map(myMath.double);
//   const even  = [1,4,5].filter(myMath.isEven);
//   [1,5,7].forEach(console.log)