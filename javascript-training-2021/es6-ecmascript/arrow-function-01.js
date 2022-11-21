//1
const a=(a,b)=>{
    return a+b;
}
const b=(a,b)=>{
    return a+b;
}
const c=a=>a;

 const d=a=>'hello';
 console.log(d);
 const squared= x=>x*x;

 //2 this method

const names={
    name1:'pavi',
    handleMessage:function(message,handle){
        handle(message)
    },
    receive:function(){
        const that=this;
        this.handleMessage("Hai",function(message){
            that.name1;
            console.log(message+that.name1);

        })
    }
    
}
names.receive()

//3 using arrow function
const names1={
    name1:'pri',
    handleMessage:function(message,handle){
        handle(message)
    },
    receive:function(){
    
        this.handleMessage("Hai",(message)=>{
            
            console.log(message+this.name1);

        })
    }
    
}
names1.receive()


//4 simplification
const names2={
    name1:'vasanth',
    handleMessage:function(message,handle){
        handle(message)
    },
    receive:function(){
        
    this.handleMessage("Hai",message=>console.log(message+this.name1))
    }
}
names2.receive()

