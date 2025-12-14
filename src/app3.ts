//! 6. Advance types (Union and intersection types)

//! 6a. Union types (| = works as or i.e একটা value এর ক্ষেত্রে দুইটা type use করা যায়)

type ProductId = string | number;

function getProductId(id: ProductId) {
  console.log("Fetching product id: ", id);
}

getProductId("abc123");
getProductId(123456);

//Note: use case of union type is in dynamic form input field. where user can input string or number and also in API response where the response can be of different types i.e dynamic api response type.

// use case example of form response with api calls
type FormResponse =
  | { success: true; message: string }
  | { success: false; errors: Record<string, string> }; //means object key and value pair

async function formSubmit() {
  const response: FormResponse = await fakeApi();
  if (response.success) {
    console.log(response.message);
  } else {
    console.log(response.errors);
  }
}

function fakeApi(): Promise<FormResponse> {
  const random = Math.random() > 0.5;
  return Promise.resolve(
    random
      ? { success: true, message: "Form submitted successfully" }
      : { success: false, errors: { email: "Invalid email format" } }
  );
}

formSubmit();

//! 6b. Intersection type (&)
// definition: it is used to combine multiple types into one. it is used when we want to combine multiple types into a single type. it is used when we want to create a new type that has all the properties of the existing types.

type User = {
  id: number;
  name: string;
  email: string;
};

type Admin = {
  isAdmin: boolean;
};

type AdminUser = User & Admin;

const user1: AdminUser = {
  id: 1,
  name: "Sumonto",
  email: "sumonto@gmail.com",
  isAdmin: true,
};

function userInfo(object: AdminUser) {
  console.log("Our IT department admin is: ", object);
}

userInfo(user1);

//! 7. Literal types
// definition: it is used to specify the exact value a string or number must have. it is used when we want to restrict a variable to a specific set of values.

//Example: if i have button with different action then we can use Literal types
type Action = "Add" | "Remove" | "Edit" | "Submit";

function getButtonAction(action: Action) {
  console.log(action, "Button");
}

getButtonAction("Add");
getButtonAction("Remove");
getButtonAction("Edit");
getButtonAction("Submit");

// Note: Also use as Light mode or Dark mode theme in website

//! 8. Type Narrowing

// definition: it is the process of refining a variable's type to a more specific type. it is used when we want to perform different operations based on the type of a variable. it is used to ensure that the code is type-safe and to avoid runtime errors. i.e কোন একটা নির্দিষ্ট type কে নির্দিষ্ট operation করানো।

function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log("Parsed as number", input * 2);
  } else {
    console.log("Parsed as string", input.trim());
  }
}

processInput(" Hello ");
processInput(10);

//! 8.a typeof operator type guard
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

//! 8.b. in operator type guard
// definition: it is used to check if a property exists in an object. it is used to ensure that the code is type-safe and to avoid runtime errors.i.e in is used যখন object এর property এর মধ্যে checking করবো।

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

//! 8.c. instanceof type guard
// definition: the instanceof operator is used to check if an object is an instance of specific class or a constructor function

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

//! 8.d. creating a custom type guard
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
