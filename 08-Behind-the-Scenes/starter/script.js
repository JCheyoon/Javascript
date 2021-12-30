'use strict';

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     const ouput = `You are ${age}, born in ${birthYear}`;
//     console.log(ouput);

//     //Block scope
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `oh, and you are a millenial,${firstName}`;
//       console.log(str);
//     }
//     console.log(millenial);
//   }
//   printAge();

//   return age;
// }

// //global var
// const firstName = 'cheyoon';
// calcAge(1994);

// var me = 'cheyoon';
// let job = 'student';
// const year = 1994;

// //function

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

//----에러나는 예시. numproduct 가 undefine이다----
// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart()
//   {
//     console.log('All product deleted!');
//   }
//

// let numProducts = 10;

// if (!numProducts) deleteShoppingCart();
// else {
//   console.log('product in the cart');
// }

// function deleteShoppingCart() {
//   console.log('All product deleted!');
// }

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAge(1994);

// const calcAgeArrow = birthYear => {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAge(1985);

// const cheyoon = {
//   year: 1994,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2021 - this.year);

//     const isMillenial = function () {
//       console.log(this);
//       console.log(this.year >= 1981 && this.yer <= 1996);
//     };
//     isMillenial();
//   },
// };

// let age = 26;
// let oldAge = age;
// age = 27;
// console.log(age);
// console.log(oldAge);

let lastName = 'kin';
let oldlastName = lastName;
lastName = 'davis';
console.log(lastName, oldlastName);

const jessie = {
  firstName: 'jessie',
  lastName: 'williams',
  age: 27,
};
const marriedjessie = jessie;
marriedjessie.lastName = 'Davis';
console.log('Before marriage', jessie);
console.log('after marriage', marriedjessie);
