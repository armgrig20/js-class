// Problem 1: Number of Days in a Month
// Write a function that takes the name of a month as an argument and returns the number of days in that month.
// Requirements:
// Use switch...case to determine the number of days in the month.
// If the argument does not match any valid month, return “Invalid month”.
// Use if...else to check if the current year is a leap year (February should have 29 days in a leap year).

function getDaysOfMonth(monthName, year) {
    function isLeapYear(year) {
        return(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    switch (monthName.toLowerCase()) { 
        case 'january':
            return 31;
        case 'february': 
            if (isLeapYear(year)) {
                return 29;
            } else {
                return 28;
            }
        case 'march':
            return 31;
        case 'april':
            return 30;
        case 'may':
            return 31;
        case 'june':
            return 30;
        case 'july':
            return 31;
        case 'august':
            return 31;
        case 'september':
            return 30;
        case 'october':
            return 31;
        case 'november':
            return 30;
        case 'december':
            return 31;
        default:
            return 'Invalid month';

    }
}

let monthName = 'september';
let year = 2024;

console.log(getDaysOfMonth(monthName, year));