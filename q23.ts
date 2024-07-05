/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let num = 5;
console.log("Is num equal to 5? I predict True.");
console.log(num == 5);

let str = 'hello';
console.log("Is str equal to 'hello'? I predict True.");
console.log(str == 'hello');

let bool = true;
console.log("Is bool equal to true? I predict True.");
console.log(bool == true);

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log("Are arr1 and arr2 equal? I predict True.");
console.log(arr1 == arr2);

let obj1 = { name: 'John' };
let obj2 = { name: 'John' };
console.log("Are obj1 and obj2 equal? I predict False.");
console.log(obj1 == obj2);

let m = 10;
console.log("Is m greater than 5? I predict True.");
console.log(m > 5);

let n = 3;
console.log("Is n less than or equal to 3? I predict True.");
console.log(n <= 3);

let o = 'apple';
console.log("Does o equal 'banana'? I predict False.");
console.log(o == 'banana');

let a = 100;
console.log("Is a not equal to 200? I predict True.");
console.log(a != 200);

let b = null;
console.log("Is b equal to null? I predict True.");
console.log(b === null);