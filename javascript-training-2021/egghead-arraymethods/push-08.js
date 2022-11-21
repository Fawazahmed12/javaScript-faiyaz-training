const pets=["xx","yy","zz"]
pets.push("aa")
console.log(pets);


const pets1=["xx","yy","zz"];
const pets2=["aa","bb","cc"]
pets1.push.apply(pets1,pets2);
console.log(pets1);