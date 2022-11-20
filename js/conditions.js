// if - розгалуження

// if (умова){
// гілка true;
// }
// else{
// гілка false;
// }

// Булевськи змінні пишуться з is

// const isLogged = true;

// if (isLogged) {
//   console.log("You are logged in )))) ");
// } else {
//   console.log("Try again (((");
// }

// const isEnougMoney = true;

// if (isEnougMoney) {
//   console.log("Операцію схвалено! :) ");
// } else {
//   console.log("Операцію не схвалено! ;(");
// }

// // Перевірити чи скінченне число ввів користувач і вивести повідомлення

// const imputValue = Number(prompt("Input number")); // =>55, Infinity, NaN

// if (Number.isFinite(imputValue)) {
//   console.log("number  ");
// } else {
//   console.log("not a finite number  ");
// }

// const age = 18;

// // Умовні операції
// console.log("age > 18 :>> ", age > 18);
// console.log("age < 18 :>> ", age < 18);
// console.log("age >= 18 :>> ", age >= 18);
// console.log("age <= 18 :>> ", age <= 18);

// // Не срога рівність / Не рівність - ПОГАНО!
// console.log("age == 18 :>> ", age == 18);
// console.log("age == 18 :>> ", age == "18");

// console.log("age != 18 :>> ", age != 18); // Не рівність
// console.log("age != 18 :>> ", age != "18");

// // Строга рівність
// console.log("age === 18 :>> ", age === 18);
// console.log("age === 18 :>> ", age === "18");
// console.log("age !== 18 :>> ", age !== "18");

// Якщо користувач повнолітній, то привітати, як що ні - доступ заборонено

// const age = 20;

// if (age >= 18) {
//   console.log("Wellcome!");
// } else {
//   console.log("Accece is denied");
// }

// Скорочена форма if

// При вході перевірити, чи користувач повнолітній
// Як що ні - то видати попередження про обмеженний доступ
// Вивисти привітання

// if(умова){
//   гілка true
// }

// const age = 18;

// if (age < 18) {
//   console.log("Деякі функції будуть обмеженні");
// }

// console.log("Вітаємо на сайтті!");

// Якщо не повнолітній Wellcome
// Іначе є сертификат, то Wellcome
// Іначе - вакцініровитися

// const age = 20;
// const isVaction = true;

// if (age < 18) {
//   console.log("Wellcome");
// }
// else {
//   if (isVaction) {
//     console.log("Wellcome");
//   }
//   else {
//     console.log("Please go to Vakcine");
//   }
// }

// if (умова){
// гілка true;
// }
// else if (умова){
// else if (умова){
// гілка false;
// }

// const age = 20;
// const isVaction = true;
// if (age < 18) {
//   console.log("Wellcome");
// } else if (isVaction) {
//   console.log("Wellcome");
// } else {
//   console.log("Please go to Vakcine");
// }

// Ввести 2 числа. Вивести більше

// const imputValue = Number(prompt("Input number"));
// const imputValue2 = Number(prompt("Input number 2"));

// if (imputValue > imputValue2) {
//   console.log("Більше число = ", imputValue);
// } else if (imputValue < imputValue2) {
//   console.log("Більше число = ", imputValue2);
// } else if (imputValue === imputValue2) {
//   console.log("Введенні числа рівні", imputValue + "=" + imputValue2);
// }

// Умовні (булевськи) операції

// умова І умова - умова && умова - age >= 18 && isVactionated
// умова АБО умова - умова || умова - age < 18 || isVactionated
// Не умова - !умова - !isVactionated

// const age = 18;
// const isVaction = true;

// if (age < 18 || isVaction) {
//   console.log("Wellcome");
// } else {
//   console.log("Please go to Vakcine");
// }

// console.group("Таблиця істенності для &&:");

// console.log("true && true :>> ", true && true); // true && true
// console.log("false && false :>> ", false && false);
// console.log("true && false :>> ", true && false);
// console.log("false && true :>> ", false && true);
// console.groupEnd();

// console.group("Таблиця істенності для ||:");

// console.log("true || true :>> ", true || true);
// console.log("false || false :>> ", false || false); // false || false
// console.log("true || false :>> ", true || false);
// console.log("false || true :>> ", false || true);
// console.groupEnd();

// console.group("Таблиця істенності для ||:");

// console.log("!true :>> ", !true);
// console.log("!false :>> ", !false);

// console.groupEnd();

//Вивести нагадуванняБ якщо парне число випало на п'ятницю

// const day = "Fridey";
// const date = 15;

// if (day === "Fridey" && date % 2 === 0) {
//   console.group("Ура є знижка");
// } else {
//   console.group("No Znyzki");
// }

// Ввести штфо про знижку, якщо пенсіонер або має не повнолітню дитину
// const userAge = 61;
// const userChildAge = 19;

// if (userAge > 60 || userChildAge < 18) {
//   console.group("Ура є знижка");
// } else {
//   console.group("No Znyzki");
// }

// // Якщо не повнолітній, то обмежити доступ
// const isAult = true;

// if (!isAult) {
//   console.log("Доступ обмеженно");
// }

// Перевірити чи число є 0 чи ні
// const a = -5;
// if (a === 0) {
//   console.log("0");
// } else {
//   console.log("Ne 0");
// }

//false - 0, yull, undefined, '', false, NaN

// const value = "5";
// // if(value !== undefined || value !== '' value !== null)
// // {
// //   console.log('Ok')
// // }

// if (value) {
//   console.log("Ok");
// } else {
//   console.log("No Ok");
// }

// Перевіритиб що прийшло число і воно не NuN

// const value = 10;

// if (typeof value === "number" && Number.isNaN(value) === false) {
//   console.log("number not NaN");
// }

// АБО
// if (!isNaN(value)) {
//   console.log("number not NaN");
// }

//-------------------------

// Рефлізувати переведення оцінки за 12б оцінки в 5б
// 12 - 5+
// 11 - 5
// 10 - 5-
// ... Mark < 5

// const mark = 12;

// if (mark === 12) {
//   console.log("5+");
// } else if (mark === 11) {
//   console.log("5");
// } else if (mark === 10) {
//   console.log("5-");
// } else {
//   console.log("Mark < 5");
// }

// 2

//Оператор множинного вибору
// switch.case
// switch (mark) {
//   case 12:
//     console.log("5+");
//     break;
//   case 11:
//     console.log("5");
//     break;
//   case 10:
//     console.log("5-");
//     break;
//   default:
//     console.log("Mark < 5");
// }

// Користувач вводе 2 числа A, B - операція ??? (*, /, +, -)
//Порахувати і вивести результат A ??? B
// '+', '-', ...

// const a = Number(prompt("Введить 1 число"));
// const b = Number(prompt("Введить 2 число"));
// const operation = prompt("*, /, +, -");

// switch (operation) {
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   default:
//     console.log("Введіть коректне число");
// }

// За введенням числа місяца, вивести пору року

// const inputMisyac = Number(prompt("Введить номер місяця"));

// switch (inputMisyac) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Зима");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Весна");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Літо");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Осінь");
//     break;
//   default:
//     console.log("Введіть коректне число місяця");
// }

// Тернарна (умовна) операція
// f + b, i++, -5
// a # u & h
// Знайти мінімальне з двох чисел

// const a = 5;
// const b = 7;
// let minAB = null;

// if (a < b) {
//   minAB = a;
// } else {
//   minAB = b;
// }
// console.log("minAB :>> ", minAB);

// // 2

// let minAB2 = a < b ? a : b;
// console.log("minAB :>> ", minAB);

// Задано вік користувача
// Вивести повідомлення
// якщо 18+ Повний доступ
// 18- Обмеженний доступ

// const userAge = Number(prompt("Введіть вік"));

// const abc = userAge >= 18 ? "Yes" : "No";
// console.log("userAge :>> ", userAge);

// const abc = userAge >= 18 ? alert("Yes") : alert("No");
// console.log("userAge :>> ", userAge);

//
// const abc = userAge >= 18 ? console.log("Yes") : console.log("No");
