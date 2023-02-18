// task 1

const string = "how are you doing?";
const newStr = string.toLocaleUpperCase();
console.log(newStr);

// task 2

function filterString(array, str) {
  str = str.toLowerCase();
  let result = array.filter(function (element) {
    element = element.toLowerCase();
    return element.startsWith(str);
  });
  return result;
}
let array = ["Apple", "banana", "apricot", "Orange", "Avocado", "arcade"];
let str = "ap";
let newArray = filterString(array, str);
console.log(newArray);

// task 3

const num = 32.58884;
const lowerNum = Math.floor(num);
const higherNum = Math.ceil(num);
const roundNum = Math.round(num);

console.log(lowerNum);
console.log(higherNum);
console.log(roundNum);

// task 4

const arr = [52, 53, 49, 77, 21, 32];
const minNum = Math.min(...arr);
const maxNum = Math.max(...arr);

console.log(minNum);
console.log(maxNum);

// task 5

function randomNum(minNum, maxNum) {
  return Math.round(Math.random() * maxNum);
}
console.log(randomNum(0, 10));

// task 6

function randomArr(num) {
  let arr = [];
  for (let i = 0; i < num / 2; i++) {
    arr.push(Math.round(Math.random() * num));
  }
  return arr;
}
console.log(randomArr(10));

// task 7

function randomNum(minNum, maxNum) {
  return Math.round(Math.random() * (maxNum - minNum)) + minNum;
}
console.log(randomNum(5, 15));

// task 8

let currentDate1 = new Date();
console.log(currentDate1);

// task 9

let currentDate2 = new Date();
currentDate2.setDate(currentDate2.getDate() + 73);
console.log(currentDate2);

// task 10

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

let myDate = new Date();
const functionDate = (myDate) => {
  const hour = myDate.getHours();
  const minute = myDate.getMinutes();
  const second = myDate.getSeconds();
  const wholeDate =
    myDate.getDate() +
    " " +
    months[myDate.getMonth()] +
    " " +
    myDate.getFullYear() +
    "- это " +
    days[myDate.getDay()];
  const result = `Дата: ${wholeDate} \nВремя: ${hour}:${minute}:${second}`;
  return result;
};
console.log(functionDate(myDate));
