//1
console.log(...[1,2,3]);

//2
let a=[1,2,3];
let b=[4,5,6];
a.push(b);
console.log(a)
//3
let a1=[1,2,3];
let b1=[4,5,6];
a1.push(...b1);
console.log(a1)

//4
let a2=[10,20,30];
let b2=[4,5,6];
function adding(a,b,c)
{
   let result= a+b+c;
   console.log(result)
}
adding(...b2)
adding(...a1)