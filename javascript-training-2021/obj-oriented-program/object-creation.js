// points to remember:
//1. object creation 
//2. members - properties + methods
//3. method duplication when using object literal
//4. factory
//5. constructor - use capital for first letter
//6. objects are dynamic
//7. for in loop to iterate

//8. use class for creating objects

//eg

// const circle = {
//     radius : 1,
//     location :{
//         x : 10,
//         y: 20,
//     },
//     draw : function (){
//         console.log('drawing')

//     }
// }
// circle.draw()


//another example (this is not ideal)
// const circle1 = {
//     radius : 1,
//     location :{
//         x : 10,
//         y: 20,
//     },
//     draw(){                                         // shorthand syntax
//         console.log('drawing')

//     },
//     move(){                                       
//         console.log('moving')

//     }
// }


// const circle2 = {
//     radius : 2,
//     location :{
//         x : 10,
//         y: 20,
//     },
//     draw(){
//         console.log('drawing')

//     },
//     move(){                                        
//         console.log('moving')  

//     }
// }
// it is  not ideal , so we go to next step.


//3. method duplication when using object literal
//4. factory
//  function createCircle(radius){
//      return{
//         radius : 2,
//         location :{
//             x : 10,
//             y: 20,
//         },
//         draw(){
//             console.log('drawing')
    
//         },
//         move(){                                        
//             console.log('moving')  
    
//         }

//      }
//  }
//  const circle1 = createCircle(1);
//  const circle2 = createCircle(2);

 // it is also not ideal , so we go to next step


 //5. constructor - use capital for first letter

//  function Circle(radius){
//      this.radius = radius;
//      this.draw = function(){
//          console.log('drawing');
//      }
//  }
//  const circle1 = new Circle (1);

//this is ideal way to create objects.


//6. objects are dynamic

//continue with 5
// circle1.location = {
//     x:10,
//     y:20,
// }
// circle1.move = function (){
//     console.log('moving')
// }


//7. for in loop to iterate


// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('drawing');
//     }
// }
// const circle1 = new Circle (1);

// for(let k in circle1){
//     console.log(k)
// }

//8. use class for creating objects
 -
// current way of creting objects is class
 
// class circle {
//     constructor (radius) {
//         this.radius = radius
//     }
//     draw(){
//         console.log('drawing')
//     }
// }
// const circle = new circle (12)
// circle.draw();


//combination of old way and new way
//old way
// function CircleOld(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('drawing');
//     }
// }
// const circle1 = new CircleOld (2);
// CircleOld.draw();
// //new way
// class circle {
//     constructor (radius) {
//         this.radius = radius
//     }
// }
// const circle = new circle (12)
// CircleOld.draw();  



//eg
// class HtmlDiv{
//     click(){
//         console.log('clicking')
//     }
// }

// class HtmlInput{
//     click(){
//         console.log('clicking')
//     }
// }

// class HtmlSelect{
//     click(){
//         console.log('clicking')
//     }
// }


// inheritance to avoid redudant

// super class , parent class , base class

class HtmlElement{
    click(){
        console.log('clicking')
    }
}

class HtmlDiv extends HtmlElement{
   
}
class HtmlInput extends HtmlElement{
   
}
class HtmlSelect extends HtmlElement{
   
}

const div = new HtmlDiv();
const input = new HtmlInput();
const select = new HtmlSelect();


div.click()