/**
 * Let's make a calculator 🧮
 */

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1

type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(command: Command, x: number, y: number): number {
  switch (command) {
    case "add":
      return x + y;
      break;
    case "substract":
      return x - y;
      break;
    case "multiply":
      return x * y;
      break;
    case "divide":
      return x / y;
      break;
    case "remainder":
      return x % y;
      break;
      throw new Error("unknown command");
  }
}
