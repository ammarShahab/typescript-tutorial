//! 14. Enum Type

// What is Enum Type?
// Enum is a type that represents a set of named constants. It is used to define a group of related values that have a fixed set of possible values. It is also used to define a set of related constants that can be used to represent a specific set of values. You can use both only enums and const enums.

// Types of enums and the use case

// i. Numeric enums (it will by default returns numeric value)
// used for Position or Direction
enum Keys {
  Up,
  Down,
  Left,
  Right,
}

console.log(Keys.Up); //0
console.log(Keys.Right); //3

// Another use case is for Role

enum Role {
  Guest,
  User,
  Admin,
}

const role = Role.Admin;
console.log("role", role);

// ii. String Enum (enums এ string value set করে দেয়া হয়।)
// used for HTTP or API call status

const enum Status {
  Active = "Active",
  Pending = "Pending",
  Reject = "Reject",
}

console.log(Status.Active); //Active
console.log(Status.Reject); //Reject

// iii. Heterogeneous Enum (যখন Enum-এ নিউমেরিক এবং স্ট্রিং উভয় ধরনের মান একসাথে থাকে, তখন তাকে বলা হয় Heterogeneous Enum)

enum Responses {
  Success = 1,
  Failure = "Failed",
}

console.log(Responses.Success); //1
console.log(Responses.Failure); //Failed

// use case for toggle states or mode
enum Mode {
  Dark,
  Light,
}
console.log("Mode", Mode.Light);

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

// Exercise on enums
// if u have some post and the post contains some fixed status which is unchanged. Implement enums for post status.

enum PostStatus {
  Draft = "Draft",
  Archived = "Archived",
  Delete = "Deleted",
}

type Post = {
  title: string;
  description: string;
  status: PostStatus;
};

const post1: Post = {
  title: "Typescript Tutorials",
  description: "Hello  Typescript which gives the javascript a super power",
  status: PostStatus.Archived,
};

console.log("Exercise of post1: ", post1.status);

const post2: Post = {
  title: "Javascript Tutorials",
  description: "Hello Javascript which gives the web development a super power",
  status: PostStatus.Draft,
};

console.log("Exercise of post2: ", post2.status);
