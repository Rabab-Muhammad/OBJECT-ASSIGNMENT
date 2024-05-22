"use strict";
//                            Part 1: Employee Data
//                                   Challenge:
//1. Design a type alias named Employee to represent an employee object with properties like
//   name (string), department (string), and role (string).
//2. Include an optional nested object named contact to hold phone and email information (if
//   provided).
//3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or
//   "Intern".
//4. Make the skills property an optional array of strings for listing an employee's skills (if
//   any).
Object.defineProperty(exports, "__esModule", { value: true });
const employee1 = {
    name: "Ali",
    department: "Engineering",
    role: "Engineer",
    contact: {
        phone: "123-456-7890",
        email: "ali@example.com"
    },
    skills: ["JavaScript", "TypeScript", "React"]
};
const employee2 = {
    name: "Taha",
    department: "Human Resources",
    role: "Manager",
    // No contact information provided
    // No skills listed
};
const employee3 = {
    name: "Imran",
    department: "Internship",
    role: "Intern",
    contact: {
        email: "imran@example.com"
    },
    skills: ["Python", "Data Analysis"]
};
// Output the employee objects
console.log("Employee 1:", employee1);
console.log("Employee 2:", employee2);
console.log("Employee 3:", employee3);
console.log("\n");
const myCar = {
    brand: "B.M.W",
    model: "Model S",
    year: 2022,
    engine: {
        horsepower: 1020
    },
    getHorsepower: function () {
        return this.engine.horsepower;
    }
};
console.log("Car Brand:", myCar.brand);
console.log("Car Model:", myCar.model);
console.log("Car Year:", myCar.year);
console.log("Car Horsepower:", myCar.getHorsepower());
console.log("\n");
const tShirt = {
    name: "POLO T-Shirt",
    price: 1000,
    color: "white",
    inventory: {
        stock: 100,
        colorOptions: ["red", "blue", "brown", "black"],
        changeColor: function (newColor) {
            // Update the color property
            tShirt.color = newColor;
            // Adjust the price based on the new color
            switch (newColor) {
                case "red":
                    tShirt.price *= 1.10; // Increase by 10%
                    break;
                case "blue":
                    tShirt.price *= 0.95; // Decrease by 5%
                    break;
                default:
                    tShirt.price = 1000; // Reset to base price for other colors
            }
        }
    }
};
// initial product details
console.log("Initial Product:", tShirt);
// Change the color to red and updated product details
tShirt.inventory.changeColor("red");
console.log("After changing color to red:", tShirt);
// Change the color to blue and updated product details
tShirt.inventory.changeColor("blue");
console.log("After changing color to blue:", tShirt);
// Change the color to green and updated product details
tShirt.inventory.changeColor("brown");
console.log("After changing color to brown:", tShirt);
