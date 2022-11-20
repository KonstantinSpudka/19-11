//Виведення в консоль
// console.log("Hello, world");

// //вывести в локальное окно
// //alert("Hello, world");

// /*багато строковий коментар */

// //змінні

// let a = 1;
// console.log("a =", a);
// a = a + 1;
// console.log("a =", a);

// const pi = 3.14; //Неможно перепристворювати значення
// console.log(pi);
// var b = 10; //старий стиль
// console.log("b =", b);

// // Стиль іменування camelCase
// // lowerCamelCase
// // UpperCamelCase

// // PI, MATH_PI

// // 1 a-z, A-Z, _, $
// // 2 ... a-z, A-Z, 0-9, _, $

// //типи данних - римітивні
// //            - object

// //літеральні значення
// const stringVariable1 = "string1";
// const stringVariable2 = "sring2";
// const stringVariable3 = "sring3";

// console.log('He, say :  "Hello"');

// // number
// // 1, 22, -50, 10.5, 10e5, Infinity, -Infinity, 0 (+0, -0), NsN

// const numberVariable1 = Infinity;
// console.log("numberVariable1 :>> ", numberVariable1);

// const numberVeriable1 = Infinity;

// console.log("10 / 0 ;>> ", 10 / 0);
// console.log("10 / 0 ;>> ", 10 / 0);
// console.log('"abc" / 5 ;>> ', "abc" / 0);

// // bigint
// const bigintValue = 99999999999999999999;
// console.log("bigintValue :>> ", bigintValue);

// //true, false
// const boolValue = false;
// console.log("boolValue :>> ", boolValue);

// //symbol
// const symbolValue = Symbol();
// console.log("symbolValue :>> ", symbolValue);

// // undefined
// const undValue = undefined;
// console.log("undValue :>> ", undValue);

// // null / value null
// const nullValue = null;
// console.log("nullValue :>> ", nullValue);

// // не примітив oject

// const obj = {};

//typeof

// операції

// const a = 1;
// const b = 2;

// let c = null;
// c = a + b;

// const c = a + b;
// console.log("c :>> ", c);
// console.log("1 + 2 = :>> ", 1 + 2);
// console.log("1 -2 = :>> ", 1 - 2);
// console.log("1 * 2 = :>> ", 1 * 2);
// console.log("1 / 2 = :>> ", 1 / 2);
// console.log("1 % 2 = :>> ", 1 % 2); // остача від ділення

// console.log("2 ** 2 = :>> ", 2 ** 2); //степень
// console.log("Math :>> ", Math.sqrt(9)); //корень
// console.log("Math.abs(-10) :>> ", Math.abs(-10)); //??

//task a = 3, b = 4, c = ?
// корінь з а+б
// const a = 3;
// const b = 4;
// const c = Math.sqrt(a ** 2 + b ** 2);
// console.log("c :>> ", c);

//  Площа та періметр a = 5 S-? P-?

// const squareSide = 5;
// const S = squareSide ** 2;
// const P = squareSide * 4;
// console.log("P :>> ", P);
// console.log("S :>> ", S);

// let value = 10;
// value += 20;
// // value = value + 20;
// console.log("C :>> ", value);

// value2 = 10;
// value2 -= 20;
// console.log("value2 :>> ", value2);
// ще є *=, /=

// i = 1 + 1
// i +=1
// i++, ++i

// let i = 1;
// console.log("i++ :>> ", i++);
// console.log("i :>> ", i);
// console.log("i++ :>> ", i++);
// console.log("i :>> ", i);

// let j = 1;
// console.log("++j :>> ", ++j);
// console.log("j :>> ", j);

// //постфіксний декремент k--

// let k = 1;
// console.log("k-- :>> ", k--);
// console.log("k :>> ", k);

// //інфіксний декремент --l

// let l = 1;
// console.log("--l :>> ", --l);
// console.log("l :>> ", l);

// Приведення типу (явне)
// const result = 2 ** (3 ** 2);
// ("5");
// console.log('Number("5") :>> ', Number("5"));
// console.log('Number("abc") :>> ', Number("abc"));
// console.log("true :>> ", Number(true));
// console.log("false :>> ", Number(false));
// console.log("55n :>> ", Number(55n));
// console.log("undefined :>> ", Number(undefined));

//введення данних
const inputValue = Number(prompt("Введіть 1 число"));
const inputValue2 = Number(prompt("Введіть  2 число"));
const result = inputValue + inputValue2;
console.log("You summ is :>> ", result);
