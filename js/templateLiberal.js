// const greeting = 'Hello';
// const userName = prompt('Input name');
// console.log(greeting + ', ' + userName);
// console.log(`${greeting}, ${userName}`); // шаблонні строки

// 1*1=1
// 1*2=2
// 1*3=3

// 2*1=2
// 2*2=4
// 2*3=6

// for (let i = 1; i <= 10; i++) {
//   for (j = 1; j <= 10; j++) {
//     // console.log("i, j :>> ", i, j);
//     console.log(i + "*" + j + "=" + i * j);
//     //АБО
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

//Користувач має 3 попитки ввести пароль
//
//
let userPassword = "";
const PASSWORD = "qwerty";
const TRY_LIMIT = 3;
let correntTryNumber = 1;
let isPasswordCorrect = false;

do {
  // userPassword = prompt("Input password").trim(); // зайві пробіли
  isPasswordCorrect = prompt("Input password").trim() === PASSWORD;
  // } while (userPassword !== PASSWORD && correntTryNumber++ < TRY_LIMIT);
} while (!isPasswordCorrect && correntTryNumber++ < TRY_LIMIT);

// if (userPassword === PASSWORD) {
//   console.log("Password corect");
// } else {
//   console.log("Password incorect");
// }

// const PasswordCorrect = isPasswordCorrect ? 'correct' : 'incorrect';
console.log(`Password ${isPasswordCorrect ? "correct" : "incorrect"}`);
