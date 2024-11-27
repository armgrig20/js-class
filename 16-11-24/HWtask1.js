// Write a program that takes the user’s score and prints 
// the corresponding grade based on the following rules:
// 90-100 = “A”
// 80-89 = “B”
// 70-79 = “C”
// 60-69 = “D”
// 0-59 = “F”
// Goal
// Use multiple if-else if statements.

let score = +prompt('Enter the score');
let grade;

if (score >= 90 && score <= 100){
    grade = "A";
} else if (score >= 80 && score <= 90){
    grade = "B";
} else if (score >= 70 && score <= 80){
    grade = "C";
} else if (score >= 60 && score <= 70){
    grade = "D";
} else if (score >= 0 && score <= 60){
    grade = "F";
} else {
    grade = "Invalid value";
}

console.log("Your grade is  " + grade);