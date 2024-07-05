"use strict";
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
let current_users = ["maryam", "Maarij", "sara", "Maham", "Fiza"];
let new_users = ["Mubasher", "iqra", "maham", "SARA", "Maryam ALi"];
for (let new_user of new_users) {
    let usernameTaken = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    if (usernameTaken) {
        console.log(`The username "${new_user}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username "${new_user}" is available.`);
    }
}
