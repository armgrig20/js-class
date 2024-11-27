// Problem 3. Longest Text.

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


