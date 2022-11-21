//1
var color="red";
var speed=120;
var car={color,speed}
console.log(car);

//2
var color="black";
var speed=130;
function go(){
    console.log("added");
}
var car={color,speed,go}

console.log(car.color);
console.log(car.speed);
car.go();

//3

var color="blue";
var speed=130;
var car={
    color,
    speed,
    go(){
console.log("priyanka");
    }

};

console.log(car.color);
console.log(car.speed);
car.go();


//4
var color="bluebalck";
var speed=130;
var car={
    color,
    speed,
    ["go"]:function(){
console.log("priyanka");
    }

};

console.log(car.color);
console.log(car.speed);
car.go();

//5
var color="bluebalck";
var speed=130;
var drive="go"
var car={
    color,
    speed,
    [drive]:function(){
console.log("priyanka");
    }

};

console.log(car.color);
console.log(car.speed);
car.go();

