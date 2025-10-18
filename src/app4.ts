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

// ! Last timestamp is 4:54:00
