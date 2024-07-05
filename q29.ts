/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
let favoriteFruits: string[] = ['apple', 'banana', 'orange', 'strawberry'];
if(favoriteFruits.includes("apple")){
    console.log("i like apple");
    
}

let favorite_fruits: string[] = ['banana', 'strawberry', 'mango'];

if (favorite_fruits.includes('banana')) {
    console.log("i really like bananas!");
}

if (favorite_fruits.includes('strawberry')) {
    console.log("i really like strawberries!");
}

if (favorite_fruits.includes('mango')) {
    console.log("i really like mangoes!");
}

if (favorite_fruits.includes('apple')) {
    console.log("i really like apples!");
} else {
    console.log("i don't like apples.");
}

if (favorite_fruits.includes('kiwi')) {
    console.log("i really like kiwis!");
} else {
    console.log("i don't like kiwis.");
}