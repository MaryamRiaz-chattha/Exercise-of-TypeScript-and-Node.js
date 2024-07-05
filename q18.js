"use strict";
//q18Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
//Print your array in alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical order without changing the order of the original list.
//Show that your array is still in its original order by printing it again.
//Reverse the order of your list. Print the array to show that its order has changed.
//Reverse the order of your list again. Print the list to show it’s back to its original order.
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Store the locations in an array
let places = ["Tokyo", "Paris", "New York", "Sydney", "Cape Town"];
// Print the array in its original order
console.log("Original order:");
console.log(places);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:");
console.log([...places].sort());
// Show that the array is still in its original order by printing it
console.log("Still in original order:");
console.log(places);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:");
console.log([...places].sort().reverse());
// Show that the array is still in its original order by printing it again
console.log("Still in original order:");
console.log(places);
// Reverse the order of the list
places.reverse();
console.log("Reversed order:");
console.log(places);
// Reverse the order of the list again
places.reverse();
console.log("Original order restored:");
console.log(places);
// Sort the array so it's stored in alphabetical order
places.sort();
console.log("Alphabetical order stored:");
console.log(places);
// Sort to change the array so it's stored in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order stored:");
console.log(places);
