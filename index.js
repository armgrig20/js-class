let n = 5;
for (let i = 1; i <= 16; i++) {
  console.log(`${n} x ${i} = ${n * i} `);
}

//////

let sentence = "I am learning JavaScript";
for (let i = 0; i < sentence.length; i++) {
   sentence = sentence.replaceAll(" ", "-");
 }
 console.log(sentence)