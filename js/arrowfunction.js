// arguments - псевдо масив

// function f(a, b) {
//   console.log("arguments :>> ", arguments);
//   // console.log("typeof arguments :>> ", typeof arguments);
//   // console.log("arguments instanceof Array :>> ", arguments instanceof Array);
//   // console.log("arguments instanceof Object :>> ", arguments instanceof Object);
//   let sum = 0;
//   for (let i = 0; i < arguments.lenght; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// f(1, 2, 3, 4);

// console.log("f(1, 2, 3, 4, 5) :>> ", f(1, 2, 3, 4, 5));

// 1 Написати ф-цію для розрахунку добутку необмеженої кількості переданих аргументів
// *2 Написати ф-цію виду
// calculate(operation, operand1, operand2, ..., operandN)
// де operation - це операціяб яка має бути виконана над операндами

// calculate("+", 1, 1, 10, 5);
// calculate("*", 1, 1, 10, 5);

// function mult() {
//   let acumulator = 0;
//   for (let i = 0; i < arguments.lenght; i++) {
//     acumulator += arguments[i];
//   }
//   return acumulator;
// }
// console.log("mult(2, 6, 4) :>> ", mult(2, 6, 4));

// f1(1, 2, 3);

// rest parameters - масиф
// rest parameters - треба оголошувати

// function f1(...args) {
//   // console.log("args :>> ", args);
//   const sum = args.reduce(function (acumulator, currentValue) {
//     return acumulator + currentValue;
//   }, 0);
//   return sum;
// }

// console.log("f1(1, 2, 3) :>> ", f1(1, 2, 3));
// console.log("f1(1, 2, 3, 8) :>> ", f1(1, 2, 3, 8));

// function f2(a, b, ...args){

// }
// f2(1, 2, 3)

//             властивість ф-ції |  треба оголошувати  | тип |  всі параметри?
// arguments            +                   -         Arguments        +
// rest                 -                   +           Array          -

// Arrow function

// function declaration
// function funcName(p1, p2){}

// function expression
// const fName = function (p1, p2){}

// function sum(a, b) {
//   return a + b;
// }

// // Стрілочні ф-ції
// // const sum2 = (a, b) => {
// //   return a + b;
// // };

// const sum2 = (a, b) => a + b;

// console.log("sum2(1, 2) :>> ", sum2(1, 2));

// // Записати isAudult у вигляді стрілочної ф-ції
// // Приймаэ вык
// // Повертаэ ыстину до повнолытнього, false для не повнолытнього

// // const isAudult = (age) => {
// //   return age >= 18;
// // };

// const isAdult = (age) => age >= 18;
// console.log("isAdult(33) :>> ", isAdult(31));

// //
// const packObject = (firstName, lastName) => {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// };

// console.log(
//   'packObject("Test", "Testovich") :>> ',
//   packObject("Test", "Testovich")
// );

// 1  Якщо параметр 1, то можно не брати в дужки
// const isAdult = (age) => age >= 18;
// 2  Якщо в тілі ф-ції тільки поверненя значеннч,
// const isAdult = (age) => age >= 18;
// то дужки i returnможно опустити
// 3 Якщо в короченному записі 2 повертається обєкт
// то потрібно взяти в ()
//  Ex.
// const packObject = (firstName, lastName) => ({

//     firstName: firstName,
//     lastName: lastName,
//   });

// Перевірити число a на парність (повертати true/false)
const isEven = (a) => a % 2 === 0;
console.log("isEven :>> ", isEven(15));

// Ф-ція greeting(lang, userName), яка має повертати
// 'Hello' + userName, if lang === 'en'
// 'Привет' + userName, if lang === 'ru'
// 'Привіт' + userName, if lang === 'ua'

const greetingOptions = {
  en: "Hello",
  ru: "Привет",
  ua: "Привіт",
};

const greeting = (lang, userName) => {
  return `${greetingOptions[lang]} ${userName}`;
};
console.log('greeting("en", "Ivo") :>> ', greeting("ua", "Ivo"));

// Обмеження:
// 1 Нема arguments
// 2 Нема свого this. Бере зі свого середовища
