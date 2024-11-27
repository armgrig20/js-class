 // Problem 2. Remove Duplicates

let numbers = [1, 2, 2, 3, 4, 4, 5];
let a = [];


for(let i = 0; i < numbers.length; i++){ 
    const currentValue = numbers[i] 

    if (!a.includes(currentValue)){
        a.push(currentValue)
    }
}
console.log(a);

