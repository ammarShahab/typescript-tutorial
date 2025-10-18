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

//  4b. Type alias
// you cannot reassign type alias
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
  return `My favorite  ${
    actor.gender === "female" ? "actress" : "actor"
  } name is ${actor.name}. He is a ${actor.gender} ${
    actor.gender === "female" ? "actress" : "actor"
  }. His age is ${actor.age}. He took ${actor.hiredAmount}$ per film.`;
}
console.log(actorInfo(actor1));
console.log(actorInfo(actor2));

// 5. interface
// interface is similar to type alias but it is used to define the structure of an object. it is also used to define the structure of a class. it is also used to define the structure of a function. you can extend or reassign an interface.

// merge the interface of a person
interface Person {
  name: string;
}

interface Person {
  //merge the interface of a person
  age: number;
}

// but you can not merge type alias
type Animal = {
  name: string;
};

// type Animal = { age: number }; // error: Duplicate identifier 'Animal'.
