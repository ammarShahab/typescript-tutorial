// ! 15. Condiotional Type

// In TypeScript, conditional type is used to assign a type of the variable based on the condition.

// ? Syntax (commented due to showing error)
// type a = Type extends anotherType ? TrueType : FalseType;

// Explain the Syntax:
/* 
- Type extends anotherType evaluates first
- is 'Type' is match with anotherType will set the variable "TrueType" nor "FalseType"
- the extends keyword checks that "Type" contains same as "anotherType" or at least contains one property of "anotherType"
*/

// Basic example
type Car = {
  name: string;
  model: number;
  year: number;
};

type Name = {
  name: string;
  purchaseDate: number;
};

type CarName = Car extends Name ? string : any;

const carName: CarName = "Ford";
// Here Car contains one property of Name type which is {name: string}
console.log("Basic example without using Generics or Constraints: ", carName);

// ? Generic conditional type

// Example-1:
type IsString<T> = T extends string ? string : any;

let a: IsString<string> = "Hello";
let b: IsString<boolean> = false;
let c: IsString<"arham"> = "Arham";

console.log("Generic Conditional Type: ", a, b, c);

// Example-2:
type IsNumArray<T> = T extends number[] ? number : string;

let num1: IsNumArray<number[]> = 9;
let string1: IsNumArray<string[]> = "9";

console.log("Generic Conditional type: ", num1, string1);

// ? Constraints conditional type

// Generics are used for reusable type. But if you want to reuse them for specific data type like number, araay etc add constraints with genrics type.

// Syntax:
// type Constraint<T extends T1 | T2> = T extends Type1 ? Type1 : Type2;

// Example_1:
type NumberOrString<T extends number | string> = T extends number
  ? number
  : string;

const number: NumberOrString<number> = 5;
const string: NumberOrString<string> = "5";
// const boolean: NumberOrString<boolean> = true; //Type 'boolean' does not satisfy the constraint 'string | number'

console.log("Constraints conditional type: ", number, string);
