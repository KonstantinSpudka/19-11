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

// Task: написати функцію для валідації імені користувача (4-32, string)
// якщо значення валідне, то повернути його
// якщо ні, то згенерувати помилку

function validateName(value) {
  if (typeof value !== "string") {
    throw new TypeError("name must be string");
  }
  if (value.length < 4 || value.length > 32) {
    throw new RangeError("name must be 4-32 characters");
  }
  return value;
}

try {
  const validatedName = validateName("Test");
} catch (error) {
  if (error instanceof TypeError) {
    console.log("name must be");
  } else if (error instanceof RangeError) {
    console.log("error");
  } else {
    console.log("error");
  }
}

// Task: Реалізувати функцію, яка приймає вік,
// повертає вік, якщо параметр відповідає вимогам,
// інакше генерує помилку

function validateAge(value) {
  if (typeof value !== "number") {
    throw new TypeError("age must be a number");
  }
  if (value < 0 || value > 150 || !Number.isSafeInteger(value)) {
    throw new RangeError(
      "Age must be bigger than 0 but smaller than 150 and it must be integer value."
    );
  }
  return value;
}

try {
  const validatedAge = validateAge(3.5);
  console.log("validatedAge :>> ", validatedAge);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("error : ", error);
  } else if (error instanceof RangeError) {
    console.log("error : ", error);
  } else {
    console.log("something went wrong.");
  }
}
