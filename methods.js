'use strict';

console.log(23 === 23.0); // true
console.log(0.1 + 0.2 === 0.3); // false

console.log(Number('23'));
console.log(+'23');

// Parsing

console.log(Number.parseInt('30px'));
console.log(Number.parseInt('30px', 10)); // 10 --> Base10
console.log(Number.parseInt('30px', 2));
console.log(Number.parseInt('e23')); // NaN

console.log(Number.parseFloat('2.53rem'));

// check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('02'));
console.log(Number.isNaN(+'02X'));
console.log(Number.isNaN(20 / 0)); // Infinity

// Check if value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

console.log(Math.sqrt(25));
console.log(8 ** 1 / 3);

console.log(Math.max(5, 12, 23, 45, 22, 3, 2));
console.log(Math.max(5, 12, 23, 45, '22', 3, 2));
console.log(Math.max(5, 12, 23, 45, '22px', 3, 2)); // NaN
console.log(Math.min(5, 12, 23, 45, 22, 3, 2));
console.log(Math.min(5, '12', 23, 45, 22, 3, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 100) + 1);
// Generalized Math.random() method
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding Integers
console.log(Math.trunc(25.55));
console.log(Math.round(25.55));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.9));
console.log(Math.floor(23.9));
console.log(Math.floor('23.9'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding Decimals
console.log((2.5).toFixed(0)); // String
console.log((2.5).toFixed(3)); // 3 decimal places
console.log(+(2.335).toFixed(2));

// Remainder Operator
console.log(5 % 2);

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = 'orangered';
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = 'blue';
//     }
//   });
// });

// BigInt
console.log(2 ** 53 - 1); // MAX Number js can represent
console.log(Number.MAX_SAFE_INTEGER);

console.log(87777777777777777779879999999999997999999999999999999999987n); // n --> BigInt
console.log(BigInt(882981913872783787173897897389473));

console.log(1000000n + 100000000n);

const huge = 873262874293226339n;
const num = 23;
// console.log(huge * num); // error
// console.log(Math.sqrt(1n)); // error
console.log(huge * BigInt(num));
console.log(huge + ' is really big!');

console.log(11n / 3n);
console.log(11 / 3);
console.log(13n / 3n);

// Creating Dates and Times
const now = new Date();
console.log(now);

console.log(new Date('Mon Jul 11 2022 17:38:29'));
console.log(new Date('October 8,2022'));
// console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2039, 10, 19, 15, 23, 5));
// yyyy - mm - dd - hh - min - sec
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days later from previous command

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth()); // 0 based
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // Time Stamp
console.log(new Date(2142237180000));
console.log(Date.now());

future.setFullYear(2040);
console.log(future);

// Operations on Dates

console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));

console.log(days1);

const num1 = 38856847.23;
const options = {
  // style:'unit',
  style: 'currency',
  unit: 'celsius',
  // unit:'mile-per-hour',
  currency: 'EUR',
};
console.log('INDIA: ', new Intl.NumberFormat('en-IN', options).format(num1));
console.log('GERMANY: ', new Intl.NumberFormat('de-DE', options).format(num1));
console.log('SYRIA: ', new Intl.NumberFormat('ar-SY', options).format(num1));
console.log('US: ', new Intl.NumberFormat('en-US', options).format(num1));
console.log(
  'BROWSER: ',
  new Intl.NumberFormat(navigator.language, options).format(num1)
);

// TIMERS

// setTimeout
const ingredients = ['olives', 'spinach','cheese'];
const pizzaTimer=setTimeout(
  (ing, ing2) => console.log(`Here is your Pizza with ${ing} and ${ing2}.`),
  3000,
  // 'olives',
  // 'cheese'
  ...ingredients
); // 3000 --> time interval in milliseconds

// Deleting Timer
console.log('Waiting...');
if(ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval(() => {
//   const now = new Date();
//   console.log(now);
// },3000);