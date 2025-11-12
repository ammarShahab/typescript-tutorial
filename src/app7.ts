// 12. Generics

// What is Generics?
// Generics is a feature in TypeScript that allows you to create reusable components that can work with different types of data. It is a way to define a type that can be used in multiple places in your code, without having to specify the type each time.

// Why generics is used which is explained in the following concepts
// if i have multiple data type and send to the same function  we have make a each function with each data type. It will be very difficult to maintain and it will be very hard to debug. See the following example

function logString(input: string): void {
  console.log(input);
}
function logNumber(input: number): void {
  console.log(input);
}
function logBoolean(input: boolean): void {
  console.log(input);
}

logString("Hello");
logNumber(123);
logBoolean(true);

// from the upper example we can see that we have to write the same function for each data type. So  instead of that we use generics. Generics is used to create reusable components that can work with different types of data.

// Example
function logInput<T>(input: T) {
  // here <T> is generics i.e it can be any type and set the T type to input
  console.log(input);
}

// call the function
logInput<string>("Generic");
logInput<boolean>(false);
logInput<number>(567);

// Some other way to use generics
const addId = function <T>(obj: T) {
  // here <T> is generics i.e it can be any type and set the T type to obj
  const id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

type userType = {
  name: string;
  age: number;
};

const user1: userType = {
  name: "Sabbir",
  age: 37,
};

const sabbir = addId(user1);
console.log(sabbir); //{ name: 'Sabbir', age: 37, id: 18 }

// But the problem is if we pass any other type of data, it will not throw an error. It will just ignore the type and add the id property to the object.
console.log("add Id", addId(true)); // { id: 92 } //What happens here You passed a boolean value (true). So, TypeScript infers T = boolean. Now, the return line is: return { ...obj, id }; But here’s the catch obj is not an object (it’s a primitive boolean). The spread operator (...obj) only works correctly with objects and arrays — not with primitives like boolean, string, or number. So internally: { ...true, id } becomes just { id: 42 }, because there’s nothing to spread from a boolean.

// 13. Constraints (give the rule using extends)
// To solve the upper problem see the following example
// We use extends with the datatype in the <T> which works as variable
const addId2 = function <T extends userType>(obj: T) {
  const id = Math.floor(Math.random() * 1000000);
  return { ...obj, id };
};

const user2 = {
  name: "Ehsan",
  age: 37,
  country: "Bangladesh", //as the data type accepts name and age which should not avoided we can also add country in user2 which will not show any error.
};

const ehsan = addId2(user2);
console.log(ehsan);

// Now if u pass different data type it will show error. So using constraints will solve the problem
// console.log(addId2("adnan")); //show error

// Another example of problem using constraints is when we want to get the length of the string using generics in a function as shown in the following example it will show error because string does not have length property. but it will not show any error after compilation, it shows undefined after compilation.
function logLength<T>(params: T) {
  console.log("Length is: ", params.length);
}

logLength<string>("Hellow Worl"); //11
logLength<number>(123); //undefined without showing any error

// to solve this use extends length as { length: number } i.e set the rule where type of length will be number
function logLength2<T extends { length: number }>(params: T) {
  console.log("Length 2 is: ", params.length);
}
logLength2<string>("Hellow World Hellow"); //19
// logLength2<number>(123); //showing error with Type number does not satisfy the constraints { length: number }

// Use case of Generics in interface
// If u don't know the what type of data is coming in that case Generic is also used

interface APIResponse<T> {
  //Here set the <T> as variable
  status: number;
  message: string;
  data: T; //set the T as data type
}

// sending object in a APIResponse
const objectResponse: APIResponse<object> = {
  //here define the data type in a <> bracket
  status: 200,
  message: "Ok",
  data: {
    name: "Ammar",
  },
  //if u pass string data type it will show error
  //name: 'Ammar', //show error type string is not assignable to type object
};

// sending boolean in a APIResponse. In that way u will create a one APIResponse and send multiple data type using generics
const booleanResponse: APIResponse<boolean> = {
  status: 200,
  message: "Ok",
  data: true,
};
