//! 8. Literal types
// definition: it is used to specify the exact value a string or number must have. it is used when we want to restrict a variable to a specific set of values.

// ? There are four types of Literal types
/**
 * String Literal
 * Numeric Literal
 * Boolean Literal
 * Object Literal
 * Template Literal

*/

// ? i. String Literal
// Examle: Simple assigning a custom type
let color: "Red" | "Green";
color = "Green";
color = "Red";
// color = "Yellow";//Type '"Yellow"' is not assignable to type '"Red" | "Green"'.

//Example: if i have button with different action then we can use Literal types
function getButtonAction(action: "Add" | "Remove" | "Edit" | "Submit") {
  console.log(action, "Button");
}

getButtonAction("Add");
getButtonAction("Remove");
getButtonAction("Edit");
getButtonAction("Submit");

// Example: Also use as Light mode or Dark mode theme in website
type toggleTheme = "Light" | "Dark";

function ThemeToggle(theme: toggleTheme): void {
  console.log(`My current theme is ${theme}.`);
}

ThemeToggle("Light");

// ? ii. Numeric Literal

type diceNumber = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
  return (Math.floor(Math.random() * 6) + 1) as diceNumber;
}

const result = rollDice();

console.log(`Dice rolled to number ${result}`);

// ? iii. Boolean Literal
type successFlag = "success" | true | 1;
type failureFlag = "fail" | false | 0;

function processStatus(status: successFlag | failureFlag) {
  if (status === "success" || status === true || status === 1) {
    console.log("Status saved Successfully");
  } else {
    console.log("Status not saved Successfully");
  }
}

processStatus(0);
processStatus(true);
processStatus("fail");
processStatus(false);

// ? iv. Object Literal
type HTTPSuccess = {
  status: 200 | 201 | 203;
  statusText: "Success" | "Authenticated" | "No Content";
  data: any;
};

type HTTPError = {
  status: 400 | 401 | 403 | 404 | 500;
  statusText: "Failed" | "Un-Authorized" | "Internal Server Error";
  error: string;
};

function handleResponse(response: HTTPSuccess | HTTPError) {
  if (response.status >= 200 && response.status <= 300) {
    console.log(response.statusText);
    if ("data" in response) {
      console.log(response.data);
    } else {
      console.log(response.error);
    }
  } else if (response.status >= 400 && response.status <= 500) {
    console.log(response.statusText);
    if ("data" in response) {
      console.log(response.data);
    } else {
      console.log(response.error);
    }
  }
}

const HTTPSuccessRequest: HTTPSuccess = {
  status: 203,
  statusText: "Authenticated",
  data: {
    name: "John Doe",
    email: "johndoe@example.com",
  },
};

const HTTPErrorRequest: HTTPError = {
  status: 404,
  statusText: "Internal Server Error",
  error: "Server Error",
};

handleResponse(HTTPSuccessRequest);
handleResponse(HTTPErrorRequest);

// ? v. Template Literal

type direction = "east" | "west" | "north" | "south";
type distance = "1km" | "5km" | "7km";

type DirectionAndDistance = `${direction} - ${distance}`;

function makeMove(place: DirectionAndDistance): void {
  console.log(`Go to ${place} direction.`);
}

makeMove("south - 5km");

//! 9. Type Narrowing
// definition: it is the process of refining a variable's type to a more specific type. It is used when we want to perform different operations based on the type of a variable. i.e কোন একটা নির্দিষ্ট type কে নির্দিষ্ট operation করানো।

function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log("Parsed as number", input * 2);
  } else {
    console.log("Parsed as string", input.trim());
  }
}

processInput(" Hello ");
processInput(10);

//! 9.a typeof operator type guard
// definition: it is used to check the type of a variable at runtime. it is used to ensure that the code is type-safe and to avoid runtime errors. i.e same as type narrowing.

function formatValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}
console.log(formatValue("hello"));
console.log(formatValue(3.14159));

//! 9.b. in operator type guard
// definition: it is used to check if a property exists in an object i.e "in" is used যখন object এর property এর মধ্যে checking করবো।

type Car = {
  drive: () => void; //create type and make the function void i.e. it does not return any value
};

type Boat = {
  sail: () => void;
};

function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
    // console.log(vehicle, " is driving");
  } else {
    vehicle.sail();
    // console.log(vehicle, " is sailing");
  }
}

const car1: Car = {
  drive: () => {
    console.log("Car is driving");
  },
};

const boat: Boat = {
  sail: () => {
    console.log("Boat is sailing");
  },
};

move(car1);
move(boat);

//! 9.c. instanceof type guard
// definition: the instanceof operator is used to check if an object is an instance of(উদাহরণ) specific class or any class in its prototype chain or a constructor function

class Cat {
  meow() {
    console.log("Meow Meow");
  }
}

class Dog {
  woof() {
    console.log("woof woof");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.woof();
  } else {
    animal.meow();
  }
}

const cat = new Cat();
const dog = new Dog();
makeSound(cat);
makeSound(dog);

//! 9.d. creating a custom type guard
// definition: it is used to check if a variable is of a specific type. it is used to ensure that the code is type-safe and to avoid runtime errors.

// What is custom type guard?
// A custom type guard is a function that returns a boolean value. It is used to check if a variable is of a specific type.

// Example of custom type guard
type Fish = {
  swim: () => void;
};

type Cow = {
  walk: () => void;
};

// here returns the boolean value
function isFish(pet: Fish | Cow): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function movePet(pet: Fish | Cow) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.walk();
  }
}

const fish: Fish = {
  swim: () => {
    console.log(`Myfish is swimming.`);
  },
};

const cow: Cow = {
  walk: () => {
    console.log(`My cow is walking`);
  },
};

movePet(cow);
movePet(fish);
