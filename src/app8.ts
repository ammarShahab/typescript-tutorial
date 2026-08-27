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

// ? 15.a Generic conditional type

// Example-1:

type IsString<T> = T extends string ? string : any;

let a: IsString<string> = "Hello";
let b: IsString<boolean> = false;
let c: IsString<"arham"> = "Arham";

console.log("Generic Conditional Type: ", a, b, c);

// Example-2:
type IsNumArray<T> = T extends number[] ? number : string;

let num1: IsNumArray<number[]> = 9;
let string_1: IsNumArray<string> = "Generic Condiotional";
// let bool: IsNumArray<boolean[]> = true; //Type 'boolean' is not assignable to type 'string'.

console.log("Generic Conditional type: ", num1, string_1);

// ? 15.b Conditional type with Unions
// Conditional types are particularly useful with the Union types, where they are automatically distributed with all the Union members

// Example_1.a: When used with a union type, it applies to each member of the union

type toArray<T> = T extends any ? T[] : any;

type StringOrNumber = toArray<string | number>;

let arrays_1: StringOrNumber = [5, 9, 8];
let arrays_2: StringOrNumber = ["Rahim", "Karim", "Jashim"];

console.log("Condiotional type with Union: ", arrays_1, arrays_2);

// Example_1.b: Use case

type AddPrefix<T> = T extends string ? `Prefix-${T}` : never;

type Color = "Red" | "Green" | 404;

const Prefixed: AddPrefix<Color> = "Prefix-Green";
const Prefixed_2: AddPrefix<Color> = "Prefix-Red";
// const Prefixed_3: AddPrefix<Color> = 404; //Type '404' is not assignable to type '"Prefix-Red" | "Prefix-Green"'.

// Example_2: Extracting string

type ExtractString<T> = T extends string ? T : never;

type StringOnly = ExtractString<string | number | "123" | boolean>;

let extractString_1: StringOnly = "Adbab"; //Allowed
// let extractString_2: StringOnly = {}; //Type '{}' is not assignable to type 'string'.
// let extractString_3: StringOnly = 123; //Type 'number' is not assignable to type 'string'.

// ? 15.c Constraints conditional type

// Generics are used for reusable type. But if you want to reuse them for specific data type like number, array etc add constraints with genrics type.

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
