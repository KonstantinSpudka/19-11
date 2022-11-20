// const firstName = "Text";
// const lastName = "Testovich";
// const email = "test@imail.com";

// const obj = {}; // синтаксичний цукор
// const obj2 = Object();
// const obj3 = new Object();

// // властивості: рядки, Symbol()
// const user = {
//   // key:value,
//   firstName: "Test",
//   lastName: "Testovich",
//   email: "test@imail.com",
//   password: "qwert",
// };

// console.log("user :>> ", user);
// // alert(user); // Не віє виводити об'єкти

// // доступ до властивостей
// // Долавання властивостей
// user.age = 10;
// console.log("user :>> ", user);

// // Читання властивостей
// console.log("user :>> ", user.email);

// // // Видалення властивостей
// // delete user.password;
// // console.log("user :>> ", user);

// // // Створити об'єкт машини (марка, модель, год, номер, цвет)
// // // Просмотреть об'єкт
// // // Изменить колір
// // // удалити св-во год випуска
// // // Добавити св-во ім'я/призвище влсника
// // // продивитися об'єкт

// // const car = {
// //   mark: "Mersedes",
// //   model: "Brabus",
// //   year: 2022, // без лапок це цифри
// //   number: "007",
// //   color: "white",
// // };
// // console.log("car do:>> ", car);

// // // Зміна значення властивості
// // car.color = "black";
// // console.log("car after:>> ", car);

// // delete car.year;
// // console.log("car :>> ", car);

// // car.name = "Bogdan";
// // car.surname = "Hmelnickiy";
// // console.log("car :>> ", car);

// // /* Типи посилання і типи значення*/
// // const a = 5;
// // const b = 5;
// // console.log("a===b :>> ", a === b);

// // const o1 = {};
// // const o2 = {};
// // console.log("o1===o2 :>> ", o1 === o2);

// // const o3 = o1;
// // console.log("o1===o3 :>> ", o1 === o3);
// // o3.name = "property";
// // console.log("o1 :>> ", o1);

// // function f() {
// //   o3.lastName = 1;
// // }

// // f(o3);
// // console.log("o3 :>> ", o3);

// // /* Копіювання об'єкту чогось в об'єкт*/
// // const user1 = Object.assign({}, user);
// // console.log("user1 :>> ", user1);
// // console.log("user === user1 :>> ", user === user1);

// // /* Копіювання об'єкту №2 - спрощенний*/
// // const user2 = { ...user };
// // console.log("user2 :>> ", user2);
// // console.log("user === user2 :>> ", user === user2);

// /* */
// // const prop = prompt("input property");
// // const value = prompt("input value");

// // const obj = {
// //   [prop]: value,
// // };
// // console.log("obj :>> ", obj);

// const user = {
//   // key:value,
//   firstName: "Test",
//   lastName: "Testovich",
//   email: "test@imail.com",
//   password: "qwert",
//   // методи
//   // this той, об'єкт, що стоїть перед крапкою при виклику метода
//   // getFullName: function () {
//   //   // console.log("this :>> ", this === user);
//   //   // console.log("Hello from function");
//   //   // return `${this.firstName} ${this.lastName}`;
//   // },
//   // // changeEmail: function (newEmail) {
//   // //   this.email = newEmail;
//   // // },
//   // //2
//   // changeEmail(newEmail) {
//   //   this.email = newEmail;
//   // },
// };

// function getFullName(user1) {
//   return `${user1.firstName} ${user1.lastName}`;
// }

// console.log("getFullName(user) :>> ", getFullName(user));
// console.log("user.getFullName() :>> ", user.getFullName());
// user.changeEmail("newmail@gmail.com");
// console.log("user :>> ", user);

// // змінити колір машини

// const car = {
//   mark: "Mersedes",
//   model: "Brabus",
//   year: 2022, // без лапок це цифри
//   number: "007",
//   color: "white",

//   changeColor(newColor) {
//     this.color = newColor;
//   },
//   changeValue(valName, value) {
//     this[valName] = value;
//   },
// };

// car.changeColor("yellow");
// console.log("car :>> ", car);
// car.changeValue("year", 2000);
// console.log("car :>> ", car);

// // Перебор об'єкту за допомогою for in
// // в key послідовно поміщаються значення всііх властивостей
// for (const key in user) {
//   console.log("key :>> ", user[key]);
// }

// // використати for in для car
// // car [ім'я властивості] = значення

// for (const key in car) {
//   console.log(`Car ${key} = ${car[key]}`);
// }

// функція конструктор

// function User(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.getFullName = function () {
//     return `${firstName} ${lastName}`;
//   };
// }

// const user1 = new User("Test", "Testovich", "20");
// console.log("user1 :>> ", user1);
// const user2 = new User("user2", "user2stovich", "18");
// console.log("user2 :>> ", user2);

// console.log("user1.getFullName() :>> ", user1.getFullName());
// console.log("user2.getFullName() :>> ", user2.getFullName());

// const car = {
//   model: "audi",
//   fio: {
//     firstName: "Name",
//     lastName: "Famaly",
//   },
// };

// console.log("car :>> ", car);

// функція конструктор

function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };
}

// В жс прототипне наслідування
// Наслідування дозволяє всю спільну логіку для об'єктів певного типу
// виносити в спільні батьківськи елементи

// Спочатку шукаємо метод в об'єкті
// Якщо певний метод не знайдено в об'єкті, то він шукає в його прототипі
// Якщо не знайдено там, то то в прототипі прототипа

// const userPhoto = {}; // new User()

// userPhoto.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// User.prototype;

// const user4 = new User("Test", "Testovich", "20");
// console.log("user1 :>> ", user4);
// const user5 = new User("user2", "user2stovich", "21");
// console.log("user2 :>> ", user5);

// // Написати ф-цію конструктор для створення машини
// // Додати в прототип метод для зміни кольору машини
// // Створити за допомогою ф-ції конструктора 2 об'єкта

// function Car(model, color) {
//   this.model = model;
//   this.color = color;
// }
// Car.prototype.changeColor = function (newColor) {
//   this.color = newColor;
// };

// const car1 = new Car("Audi", "black");
// console.log("car1 :>> ", car1);
// const car2 = new Car("BMW", "white");
// console.log("car2 :>> ", car2);

const userList = {
  1: {id: 1, name: 'Test'}
  2: {id: 2, name: 'Ivo'}
}
