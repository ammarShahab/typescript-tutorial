// 14. Enum Type

// What is Enum Type?
// Enum is a type that represents a set of named constants. It is used to define a group of related values that have a fixed set of possible values. It is also used to define a set of related constants that can be used to represent a specific set of values. You can use both only enums and const enums.

// Types of enums

// i. Numeric enums (it will by default returns numeric value)
enum Keys {
  Up,
  Down,
  Left,
  Right,
}

console.log(Keys.Up); //0
console.log(Keys.Right); //0

// ii. String Enum (enums এ string value set করে দেয়া হয়।)

const enum Status {
  Active = "Active",
  Pending = "Pending",
  Reject = "Reject",
}

console.log(Status.Active);
console.log(Status.Reject);

// iii. Heterogeneous Enum (যখন Enum-এ নিউমেরিক এবং স্ট্রিং উভয় ধরনের মান একসাথে থাকে, তখন তাকে বলা হয় Heterogeneous Enum)

enum Responses {
  Success = 1,
  Failure = "Failed",
}

console.log(Responses.Success);
console.log(Responses.Failure);

//Exercise: create a function to find weekend

enum Weekdays {
  Saturday,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

function findWeekend(days: Weekdays): boolean {
  return days === Weekdays.Friday || days === Weekdays.Saturday;
}

console.log(findWeekend(Weekdays.Friday));
console.log(findWeekend(Weekdays.Monday));
console.log(findWeekend(Weekdays.Saturday));
