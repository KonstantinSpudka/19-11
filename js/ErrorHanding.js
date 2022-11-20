// n! = 1*2*3...n;

// 5! = (1*2*3*4*5) = 4!*5
// 4! = 3! * 4
// 3! = 2! * 3
// 2! = 1! * 2
// 1! = 0! * 1

function fact(n) {
  // if (typeof n !== "number" || n < 0 || Number.isSafeInteger(n)) {
  //   throw new Error("n must be pozitive integer number value");
  // }
  if (typeof n !== "number") {
    throw new Error("n must be number value"); // на catch
  }
  if (n < 0 || Number.isSafeInteger(n)) {
    throw new Error("n must be pozitive integer value"); // на catch
  }

  if (n === 0) return 1;
  return n * fact(n - 1);
}

//debugger;
console.log("befor error");

try {
  // код, який потенційно може викликати помилки
  console.log("befor error");
  fact(5);
  console.log("arter error");
} catch (err) {
  if (err instanceof TypeError) {
    console.log("Input incorrect type");
  } else if (err instanceof RangeError) {
    console.log("Value must be pisitive integer");
  } else {
    console.log("Something went wrong");
  }
  // блок, куди буде передане куревання, якщо виникла вбудована помилка
  // або згенерувалася вручну в throw
  console.log("err :>> ", err);
}

console.log("arter error");
