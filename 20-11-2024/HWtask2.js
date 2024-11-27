// Problem 2. Write a loop to replace
// all spaces in a string with hyphens (-).

let sentence = "I am learning JavaScript";
for (let i = 0; i < sentence.length; i++) {
  sentence = sentence.replaceAll(" ", "-");
 }
 console.log(sentence)
