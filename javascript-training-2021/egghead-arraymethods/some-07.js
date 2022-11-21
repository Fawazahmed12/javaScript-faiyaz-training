//1
// var items=[1,2,3,4];
// var output=items.some(x=>(x===5));
// console.log(output);  // false


//2
 var tasks=[
     {
       title:'xx'  ,
       completed:true
     },
     {
        title:'yy'  ,
        completed:true
      },
      {
        title:'zz'  ,
        completed:true
      },
 ];
 function addTask(title){
     if(tasks.some(task=>task.title===title)){
         return;
     }
tasks.push({title:title,completed:false});
 }
 addTask('aa');
 console.log(tasks);

//3
//  var tasks=[
//     {
//       title:'xx'  ,
//       completed:true
//     },
//     {
//        title:'yy'  ,
//        completed:true
//      },
//      {
//        title:'zz'  ,
//        completed:true
//      },
// ];
// var list=document.querySelector(!tasks-list)
// list.classList.add(
//     tasks.some(task=>task.completed===false)
//     ?'task-list--uncompeleted'
//     :'task-list--completed'
// );

// list.innerHTML=tasks
// .map(x=> x.completed ? `<s>${x.title}</s>`:x.title)
// .map(x=> `<li>${x}</li>`)
// .join('')



