//q19Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guests: string[] = [
    "Isaac Asimov",
    "Albert Einstein",
    "Marie Curie",
    "Charles Darwin",
    "Nikola Tesla",
    "Leonardo da Vinci",
    "Ada Lovelace",
    "Galileo Galilei",
    "Katherine Johnson"
];

// Print message about the limitation
console.log("Unfortunately, I can invite only two people for dinner.");

// Remove guests until only two remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

// Print message to the two remaining guests
for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

// Print a message indicating the number of people you are inviting to dinner
console.log(`Number of people invited to dinner: ${guests.length}`);

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print the empty list
console.log(guests); // Should print []