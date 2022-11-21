// const inputstr = "malayalam";
// function occurences(str){


// }
// const out = {
//   m:2,
//   a:4,
//   l:2,
//   y:1
// }


// const string=" hello world";
function getcount(string) {
    const histogram = [];
    for (leti = 0; i < string.length; i++) {
        const ch = string[i];
        if (!histogram[ch]) {
            histogram[ch] = 0;
        } else {
            histogram[ch]++;

        }

    }
    return histogram.push(string[i]);
}

console.log(getcount(" hello world"));








