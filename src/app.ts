// first create a package.json file using npm init -y
//then install typescript using:
/*  1. for local install for specific project: npm install typescript --save-dev (from doc)
 2. for global install: npm install -g typescript (from doc) */
// then create a tsconfig.json file using npx tsc --init
//then from tsconfig.json file commented out "outDir": "./dist" and "rootDir": "./src"
// then install  npm i -D nodemon typescript ts-node (here -D is used for development purpose)
// then create a src folder and inside that create app.ts file
// then add "dev": "nodemon src/app.ts" in scripts of package.json file
// then run the app using npm run dev
// as it is in development mode to convert it to production mode go to package.json file and add "build": "tsc" in scripts
// then run tsc to convert it to production mode in javascript and it will create a dist folder with app.js file inside it

// or if u only want to run the js file after build then command in terminal "node dist/app.js"

// Note: if u update any data in ts file but not build it to js file then it will show the old data only in js file. So always build it after updating the ts file by using npm run build or tsc command.

// Example 1 Primitives
// string
let studentName: string = "Arham"; // specify the type of variable
studentName = "Afnan"; // valid
// studentName = 123; // invalid

// number
let age: number = 21; // specify the type of variable
// age = "21"; // invalid
age = 3; // valid

// boolean
let isStudent: boolean = true;
isStudent = false; // valid
// isStudent = "true"; // invalid

console.log(studentName, age, isStudent);

// Example 2 Non Primitives

// Array

let scores: number[] = [90, 85, 88]; // specify the type of array
scores[0] = 999; // valid
// scores[1] = "85"; // invalid
console.log(scores);

// Alternative way to declare an array
let names: Array<string> = ["Arham", "Afnan", "Ammar"];
console.log(names);

// tuples (fixed length array)
// it is used to store multiple values of different types in a single variable

let universityStudent: [string, number, boolean] = ["Adnan", 24, true]; // specify the type of tuple
console.log("tuples example", universityStudent);

function greet(name: string): string {
  // specify the type of parameter and after the parameter return the type of function which is string here
  return `Hello, ${name}!`;
}

console.log(greet("Arham"));

// any type (not recommended, but it is used when we don't know the type of variable. but it is not safe to use any type because it can hold any type of value which can lead to runtime errors. it cannot be validated at compile time)
let isLoggedIn: any = false; // specify the type of variable
isLoggedIn = 123; // valid
isLoggedIn = "yes"; // valid
console.log("any", isLoggedIn);

// unknown type (it is safer than "any" type because we have to check the type of variable before using it)
let data: unknown = "10";

if (typeof data === "number") {
  console.log("unknown", data); // valid
} else {
  console.log("data is not a number");
}

// void type (it is used to specify that a function does not return any value i.e কোনো কিছু রিটার্ন করে না এমন ফাংশনের জন্য ব্যবহার করা হয়)
function logMessage(action: string): void {
  console.log("void function", action);
  //   return "Non Void function";
}

logMessage("working");

// null and undefined
let notAssigned: undefined = undefined;
let emptyValue: null = null;
