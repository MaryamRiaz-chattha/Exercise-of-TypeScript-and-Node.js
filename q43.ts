//q43Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function showMagicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function makeGreat(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let magician of magicians) {
    greatMagicians.push("the Great " + magician);
  }
  return greatMagicians;
}

// Creating an array of magician's names
let magicians = [
  "David Copperfield",
  "Harry Houdini",
  "Penn Jillette",
  "Teller",
];

// Creating a copy of the array to keep the original unchanged
let originalMagicians = [...magicians];

// Modifying the copy of the array
let greatMagicians = makeGreat(magicians);

// Calling the function with the original array of magician's names
console.log("Original Magicians:");
showMagicians(originalMagicians);

// Calling the function with the modified array of magician's names
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
