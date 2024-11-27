// Day Translation
// Create a program that uses a switch-case to translate a day of the week 
// from English to Armenian. The user should input the name of the day in English, 
// and the program should return the corresponding Armenian name.
// Input: “Monday”
// Output: “Երկուշաբթի”

let weekDay = prompt("Write the weekday in English");
weekDay = weekDay.toLowerCase();

switch (weekDay) {
    case 'monday':
        console.log("Երկուշաբթի");
        break;
    case 'tuesday':
        console.log("Երեքշաբթի");
        break;
    case 'wednesday':
        console.log("Չորեքշաբթի");
        break;
    case 'thursday':
        console.log("Հինգշաբթի");
        break;
    case 'friday':
        console.log("Ուրբաթ");
        break;
    case 'saturday':
        console.log("Շաբաթ");
        break;
    case 'sunday':
        console.log("Կիրակի");
        break;
    default:
        console.log("Invalid Input");
}
