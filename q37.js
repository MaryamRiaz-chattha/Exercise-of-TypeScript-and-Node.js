"use strict";
//q37Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = "Large", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message on it is: '${message}'`);
}
// Making a large shirt with the default message
makeShirt();
// Making a medium shirt with the default message
makeShirt("Medium");
// Making a shirt of any size with a different message
makeShirt("Small", "Custom Message");
