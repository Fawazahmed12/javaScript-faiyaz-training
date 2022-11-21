let word = "apple";

function occurence(word, character) {
  let c = 0;
  for (let i = 0; i < word.length; i++) {
    if (character == word[i]) {
      c = c + 1;
    }

  }
  return c;

}

let result = occurence(word, 'p')
console.log(result)





  




