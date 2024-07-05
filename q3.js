"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let newVar = "Maryam Chattha";
console.log(newVar.toUpperCase());
console.log(newVar.toLowerCase());
let anotherVar = newVar.split(" ");
let var1 = anotherVar.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log(var1);
