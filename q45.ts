//q45Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
type Car = {
  manufacturer: string;
  model: string;
  [key: string]: any; // Allow any additional properties
};

function createCar(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
): Car {
  let car: Car = {
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
