//q36T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function makeShirt(size: string, message: string): void {
  console.log(
    `The shirt size is ${size} and the message on it is: '${message}'`
  );
}

// Calling the function with sample inputs
makeShirt("Large", "Hello World!");
