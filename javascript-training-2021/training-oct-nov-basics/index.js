// const prompt = require("prompt-sync")();

// name,gender,location
// const nameOfp1=prompt('what is your name');
// console.log(nameOfp1);
// const genderOfp1=prompt('what is your gender');
// console.log(genderOfp1);
// const locationOfp1=prompt('what is your location');
// console.log(locationOfp1);

// const nameOfp2=prompt('what is your name');
// console.log(nameOfp2);
// const genderOfp2=prompt('what is your gender');
// console.log(genderOfp2);
// const locationOfp2=prompt('what is your location');
// console.log(locationOfp2);
//  return;
// const nameOfp3=prompt('what is your name');
// console.log(nameOfp3);
// const genderOfp3=prompt('what is your gender');
// console.log(genderOfp3);
// const locationOfp3=prompt('what is your location');
 //console.log(locationOfp3);
// function introduceYourself(){
//       const participant={};
//      const name=prompt("what is your name?")
//       participant.name=name;
//      const age=prompt("what is your age?")
//       participant.age=age;
//       const location=prompt("what is your location?");
//       participant.location=location;
//      return participant;
    
//   }
//    introduceYourself();
//    introduceYourself();
//    function introduceYourself(){
//     const participant={};
//     const name=prompt('what is your name?')
//     participant.name=name;
//     const age=prompt('what is your age?')
//    participant.age=age;
//   const location=prompt('what is your location?');
//    participant.location=location;
//    return participant;
  
//  }   const p1=introduceYourself();
//   const p2=introduceYourself();
//  console.table(p1);
//    console.table(p2); 
//    function collegestudentdetails(){
//     const participant={};
//     const name=prompt('what is your name?');
//     setInObject(participant,"name",name);
//     const age=prompt('what is your age?');
//     setInObject(participant,"age",age);
//     const location=prompt('what is your location?');
//     setInObject(participant,"location",location);
//     return participant;
  
//  } 
//  function setInObject(object,key,value) {
//      object[key]=value;
//      return object
//  } 
//    const p1=collegestudentdetails();
//    const p2=collegestudentdetails();
//    const p3=collegestudentdetails();
//    console.table(p1);
//    console.table(p2);
//    console.table(p3);

//    function collegestudentdetails(){
//     const participant={};
//     const name=prompt('what is your name?');
//     setInObject(participant,"name",name);
//     const location=prompt('what is your location?');
//     setInObject(participant,"location",location);
//     const age=prompt('what is your age?');
//     setInObject(participant,"age",age);
//     const gender=prompt('what is your gender?');
//     setInObject(participant,"gender",gender);
//     const genre=prompt('what is your genre?');
//     setInObject(participant,"genre",genre);
//     return participant;
  
//  } 
//  function setInObject(object,key,value) {
//      object[key]=value;
//      return object
//  } 
//    const p1=collegestudentdetails();
//    const p2=collegestudentdetails();
//    const p3=collegestudentdetails();
   
//    console.table(p1);
//    console.table(p2);
//    console.table(p3);

function collegestudentdetails(){
  const participant={};
  const name=prompt('what is your name?');
  setInObject(participant,"name",name);
  const location=prompt('what is your location?');
  setInObject(participant,"location",location);
  const age=prompt('what is your age?');
  setInObject(participant,"age",age);
  const gender=prompt('what is your gender?');
  setInObject(participant,"gender",gender);
  const genre=prompt('what is your genre?');
  setInObject(participant,"genre",genre);
  return participant;

} 
function setInObject(object,key,value) {
   object[key]=value;
   return object
} 
 const p1=collegestudentdetails();
//  const p2=collegestudentdetails();
//  const p3=collegestudentdetails();
 const P=[p1];
 console.table(P);
 

 
   

  


  
  
   
   
 



