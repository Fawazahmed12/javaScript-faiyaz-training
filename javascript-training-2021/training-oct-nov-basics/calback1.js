const employees = [
    {
        name: 'john',
        age: 20,
        salary: 10
    },
    {
        name: 'george',
        age: 25,
        salary: 20
    },
    {
        name: 'kumar',
        age: 30,
        salary: 35
    },
]
const cars = [
    {
        make: '2000',
        model: 'ford',
        type: 'hatchback'
    },
    {
        make: '2010',
        model: 'maruti',
        type: 'hatchback'
    },
    {
        make: '1999',
        model: 'ford',
        type: 'sedan'
    },   
]
/* 
    REQUIREMENT for this program
    
    1. findIndex of employee john
    2. findIndex of employeed with age 25
    3. findIndex of sedan type car
    4. findIndex of ford car
*/
// function findIndexWithArguments(data,key,value){
//     for(let i=0;i< data.length;i++){
//         if(data[i][key] === value){
//             return i
//         }
//      }
//      return -1;

function findIndex(data,fn,cartype){
    for(let i=0;i< data.length;i++){
        let condition = fn(data[i],cartype);
        if(condition){
            return i
        }
     }
     return -1;
}
function sedanCheck(c,cartype){
    return c.type == c.cartype
}
console.log(
    
    findIndex(cars,sedanCheck,audi)
)

const indx = findIndex(employees,function(e) {
    return e.name = "john" || e.salary == 10
})
console.log(indx);



const one = findIndex(cars,sedanCheck,sedan);

const two = findIndex(cars,sedanCheck,sedan);