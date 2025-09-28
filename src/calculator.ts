// Make a calculator

function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}

const multiple = (a: number, b: number): number => a * b;

function divide(a: number, b: number): number {
  try {
    if (a === 0 || b === 0) {
      throw new Error("Cannot divide by zero");
    }
  } catch (error) {
    console.log(error);
  }
  return a / b;
}

function power(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent);
}

function calculate(operator: string, num1: number, num2: number) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiple(num1, num2);
    case "/":
      return divide(num1, num2);
    case "^":
      return power(num1, num2);

    default:
      throw Error("Invalid Input");
  }
}

console.log("Addition", calculate("+", 10, 12));
console.log("Subtraction", calculate("-", 10, 12));
console.log("Multiplication", calculate("*", 10, 12));
console.log("Division", calculate("/", 0, 12));
console.log("Square", calculate("^", 10, 12));
// console.log("Square", calculate(")", 10, 12));
