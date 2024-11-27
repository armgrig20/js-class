// Write a program that takes a number as input and checks if it is even or odd:
// If the number is even, print “The number is even.”
// If the number is odd, print “The number is odd.”
// Use and learn modulo operator %

let number = +prompt("Please enter the number"); 
let result;
if ( number % 2 === 0){
   result = "The number is even";
} else {
    result = "The number is odd";
}

console.log(result);