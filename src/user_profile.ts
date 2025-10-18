// Exercise: Make a user profile data using type alias and interface.

// Step-1: make a common interface using interface
interface User {
  id: number;
  name: string;
  age: number;
}

// Step-2: create an Author data as the author can post a blog
interface Author extends User {
  post: string[];
}

// Step-3: create a status data
type Status = "active" | "inactive" | "banned";

// create the author object
const author1: Author = {
  id: 1,
  name: "Ammar Shahab",
  age: 37,
  post: ["post1", "post2", "post3"],
};

const status: Status = "active";

console.log(author1);
