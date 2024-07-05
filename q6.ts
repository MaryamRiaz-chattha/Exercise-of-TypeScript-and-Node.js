//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/

let myName :string="\n\tMaryam RIaz Chattha\t\n";
console.log("Name with white space:",myName);
let trimName:string= myName.trim();
console.log("Name without space:",trimName);