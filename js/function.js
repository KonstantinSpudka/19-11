// Функції

// Повторне використання коду

// Оголошення функціцї
// function functionName{}
// {
// function body
// }

// functionName{} - виклик функції

// function sayHello() {
//   console.log("Hello");
// }
// sayHello();
// sayHello();
// sayHello();
// sayHello();

// // Передавання до функції

// const userName = "Ivo";

// function sayHelloToUser(name) {
//   console.log(`Hello, ${name}`);
// }
// sayHelloToUser(userName);

// // Повернення значень із функції

/**
 *
 * @param {number} a - First summand
 * @param {number} b - Second summand
 * @returns {number} Sum of to sumand
 */

function sumAB(a, b) {
  const s = a + b;
  return s;
}
// const sum = sumAB(4, 5);
// console.log("sum :>> ", sum);
// // 2
// console.log("sumAB(15, 30) :>> ", sumAB(15, 30));

// // Написати функцію для розрахунку числа в степені 4: 5=>625; 2+>16

// function in4(num) {
//   return num ** 4;
// }
// console.log(in4(2));

// Написати функцію для розрахунку суми чисел від 1 (^m) до N
// 5 => 1+2+3+4+5 = 15
// 5,7 => 5+6+7 = 18

// function sumToMaxValue(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(sumToMaxValue(5, 10));

// Написати функціюб яка повертає true  для повнолітнього користувача
// false - для неповнолітнього

// function isAdult(age) {
//   let x = age >= 18 ? true : false;
//   return x;
// }

// console.log(isAdult(17));

// 2
// function isAdult(age) {
//   return age >= 18;
// }

// console.log(isAdult(18));

// Написати функцію, яка за рядком "Ivo Smith" сформує рядок з ініціалами ('IS)

// function getInitials(userFullName) {
//   // знайти індекс пробіла
//   const spaceIndex = userFullName.indexOf(" ");

//   // скомпанувати 1 символ після пробілу
//   const initials =
//     userFullName.substring(0, 1) +
//     userFullName.substring(spaceIndex + 1, spaceIndex + 2);
//   return initials;
// }

// console.log('getInitials("") :>> ', getInitials("Ivo Smith"));
// console.log('getInitials("") :>> ', getInitials("Wally Brawn"));

// значення за умовченням / типове значення

// function power(base, pow) {
//   return base ** pow;
// }
// console.log("power (10, 2):>> ", power(10));

function power(base, pow = 4) {
  // if (pow === undefined) {
  //   pow = 4;
  // }
  return base ** pow;
}
console.log("power (10, 2):>> ", power(10, 2));

// Реалізувати функцію для розрахунку добутку чиссел від
//n1(=1) до n2
// 10, 12 => 10*11*12
// => 1*2*3

function multiply(n2, n1 = 1) {
  let power = 1;
  for (n1; n1 <= n2; n1++) {
    power *= n1;
  }
  return power;
}
console.log("multiply (4, 2):>> ", multiply(4, 2));

/*function expression / функціональну вираження*/
// не можно використовувати до ініціалізації
const sum3 = function sum4(a, b) {
  return a + b;
};

// Анонімна функція
// function (a, b){
// return a + b;
// };

// Переписати функцію для піднесення до степеня у формі function expression

const pow = function (a, b) {
  return a ** b;
};
console.log("pow (2, 3) :>> ", pow(2, 3));

//  Чиста ф-ція -
// 1) детермінована ф-ція - ф-ція, яка при одних і
// тих самих значеннях параметрів, повертає один і той самий результат
// 2) без побічних ефектів (мережевы запити, введення/виведення данних)

// Не детермінована ф-ція - ПОГАНО!!!
function sum4(a) {
  return a + b;
}

let b = 10;
console.log("sum4(1) :>> ", sum4(1));

b = 15;
console.log("sum4 (1) :>> ", sum4(1));
