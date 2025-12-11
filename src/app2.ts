// 4. Object type and type alias
// 4a. Object structure typing

const student = {
  name: "Adnan Sami",
  age: 45,
};

function studInfo(user: { name: string; age: number }) {
  return `${user.name} is ${user.age} years old.`;
}

console.log(studInfo(student));

// 4b. Type alias
// type alias is used to define the structure of an object. It is also used to define the type of a variable that holds an object. you cannot reassign type alias.
// example:

type Actor = {
  name: string;
  age: number;
  gender: string;
  hiredAmount: number;
  married?: boolean; // optional property
};

const actor1: Actor = {
  name: "Pierce Brosnan",
  age: 55,
  gender: "male",
  hiredAmount: 10000,
  married: true,
};

const actor2: Actor = {
  name: "Angelina Jolie",
  age: 50,
  gender: "female",
  hiredAmount: 9000,
};

function actorInfo(actor: Actor): string {
  const pronoun = actor.gender === "female" ? "She" : "He";
  const anotherPronoun = actor.gender === "female" ? "Her" : "His";
  const chooseActorActress = actor.gender === "female" ? "actress" : "actor";
  return `My favorite  ${chooseActorActress} name is ${
    actor.name
  }. ${pronoun} is a ${
    actor.gender
  } ${chooseActorActress}. ${anotherPronoun} age is ${
    actor.age
  }. ${pronoun} took ${actor.hiredAmount}$ per film. ${
    actor.married ? `${pronoun} is married.` : `${pronoun} is not married.`
  }`;
}
console.log(
  actorInfo(actor1),
  "Type of actor info is: ",
  typeof actorInfo(actor1)
);
console.log(actorInfo(actor2));

// 5. type interface
// Interface is similar to type alias. But interface can be extended. It is used to define the structure of an object. It is also used to define the type of a variable that holds an object.
interface Car {
  name: string;
  model: string;
  price: number;
  isAvailable: boolean;
}

// Reassigning the interface

interface Car {
  year?: number; // you can reassign interface
}

const car1: Car = {
  name: "Toyota",
  model: "Corolla",
  price: 20000,
  isAvailable: true,
  year: 2020,
};

// extends the ineterface with keyword extends

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Tommy",
  age: 3,
  breed: "Labrador",
};
console.log("Dog info:", myDog);

// a use case of type alias in mongodb database
// define type with readonly where u cannot change the type of _id
type Users = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  cardDetail?: creditCardDetail;
};

//at025._id="556565656" //unable to change the readonly data and shows error

// adding creditCardDetails

type creditCardNumber = {
  cardNumber: number;
};

type creditCardExpiryDate = {
  expiryDate: string;
};

type creditCardDetail = creditCardNumber &
  creditCardExpiryDate & {
    cvv: number;
  };

const cardDetail: creditCardDetail = {
  cardNumber: 5624444,
  expiryDate: "25/10/28",
  cvv: 920,
};

const at025: Users = {
  _id: "56447",
  name: "Adnan",
  email: "email@gmail.com",
  isActive: false,
  cardDetail: cardDetail,
};

console.log("at025", at025);

// the upper method is not the best way to add credit card details but you should know the process.

// In that case we can use interface
interface Client {
  readonly _id: string;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}

// you can also reassign interface
interface Client {
  cardNumber: number;
  expiryDate: string;
  cvv: number;
}

const at026: Client = {
  _id: "54456666622222",
  name: "Adnan",
  age: 37,
  email: "ashahab007@gmail.com",
  isActive: true,
  cardNumber: 654412222,
  expiryDate: "25/09/29",
  cvv: 920,
};

console.log("at026", at026);

// when to use type alias and when to use interface?

// i. designing public API use interface
// ii. for simple object use both are fine
// iii. for complex object use interface
// iv. when you need to use the same name: use interface
// v. for union or intersection types use type alias
// vi. for primitive or function types use type alias
// vii. flexibility: interface is more flexible than type alias. because you can extend interface but you cannot extend type alias.

// Exercise in user_profile.ts file
