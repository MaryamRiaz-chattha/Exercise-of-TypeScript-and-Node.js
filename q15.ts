//q15Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guests: string[] = ["Albert Einstein", "Marie Curie", "Isaac Newton"];

// Suppose we heard that Isaac Newton can't make it
const unableToAttend: string = "Isaac Newton";

// Replace Isaac Newton with a new guest, let's say Nikola Tesla
let newGuest: string = "Nikola Tesla";

// Find the index of the guest who can't attend
let index: number = guests.indexOf(unableToAttend);

// Replace the guest if they are found in the list
if (index !== -1) {
    guests[index] = newGuest;
}

// Print the new set of invitations
for (let guest of guests) {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
}