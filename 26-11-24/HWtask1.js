// Problem 1: Student Grades
// Description:
// You are provided with an array of students, where each student is represented as an object. Each object contains the student’s name 
// and their score. Your task is to determine the grade status of each student using a for loop and a switch statement.
// The grade categories are as follows:

// * 		i >= 90 → “Excellent”
// * 		i >= 75 → “Good”
// * 		i >= 50 → “Pass”
// * 		default → “Fail”

const students = [
    { name: "Anna", grade: 85 },
    { name: "Mariam", grade: 92 },
    { name: "Olivia", grade: 76 },
    { name: "Emma", grade: 59 },
  ];
  
  for (let i = 0; i < students.length; i++) {
    const grade = students[i].grade; 
    switch (true) {
      case grade >= 90:
        console.log(`${students[i].name}: Excellent`);
        break;
      case grade >= 75:
        console.log(`${students[i].name}: Good`);
        break;
      case grade >= 50:
        console.log(`${students[i].name}: Pass`);
        break;
      default:
        console.log(`${students[i].name}: Fail`);
    }
  }
