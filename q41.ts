//q41Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function showMagicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

// Creating an array of magician's names
let magicians = [
  "David Copperfield",
  "Harry Houdini",
  "Penn Jillette",
  "Teller",
];

// Calling the function with the array of magician's names
showMagicians(magicians);
