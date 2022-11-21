//1
const sum=[1,2,3,4];
const sumresult=sum.reduce((prev,item)=>prev+item);
console.log(sumresult);

//2
const sum1=[1,2,3,4];
const sumresult1=sum1.reduce((prev,item)=>{
 console.log('prev',prev,'item',item)
 return prev+item;
},0);
console.log(sumresult1);

//3 
const albums=[
    {
        title:'xx',
        images:['01.jpg','02.jpg']
    },
    {
        title:'xx',
        images:['03.jpg','04.jpg']
    },

];
const numImages=albums.reduce((prev,item)=>{
    return prev+item.images.length;
},0)
console.log(numImages);


//4
const albums1=[
    {
        title:'xx',
        images:['01.jpg','02.jpg']
    },
    {
        title:'xx',
        images:['03.jpg','04.jpg']
    },

];
const Images=albums1.reduce((prev,item)=>{
    return prev.concat(item.images);
},[])
console.log(Images);

//5
const user=[
    {
        id:'01',
        name:'pavi'

    },
    {
        id:'02',
        name:'pri'

    }

];
const newUser=user.reduce((obj,users)=>{
    obj[users.id]=users;
    return obj;

},{})

console.log(newUser);


//6
const user1=[
    {
        id:'01',
        name:'pavi'

    },
    {
        id:'02',
        name:'pri'

    }

];
const newUser1=user1.reduce((obj,users)=>{
    obj[users.id]=users;
    return obj;

},{})

console.log(newUser1['02'].name);