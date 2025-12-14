// Union type

type formResponse =
  | { success: true; message: string }
  | { success: false; error: Record<string, string> };

async function formSubmit() {
  const response: formResponse = await fakeApi();
  if (response.success) {
    console.log(response.message);
  } else {
    console.log(response.error);
  }
}

function fakeApi(): Promise<formResponse> {
  const random = Math.random() * 10;
  return Promise.resolve(
    random > 5
      ? { success: true, message: "Form submitted successfully" }
      : { success: false, error: { message: "Invalid email" } }
  );
}

formSubmit();

// Intersection type
type User = {
  readonly _id: number;
  name: string;
  gender: string;
};

type Admin = {
  isAdmin: boolean;
};

type UserAdmin = User & Admin;

const admin1: UserAdmin = {
  _id: 123,
  name: "Admin",
  gender: "male",
  isAdmin: true,
};

const user1: UserAdmin = {
  _id: 123,
  name: "user",
  gender: "female",
  isAdmin: false,
};

function userInfo(user: UserAdmin) {
  return user;
}

const admin = userInfo(admin1);
console.log(admin);
const user = userInfo(user1);
console.log(user);

// Literal type
type buttons = "Add" | "Delete" | "Edit";

function buttonAction(button: buttons) {
  console.log(button, "button clicked");
}

buttonAction("Add");
buttonAction("Delete");
buttonAction("Edit");

// in operator type guard
type Car = {
  drive: () => void;
};

type Boat = {
  sail: () => void;
};

function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}

const car1: Car = {
  drive: () => console.log("Car is driving"),
};

move(car1);

// instance of operator
class Dog {
  woof() {
    console.log("Woof Woof");
  }
}

function makeSound(animal: Dog) {
  if (animal instanceof Dog) {
    animal.woof();
  }
}

const labrador = new Dog();
makeSound(labrador);

// type narrowing
function showVal(input: string | number): void {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else {
    console.log(input * 5);
  }
}

showVal(123);
showVal("Hello");
