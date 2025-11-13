//Exercise: make api response reusable function which will fetch data from backend to frontend for different datatype using generics

// step:1 creating a interface and define generics as T for APIResponse
interface APIResponse<T> {
  status: number;
  message: string;
  data: T;
}

// step: 2 created a function and set the generics as per interface APIResponse<T> = which is already defined generics
function handleApiRes<T>(response: APIResponse<T>) {
  if (response.status === 200) {
    console.log("message:", response.message);
    return response.data;
  } else {
    console.log("Bad api request");
  }
}
// step: 3 sending the data and specify what the properties will be the data contains
const response = handleApiRes<{ name: string; age: number }>({
  status: 200,
  message: "successfully fetched user data",
  data: {
    name: "Alice",
    age: 29,
  },
});
console.log("response: ", response);

// sending another type of data which is string
const response2 = handleApiRes<string>({
  status: 200,
  message: "successfully fetched user data",
  data: "Nathan",
});

console.log("response2: ", response2);
// From the upper way we use one function and send several types of datatype
