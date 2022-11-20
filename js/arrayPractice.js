function Phone(id, brand, makeYear, color, isNfs, price) {
  this.id = id;
  this.brand = brand;
  this.makeYear = makeYear;
  this.color = color;
  this.isNfs = isNfs;
  this.price = price;
}

const phonesCount = 100;

const phones = [];

for (let i = 0; i < phonesCount; i++) {
  const phone = new Phone(
    i,
    Math.random() > 0.5 ? "Sumsung" : "Iphone",
    `Series ${Math.trunc(Math.random() * 20)}`,
    2015 + Math.trunc(Math.random() * 8),
    Math.random() > 0.5 ? "whiite" : "back",
    Math.random() > 0.5,
    5000 + Math.trunc(Math.random() * 7000)
  );
  phones.push(phone);
}

console.dir(phones);

//-------

function filter8000Phone(currentValue, index, array) {
  currentValue.price > 8000;
}

const priceBigger8000Phones = phones.filter(filter8000Phone);

// 1 Відібрати телефони дорожче 8000

// 2 Відібрати телефони 2018 року випуску

// function filter.2018Phone(currentValue){
//   return currentValue.makeYear === 2018;
// }

// 3 Вивести 'brand: model year' кожного телефону

function printPhone(phone) {
  console.log(`${phone.brand}; ${phone.model}; ${phone.makeYear}`);
}
phones.forEach(printPhone);

// 4 Видалати телефон з id 10

function findPhoneIndex(phone) {
  return phone.id === 10;
}

const foundedPhoneIndex = phones.findIndex(findPhoneIndex);
phones.splice(foundedPhoneIndex, 1);

// 5 Отримати масив з телефонами, ціна яких нижча на 5% від вихідної

function mapPhones(phone) {
  const p = phone;
  p.price = p.price * 0.95;

  return p;
}

const salePhones = phones.map(mapPhones);
console.log("salePhones[0].price :>> ", salePhones[0].price);

// 6 Вивести бренд+модель телефонів із nfc.

// function filterNfcPhones(phone) {
//   return phone.isNfc;
// }

// const nfcPhones = phones.filter(filterNfcPhones);

// function printBrandModel(phone) {
//   console.log(`${phone.brand} ${phone.model}`);
// }

// nfcPhones.forEch();

// 7 Вивести дані про моделі apple 2016 року

const arrApple2016 = phones.filter(
  (item) => item.makeYear === 2016 && item.brand === "Iphone"
);

// (+ every, some)
// *8 Перевірити, чи є золоті телефони
// *9 Перевірити, чи всі телефони пізніше 2013 випуску
// *10 Дізнатися, чи всі білі айфони з нфc
