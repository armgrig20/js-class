//let n = 5;
//for (let i = 1; i <= 16; i++) {
  //console.log(`${n} x ${i} = ${n * i} `);
//}

//////

///let sentence = "I am learning JavaScript";
//for (let i = 0; i < sentence.length; i++) {
  // sentence = sentence.replaceAll(" ", "-");
 //}
 //console.log(sentence)

 //////
//  const arr = [];
//  const obj1 = {
//    x: 10,
//    y: 20,
//    z: 30,
// }
// const obj2 = {
   
// };
// for(let i in obj1) {
//    obj2[i] = obj1[i];
// }
// obj2.x = 10000000;
// console.log(obj2)

////////task 1 

// let numbers = [1, 2, 3, 4, 5];

// for(i = 0; i < numbers.length; i++) {
//    console.log(numbers[i]);
// }

////// task 2 

// let numbers = [10, 20, 30, 40, 50];
// let sum = 0; // Initialize sum to 0

// // Loop through the array and add each number to sum
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]; // Add the current number to sum
// }

// console.log(sum); // Print the final sum

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

const evenNumbers = numbers.filter((number) => {
   if (number % 2 === 1) {
      return true
   }else {
      return false
   }
})

console.log(evenNumbers)





