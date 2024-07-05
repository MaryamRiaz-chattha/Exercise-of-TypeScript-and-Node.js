/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
let favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'Hawaiian'];
let Pepperoni_des:string="Pepperoni is a variety of spicy salami made from cured pork and beef seasoned with paprika and chili peppers. Prior to cooking, pepperoni is characteristically soft, slightly smoky, and bright red.";
let Margherita_des:string="Pizza Margherita or Margherita pizza is a typical Neapolitan pizza, roundish in shape with a raised edge and garnished with hand-crushed peeled tomatoes, mozzarella, fresh basil leaves, and extra virgin olive oil."
let Hawaiian_des:string="Hawaiian pizza is a pizza originating in Canada, traditionally topped with pineapple, tomato sauce, Mozzarella cheese, and either ham or bacon."


// Printing the name of each pizza
console.log("Printing pizza names:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Printing a sentence for each pizza
console.log("\nPrinting sentences:");
for (let pizza of favoritePizzas) {
    if(pizza=="Pepperoni"){
        console.log(`I like ${pizza} pizza.\n${Pepperoni_des}`);
    }
    

    else if(pizza=="Margherita"){
    console.log(`I like ${pizza} pizza.\n${Margherita_des}`);
    }
     else{
        console.log(`I like ${pizza} pizza.\n${Hawaiian_des}`);

     }
}

// Additional sentence
console.log("\nI really love pizza!");
