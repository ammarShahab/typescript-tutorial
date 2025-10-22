// 12. Generics

// What is Generics?
// Generics is a feature in TypeScript that allows you to create reusable components that can work with different types of data. It is a way to define a type that can be used in multiple places in your code, without having to specify the type each time.

const addId = function <T>(obj: T) {
  // here <T> is generics i.e it can be any type and set the T type to obj
  const id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

type userType = {
  name: string;
  age: number;
};

const user: userType = {
  name: "Sabbir",
  age: 37,
};

const sabbir = addId(user);
console.log(sabbir); //{ name: 'Sabbir', age: 37, id: 18 }

// But the problem is if we pass any other type of data, it will not throw an error. It will just ignore the type and add the id property to the object.
console.log(addId(9)); // { id: 92 }

// To solve that see the following example
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

// Now if u pass different data type it will show error
// console.log(addId2("adnan")); //show error

// Use case of Generics in interface
// If u don't know the what type of data is coming in that case Generic is also used

interface APIResponse<T> {
  //Here set the <T> as variable
  status: number;
  message: string;
  data: T; //set the T as data type
}

const response: APIResponse<object> = {
  //here define the data type in a <> bracket
  status: 200,
  message: "Ok",
  data: {
    //if u pass string data type it will show error
    name: "Ammar",
  },
};
