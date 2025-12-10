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

// Note: i.) if u update any data in ts file but not build it to js file then it will show the old data only in js file. So always build it after updating the ts file by using "npm run build" or "tsc" or "npx tsc" command.

// ii.) if u want to auto compile the ts file without building it to js file every time then run "tsc --w" or "npx tsc --w". then run only the file every time which is changed e.g. node dist/src/app1.js.

// What is typescript
// TypeScript is a programming language developed and maintained by Microsoft. It is a superset of JavaScript, meaning that any valid JavaScript code is also valid TypeScript code. TypeScript adds features such as static typing, interfaces, and classes to JavaScript, making it a more powerful and flexible language for building large-scale applications. অর্থাৎ JavaScript-এর উপর ভিত্তি করে তৈরি একটি প্রোগ্রামিং ভাষা, যেটি টাইপ সিস্টেম (type system) যোগ করে। It's a programming language based on javascript that adds type system.

// What is static typing?
// Static typing is a feature of TypeScript that allows you to specify the type of a variable, function, or object at compile time. This means that the type of a variable is checked before the code is executed, which can help catch errors early in the development process or in compile-time checks.

// 1 Primitives
// 1a. string
let studentName: string = "Arham"; // specify the type of variable
studentName = "Afnan"; // valid
// studentName = 123; // invalid

// 1b. number
let age: number = 21; // specify the type of variable
// age = "21"; // invalid
age = 3; // valid

// 1c. boolean
let isStudent: boolean = true;
isStudent = false; // valid
// isStudent = "true"; // invalid

console.log(studentName, age, isStudent);

// 2. Non Primitives

// 2a. Array

let scores: number[] = [90, 85, 88]; // specify the type of array
scores[0] = 999; // valid
// scores[1] = "85"; // invalid
console.log(scores);

// conventional way to declare an array
let employeeName: string[] = ["Hasan", "Muktadir", "Jahangir"];
console.log("conventional way of array declaration", employeeName);

// Alternative way to declare an array
let names: Array<string> = ["Arham", "Afnan", "Ammar"];
console.log("Alternative way for array declaration", names);

// 2b. tuples (fixed length array with known data type with maintaining the order)
// it is used to store multiple values of different types in a single variable

let universityStudent: [string, number, boolean] = ["Adnan", 24, true]; // specify the type of tuple
console.log("tuples example", universityStudent);

// 3. Special Types

// 3a. any type (not recommended, but it is used when we don't know the type of variable. but it is not safe to use any type because it can hold any type of value which can lead to runtime errors. it cannot be validated at compile time)
let isLoggedIn: any = false; // specify the type of variable
isLoggedIn = 123; // valid
isLoggedIn = "yes"; // valid
console.log("any", isLoggedIn);

// use case of any types
// 3a.i. JSON.parse returns "any" type because it does not recognise the type during compile time
const result = JSON.parse('{"name" : "Alice", "age":"30"}');
console.log(result);

// 3a. ii. variable without initialization
let something;
something = "Adnan";
something = 90;
console.log(something);

// 3b. unknown type (it is safer than "any" type because we have to check the type of variable before using it)
let data: unknown = "10";

if (typeof data === "number") {
  console.log("unknown", data); // valid
} else {
  console.log("data is not a number");
}

//3c. void type (it is used to specify that a function does not return any value i.e কোনো কিছু রিটার্ন করে না এমন ফাংশনের জন্য ব্যবহার করা হয়)
function logMessage(action: string): void {
  console.log("void function", action);
  //   return "Non Void function";
}

logMessage("working");

// 3d. null and undefined types
let notAssigned: undefined = undefined;
let emptyValue: null = null;

// some exercise-1 in exercise.ts file

// 3e. Function type signature
// Function type signature is a way to specify the type of a function. It is used to define the type of parameters and the return type of a function. It is also used to define the type of a variable that holds a function.
let sayName: (name: string) => string; // specify the type of function

sayName = function (name: string): string {
  //here return is set as string because specify the type of function is set string in upper line
  return `Hi ${name}`;
};

console.log(sayName("Rakib"));

// Optional parameters in function
// Optional parameter is set at last in the parameter of a function. from the following example if we provide parameter for optional it will show in result but if we not provide any parameter it will not give any error but do not show the optional result.
function employeeInfo(name: string, age: number, designation?: string): string {
  return `${name} is ${age} years old. Designation: ${
    designation ? designation : "N/A"
  }`;
}

console.log(employeeInfo("Muktadir", 34));
console.log(employeeInfo("Hasan", 36, "Sr. Executive"));

//Default parameters in function
// set a default value for a parameter in case no argument is passed for that parameter
function welcomeMSG(name: string = "Guest"): string {
  return `Hello! ${name}`;
}

console.log(welcomeMSG());
console.log(welcomeMSG("Bob"));

// 3f. never type (advanced type)
// never type is used to specify that a function never returns a value. it is used in functions that always throw an error or have an infinite loop.

try {
  function throwError(message: string): never {
    throw new Error(message);
  }
  throwError("This is an error message");
} catch (error) {
  console.log(error);
}

// 3g. Arrow function
const squareNum = (a: number): number => a * a;
console.log(squareNum(5));

// Exercise of calculator in calculator.ts file
