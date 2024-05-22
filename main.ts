
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



// Define a union type for role
type Role = "Manager" | "Engineer" | "Intern";

// Define a type for the optional contact object
type Contact = {
    phone?: string;
    email?: string;
};

// Define the main Employee type alias
type Employee = {
    name: string;
    department: string;
    role: Role;
    contact?: Contact;
    skills?: string[];
};

const employee1: Employee = {
    name: "Ali",
    department: "Engineering",
    role: "Engineer",
    contact: {
        phone: "123-456-7890",
        email: "ali@example.com"
    },
    skills: ["JavaScript", "TypeScript", "React"]
};

const employee2: Employee = {
    name: "Taha",
    department: "Human Resources",
    role: "Manager",
    // No contact information provided
    // No skills listed
};

const employee3: Employee = {
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

//---------------------------------------------------------------------------------------------------//


//                         Part 2: Car Details
//                            Challenge:
//1. Design a type alias named Car to represent a car object.
//2. Include a nested object named engine within Car, containing a property named
//   horsepower (number).
//3. Define a function named getHorsepower directly within the Car type alias to retrieve the
//   engine's horsepower.


// Define the Car type alias
type Car = {
    brand:string;
    model: string;
    year: number;
    engine: {
        horsepower: number;
    };
    getHorsepower: () => number;
};

const myCar: Car = {
    brand:"B.M.W",
    model:  "Model S",
    year: 2022,
    engine: {
        horsepower: 1020
    },
    getHorsepower: function() {
        return this.engine.horsepower;
    }
};

console.log("Car Brand:", myCar.brand);
console.log("Car Model:", myCar.model);
console.log("Car Year:", myCar.year);
console.log("Car Horsepower:", myCar.getHorsepower());
console.log("\n");

//---------------------------------------------------------------------------------------//

//                            Part 3: Colorful T-Shirts
//                                   Challenge:
//1. Design a type alias named Product to represent a T-shirt object with properties like name
//   (string), price (number), and color (string).
//2. Include a nested object named inventory within Product. This inventory object
//   should have two properties:
//   o stock (number): Represents the number of T-shirts available.
//   o colorOptions (optional array of strings): Lists available colors (if any).
//3. Inside the inventory object, define a function named changeColor. This function
//   accepts a new color string as an argument. When called, it should:
//   o Update the color property of the Product object.
//   o Adjust the price based on the new color (implement your own logic, e.g.,
//   increase by 10% for red, decrease by 5% for blue).


// Define the Product type alias
type Product = {
    name: string;
    price: number;
    color: string;
    inventory: {
        stock: number;
        colorOptions?: string[];
        changeColor: (newColor: string) => void;
    };
};

const tShirt: Product = {
    name: "POLO T-Shirt",
    price: 1000,
    color: "white",
    inventory: {
        stock: 100,
        colorOptions: ["red", "blue", "brown", "black"],
        changeColor: function(newColor: string) {
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

                