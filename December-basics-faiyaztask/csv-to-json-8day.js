// var inputCsv = "Year,Make,Model,Length\n1997,Ford,E350,2.34\n2000,Mercury,Cougar,2.38";
// var output = [
//     {
//     year:'1997',
//     make:'Ford',
//     Model:'E350',
//     Length:'2.34'
// },{
//     year:'2000',
//     make:'Mercury',
//     Model:'Cougar',
//     Length:'2.38'
// }
// ]  


var inputCsv = "Year,Make,Model,Length\n1997,Ford,E350,2.34\n2000,Mercury,Cougar,2.38";

function CsvToJson(commaSeperatedValue) {
    let output = [];
    let lines = commaSeperatedValue.split("\n")
    let keyString = lines.shift(commaSeperatedValue)
    let keys = keyString.split(",")
    for (let i = 0; i < lines.length; i++) {
        let object = {};

        let values = lines[i].split(",")
        for (let k = 0; k < values.length; k++) {
              let key = keys[k]
              let value = values[k]
            
              object[key]=value
        }

        output.push(object)

    }

    return output;
}

let result = CsvToJson(inputCsv)
console.log(result)






// or (use reduce method-)
// santhosh - hard coding- don't try this.


// const a = ['year', 'make', 'model', 'length']
// const b = [1997, 'Ford', 'E350', 2.34];
// const c = [2000, 'Mercury', 'Cougar', 2.38];
// const d = {};
// const result = [];
// const temp = a.reduce((acc, cv, index) => {
//     acc[cv] = b[index];
//     return acc;
// }, {});
// result.push(temp);
// const temps = a.reduce((acc, cv, index) => {
//     acc[cv] = c[index];
//     return acc;
// }, {});
// result.push(temps);
// console.log(result, "results");
