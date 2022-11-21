//1
var obj={
    color:"pink"
}
console.log(obj.color)

//2
var {color}={
    color:"blue"
}
console.log(color);


//3
var {color,position}={
    color:"blue",
    name:"xx",
    state:"yy",
    position:"zz"
}
console.log(color);
console.log(position);

//4
function useobj(){
   return{
    color:"blue",
    names:"aa",
    state:"bb",
    position:"cc"
}
}
 var {names,state}=useobj();
 console.log(names);
console.log(state);

//5
var[first,,,fourth]=["1","2","3","4"];
console.log(first);
console.log(fourth)


//6
var person=[
    {
    firstName:"aa",
    lastName:"xx",
    },
    {
        firstName:"bb",
        lastName:"yy"
        },
        {
            firstName:"cc",
            lastName:"zz"
            },

        ]
        person.forEach(({firstName})=>console.log(firstName))
//7
        var person=[
            {
            firstName:"aa",
            lastName:"xx",
            },
            {
                firstName:"bb",
                lastName:"yy"
                },
                {
                    firstName:"cc",
                    lastName:"zz"
                    },
        
                ]
                var [,bb]=person;
                function loglastName({lastName}){
                    console.log(lastName)
                }
                loglastName(bb)

                    
            
    



