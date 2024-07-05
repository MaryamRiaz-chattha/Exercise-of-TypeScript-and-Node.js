//q20Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countries: string[] = ["china", "switzerland", "norway", "london", "Australia"];

// Print the list of countries
console.log("List of countries I would like to visit:");
for (let country of countries) {
    console.log(country);
}