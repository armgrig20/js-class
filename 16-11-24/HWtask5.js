// Calculator
// The program should ask for two numbers and an operation (addition, subtraction, multiplication, or division). Use switch-case
// Input: 5, 3, "+"Output: 8
// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operation = prompt("Choose the operation (+, -, *, /):");


let num1 = +prompt("Enter the first number:");
let num2 = +prompt("Enter the second number:");
let operation = prompt("Choose the operation (+, -, *, /)");


if( operation === "+"){
    console.log(num1 +num2)
}else if(operation === "-"){
    console.log(num1 -num2)
}else if(operation === "*"){
    console.log(num1 *num2)
}else if(operation === "/" && num2 !=0){
    console.log(num1 /num2)
} else {
    console.log("Invalid Input");
}