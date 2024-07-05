// 24
// Tests for equality and inequality with strings
let str1 = 'apple';
let str2 = 'banana';
console.log("Are str1 and str2 equal? I predict False.");
console.log(str1 == str2);
console.log("Are str1 and str2 not equal? I predict True.");
console.log(str1 != str2);

// Tests using the lower case function
let text = "Mubasher";
console.log("Is the lower case of my name equal to mubasher I predict True.");
console.log(text.toLowerCase() === 'mubasher');

// Numerical tests
let num1 = 8;
let num2 = 15;
console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);
console.log("Is num1 greater than or equal to num2? I predict False.");
console.log(num1 >= num2);

// Tests using "and" and "or" operators
let x = 5;
let y = 10;
console.log("Is x greater than 3 and y less than 15? I predict True.");
console.log(x > 3 && y < 15);
console.log("Is x greater than 3 or y greater than 15? I predict True.");
console.log(x > 3 || y > 15);

// Test whether an item is in an array
let cities = ['New York', 'London', 'Tokyo'];
console.log("Is 'Tokyo' in the cities array? I predict True.");
console.log(cities.includes('Tokyo'));

// Test whether an item is not in an array
console.log("Is 'Paris' not in the cities array? I predict True.");
console.log(!cities.includes('Paris'));