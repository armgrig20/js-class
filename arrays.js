// task 1 

// let numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;

// for( i = 0; i < numbers.length; i++){
//     sum = sum + numbers[i]
// }

// console.log(sum)

// task 2 

// let numbers = [1, 2, 2, 3, 4, 4, 5];
// let a = [];


// for(let i = 0; i < numbers.length; i++){ 
//     const currentValue = numbers[i] 

//     if (!a.includes(currentValue)){
//         a.push(currentValue)
//     }
// }
// console.log(a);

let strings = ["React", "JavaScript", "Redux", "PHP", "C#"];
let max = 0;
let maxIndex = 0; 

for (let i = 0; i < strings.length; i++) {
    let currentLength = strings[i].length;
    if (currentLength > max) { 
        max = currentLength;
        maxIndex = i;
    }
}

console.log("Longest string:", strings[maxIndex]);
