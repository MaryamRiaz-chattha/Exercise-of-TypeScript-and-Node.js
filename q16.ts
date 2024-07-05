//q16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

// Adding a new guest to the beginning of the array
guests.unshift("Isaac Asimov");

// Adding a new guest to the middle of the array
let middleIndex: number = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Charles Darwin");

// Adding a new guest to the end of the array
guests.push("Katherine Johnson");

// Print the updated set of invitations
for (let guest of guests) {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
}