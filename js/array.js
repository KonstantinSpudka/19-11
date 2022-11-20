// const userList = {
//   1: {id: 1, name: 'Test'}
//   2: {id: 2, name: 'Ivo'}
// }

// Array - впорядкована корекція

// const arr1 = []; // Синтаксичний цукор
// const arr2 = new Array();

// const arr3 = [1, 2, 3, 4];

// const users = [
//   { id: 1, name: "Test" },
//   { id: 2, name: "Ivo" },
// ];

// написати ф-цію для виводу елементів масиву

// function printArray(arr) {
//   for (let i = 0; i < arr.lenght; i++) {
//     console.log("arr[i] :>> ", arr[i]);
//   }
// }
// printArray(arr3);

// написати ф-цію для обчислення суми елементів масиву
// ф-ція приймає масив і повертає його суму

// function countArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.lenght; i++) {
//     console.log(arr[i]);
//     sum += arr[i];
//   }
//   return sum;
// }
// // console.log(countSum(arr3));

// const arr4 = arr3;

// // копіювання масивів

// const arr5 = Arrey.from(arr3);

// const arr6 = [...arr];

// // методи масивів

// arr3[arr3.lenght] = 5;
// console.log("arr3 :>> ", arr3);
// arr3.push(6);
// console.log("arr3 :>> ", arr3);

// ввести з консолі п єлементів масиву

// function inputArrey(n) {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt("Input item")));
//   }
//   return arr;
// }
// console.log("inputArrey(5) :>> ", inputArrey(2));

// console.log("arr3.pop :>> ", arr3.pop); // повертає і видає

// console.log("arr3.shift(10) :>> ", arr3.shift()); // повертає і видаляє перший елемент
// arr3.unshift(10);
// console.log("arr3 :>> ", arr3);
// arr3.unshift(11);
// console.log("arr3 :>> ", arr3);
// arr3.unshift(12);
// console.log("arr3 :>> ", arr3);

// // shift i unshift використовувати в крайніх випадках

// const singleNumbers = arr3.slice(3);
// console.log("singleNumbers :>> ", singleNumbers);

// // скопіювати однозначні числа
// const arr10 = [10, 15, 2, 3, 5, 25, 155];

// const singleNumbers2 = arr10.slice(2, -2); // рохуємо 2 з ліва та -2 з права
// // const singleNumbers2 = arr10.slice(2, 5);
// console.log("singleNumbers2 :>> ", singleNumbers2);

// // видалити з arr10 5ку

// arr10.splice(4, 1); // 4 - рахунок з лыва, 1 скыльки післи видалити
// console.log("arr10 :>> ", arr10);

// const arr11 = [1, 2, 3];
// const arr12 = [11, 12, 13];
// const arr13 = arr11.concat(arr12);
// console.log("arr11.concat(arr12) :>> ", arr11.concat(arr12));

// перебір масиву
// for..in

// for (key in arr13) {
//   console.log(arr13[key]);
// }

// for (item of arr13) {
//   console.log("item :>> ", item);
// }

// //  перебрати for..of масив
// const users = [
//   { id: 1, name: "Test" },
//   { id: 2, name: "Ivo" },
// ];

// for (const iterator of users) {
//   console.log("Users :>> ", iterator);
// }

//  Методи перебору масиву

// const myCallBack = function (x) {
//   console.log("x :>> ", x);
// };

// function f(callBack, a) {
//   callBack(a);
// }
// f(myCallBack, 5);

// const arr20 = [1, 3, 5, 7];

// function printArray(currentValue, index, array) {
//   console.log(
//     `currentValue: ${currentValue};
//   index: ${index};
//   array: ${array};`
//   );
// }
// arr20.forEach(printArray);

// const users = [
//   { id: 1, name: "Test" },
//   { id: 2, name: "Ivo" },
// ];

// users.forEach(function (user) {
//   user.isLiked = false;
// });
// console.log("users :>> ", users);

// // вивести users за допомогою forEach

// function printUsers(currentValue, index, array) {
//   console.log(currentValue);
// }
// users.forEach(printUsers);

// map => новий масив з елементами,
// які повертаються з колбеку для кожного елемента вихідого

// const arr21 = [10, 20, 30];

// function mapArray(currentValue) {
//   return currentValue ** 2;
// }

// const arr22 = arr21.map(mapArray);

// filter -

// const arr23 = [1, 2, 3, 4];

// function isOdd(item) {
//   return item % 2 === 1;
// }

// const arr24 = arr23.filter(isOdd);

// const arr25 = [1, -5, 3, -11, -55]; // відфільтрувати положительні (позитивні) чила

// function isPoz(item2) {
//   return item2 > 0;
// }

// const arr26 = arr25.filter(isPoz);
// console.log("arr26 :>> ", arr26);

// // findIndex

// function find3(item) {
//   return item === -5;
// }
// const foundedIndex = arr25.findIndex(find3);

// const a = [];

// a.lenght(4);
// a.push();
// a.shift();
// a.unshift(1);

// for (const iterator of a) {
// }

// const a1 = a;
// // Або
// const a7 = Array.from(a);
// const a2 = [...a];

// a.arrayMethod(function(currentValue, index, array){})

const a3 = [1, 2, 3];
const a4 = [6, 7, 8];
const a5 = a3.concat(a4);
// Або
const a6 = [...a3, ...a4];
