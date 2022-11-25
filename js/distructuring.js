function f({ userName = "Anonymus", title = "pan", phone = "+380671234567" }) {
  //значення за умовчуванням
  // const name = params.name;
  // const title = params.title;
  // const phone = params.phone;

  // диструктоване присвоювання
  // const { name, title, phone } = params;

  console.log("in f :>> ", userName);
  console.log("in f :>> ", title);
  console.log("in f :>> ", phone);
}

f({ title: "pani" });

// імена змінних мають відповідати іменам властивостей об'єкта або вказані після :
const book = {
  author: {
    firstName: "Test",
    lastName: "Testovich",
  },
  price: 12,
};

const {
  author: { firstName, lastName },
  price,
} = book;

console.log("price :>> ", price);
console.log("firstName :>> ", firstName);
console.log("lastName :>> ", lastName);

// Диструктурування масивів
// Оголошені змінні співставляються за порядком елементів
const [firstItem, secondItem, thirdItem] = [1, 2, 3];
console.log("firstItem :>> ", firstItem);
console.log("firstItem :>> ", thirdItem);

const user1 = {
  name: "Test",
  age: 23,
  emails: ["test1@test.com", "test2@test.com"],
  isMale: true,
};

// name, age, email, (email1, email2)
// перейменувати name -> userName, age -> userAge

const {
  name: userName,
  age: userAge,
  emails: [firstMail, secondMail],
  isMale,
} = user1;

console.log("userName :>> ", userName);
console.log("userAge :>> ", userAge);
console.log("emails :>> ", secondMail);

const [firstItem1, ...restItems] = [1, 2, 3, 4, 5];
console.log("firstItem1 :>> ", firstItem1);
console.log("restItems :>> ", restItems);

const { style, ...restAttrs } = {
  title: "title",
  style: "color:red;",
  id: "1",
};

console.log("style :>> ", style);
console.log("restAttrs :>> ", restAttrs);
