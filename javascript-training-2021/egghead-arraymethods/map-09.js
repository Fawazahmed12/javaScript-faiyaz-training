//1
const items=[1,2,3,4,5]
const output=items.map(function(item){
    return item *10
});
 console.log(output)

//2
const items1=["1","2","3"]
const mapped=items1.map(function(item){
return Number(item)
});
console.log(mapped)

//3
const names=["         priyanka","pavi"];
 
const result=names.map(x =>x.trim());
console.log(result);

//4
const names1=[" priyanka Vasanth"," pavi "];
console.log(names1);
const mapped1=names1.map(function(name){
    return{
        firstname:name
    }
});
console.log(mapped1);
mapped1.forEach(function(person){
    console.log(person.firstname)
});

//5
const member=[
    {
        firstname:'pavi',
        lastname:'sree'
    },
    {
        firstname:'vasanth',
        lastname:'raj'
    },
];

const final=member.map(x=>{
    return{
        firstname:x.firstname,
        lastname:x.lastname,
        fullname:x.firstname+x.lastname
    }
})
final.forEach(function(person){
    console.log(person.fullname)
})

//6
const member1=[
    {
        firstname:'pavi',
        lastname:'sree'
    },
    {
        firstname:'vasanth',
        lastname:'raj'
    },
];

const result1=member1.map(x=>x.firstname+x.lastname);
console.log(createHTMLList(result1));
function createHTMLList(member1)
{
    const listElement=member1.map(x=>` <li>${x}</li>`).join('\n')
    return  ` <ul> \n${ listElement}\n</ul>`;
}


//7

 const member2=[
    {
        firstname:'pavi',
        lastname:'sree',
        active:true
    },
    {
        firstname:'vasanth',
        lastname:'raj',
        active:false
    },
];

const result2=
member2.filter(x=>x.active)
.map(x=>x.firstname+x.lastname+x.active);
console.log(createHTMLList(result2));
function createHTMLList(member2)
{
    const listElement=member2.map(x=>` <li>${x}</li>`).join('\n')
    return  ` <ul> \n${ listElement}\n</ul>`;
}
