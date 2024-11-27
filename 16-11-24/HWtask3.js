// Month Check
// Write a program that takes the number of a month (1-12) and prints which season it belongs to:
// 12, 1, 2 -> “Winter”
// 3, 4, 5 -> “Spring”
// 6, 7, 8 -> “Summer”
// 9, 10, 11 -> “Autumn”

let month = +prompt("Please enter the season");
let result;

if (month === 12 || month === 1 || month === 2){
    result="Winter";
} else if (month === 3 || month === 4 || month === 5){
    result="Spring";
} else if (month === 6 || month === 7 || month === 8) {
    result="Summer";
} else if (month === 9 || month === 10 || month === 11) {
    result="Autumn";
} else {
        result="Invalid Number";
    }

console.log(result);