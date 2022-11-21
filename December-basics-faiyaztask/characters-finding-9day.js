/*const inputstr = "malayalam";

function occurences(str){

}

const out = {
  m:2,
  a:4,
  l:2,
  y:1
}*/

const inputStr = "malayalam";
function occurences(str) {
    let output = {};

    let splits = str.split("")

    for (let i = 0; i < splits.length; i++) {

        if (splits[i] in output) {
            output[splits[i]] = output[splits[i]] + 1

        } else {
            output[splits[i]] = 1
        }

    }

    return output;
}
let result = occurences(inputStr)
console.log(result)













