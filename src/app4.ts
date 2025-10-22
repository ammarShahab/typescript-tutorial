//9. typescript OOP

// Basic concept of OOP

// 9a. Constructor
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello ${this.name}, I think your age is ${this.age} years old.`
    );
  }
}

const person1 = new Person("Adil", 26); //When a class is called with the new keyword, the resulting object is referred to as an instance of that class. Which is also called creating constructor.
person1.greet();
console.log(person1.name); //to access the property of the object

//9b. Modifier (public, private, protected)
// In class there are 3 types of modifiers
/* *
 *i. public: accessible from anywhere
 *ii. private: accessible only within the class
 *iii. protected: accessible within the class and its subclasses
 */

//Example of public, private and protected modifiers

class BankAccount {
  public accountHolderName: string;
  private balance: number;
  protected accountType: string;

  constructor(name: string, amount: number) {
    this.accountHolderName = name;
    this.balance = amount;
    this.accountType = "Saving";
  }

  showBalance() {
    console.log(
      `${this.accountHolderName} account balance is ${this.balance}tk.`
    );
  }
}

const user1 = new BankAccount("Arham", 1000);
console.log(user1.accountHolderName); //can access public property from outside the class
user1.showBalance();

// but u cannot access the private and protected property from outside the class
// console.log(user1.balance); //due to private
// console.log(user1.accountType); //due to protected

// Example of protected modifiers (accessible within the class and its subclasses)
class SavingAccount extends BankAccount {
  showAccountType() {
    console.log(
      `${this.accountHolderName}'s accont type is ${this.accountType}.`
    );
  }
}

const user2 = new SavingAccount("Afnan", 1000);
user2.showAccountType();

// 9c. Private vs Protected Modifier Example
// Private: NOT accessible in subclasses (only within the class itself)
// Protected: Accessible in subclasses

class Vehicle {
  private engineNumber: string; // private - only accessible within Vehicle class
  protected brand: string; // protected - accessible in Vehicle and its subclasses

  constructor(engineNumber: string, brand: string) {
    this.engineNumber = engineNumber;
    this.brand = brand;
  }

  showEngineNumber() {
    console.log(`Engine Number: ${this.engineNumber}`); // ✓ Can access private property within the same class
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(engineNumber: string, brand: string, model: string) {
    super(engineNumber, brand);
    this.model = model;
  }

  showCarDetails() {
    // console.log(`Engine: ${this.engineNumber}`); // ✗ ERROR: Cannot access private property from parent class
    console.log(`Brand: ${this.brand}`); // ✓ Can access protected property from parent class
    console.log(`Model: ${this.model}`); // ✓ Can access private property within the same class
  }
}

const myCar = new Car("ENG123456", "Toyota", "Camry");
myCar.showEngineNumber(); // ✓ Can call public method
myCar.showCarDetails(); // ✓ Can call public method
// console.log(myCar.engineNumber); // ✗ ERROR: Cannot access private property from outside
// console.log(myCar.brand); // ✗ ERROR: Cannot access protected property from outside

// But the best industry standard practice is using type modifiers

class Employee {
  constructor(public name: string, public age: number, private _id: string) {}
  showId() {
    console.log("Hasan ID is: ", hasan._id);
  }
}

const hasan = new Employee("Hasan", 35, "59004");
console.log("type modifiers best practices", hasan);
hasan.showId(); //access the private property from the class

// 9d. Inheritance
// Inheritance is a mechanism in which a new class is created from an existing class. The new class is called a subclass and the existing class is called a superclass.

class Animal {
  constructor(private name: string) {
    this.name = name;
  }
  move() {
    return `${this.name} is moving`;
  }
}

class Dog extends Animal {
  bark() {
    return "Woof Woof . . . ";
  }
}

const mydog = new Dog("Tommy");
console.log(`${mydog.move()} and barking ${mydog.bark()}`);
