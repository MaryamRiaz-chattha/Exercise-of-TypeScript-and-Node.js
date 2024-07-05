"use strict";
function createCar(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Adding optional properties
    options.forEach((option) => {
        const [key, value] = option;
        car[key] = value;
    });
    return car;
}
// Creating a car and printing the object returned
let myCar = createCar("Toyota", "Camry", ["color", "red"], ["year", 2023]);
console.log(myCar);
