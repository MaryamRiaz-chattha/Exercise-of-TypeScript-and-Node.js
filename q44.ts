//q44Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(...items: string[]): void {
  console.log("Sandwich order:");
  if (items.length === 0) {
    console.log("  - Plain sandwich (no items)");
  } else {
    for (let item of items) {
      console.log(`  - ${item}`);
    }
  }
  console.log("---");
}

// Calling the function with different numbers of arguments
makeSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
makeSandwich("Ham", "Swiss Cheese");
makeSandwich("Peanut Butter", "Jelly");
