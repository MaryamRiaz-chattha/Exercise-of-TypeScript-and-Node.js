//q39City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Calling the function with three city-country pairs and printing the results
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("New York", "USA"));
console.log(cityCountry("Tokyo", "Japan"));
