'use strict';
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
console.log(flights.split('+'));

//-----------------------------------------------
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
  The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
  § Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
  GOOD LUCK �
 */
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
//
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);
//
//   // const arr = ['a', 'b', 'c']
//   // arr.entries() ===> [[0, 'a'], [1, 'b'], [2, 'c']]
//
//   for (const entry of rows.entries()) {
//     console.log(entry);
//     const [i, row] = entry;
//     const [first, second] = row.toLowerCase().trim().split('_');
//
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

//-------------------------------
// const changeUpper = function (sentence) {
//   const letter = sentence.split('_');
//   const letterUpper = [];
//
//   for (const l of letter) {
//     letterUpper.push(l[0].toUpperCase() + l.slice(1));
//   }
//   console.log(letterUpper.join(''));
// };
//
// changeUpper('underscore_case');
// changeUpper(' first_name');
// changeUpper('Some_Variable');
// changeUpper('  calculate_AGE');
// changeUpper('delayed_departure');
//---------------------------------------------------------------------------
// console.log('a+every+nice+string'.split('+')); //(4)['a', 'every', 'nice', 'string']
// console.log('kin peter'.split(' ')); //['kin', 'peter']
//
// const [firstName, lastName] = 'kin peter'.split(' '); //first-kin/ last-peter
//
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName); //Mr. kin PETER
//
// const capitalizeName = function (name) {
//   const names = name.split(' '); //이름을 스페이스로 나눠서 어레이만듬 ex) kin peter ->['kin','peter']
//   const namesUpper = []; //빈 어레이
//
//   for (const nev of names) {
//     //nev라는 var에 names 어레이들을 나열. kin / peter , /jessie / ann / smith /davis
//     namesUpper.push(nev[0].toUpperCase() + nev.slice(1)); //nev 의[0]번쨰는 uppercase로 바꾸고 nev [1번째]에서 잘라서 글을 나열함
//
//     //namesUpper.push(nev.replace(nev[0],nev[0].toUpperCase()) 이렇게해도됨
//   }
//   console.log(namesUpper.join(' ')); //스페이스로 나뉜 글을 붙여서 나열해줌
// };
// capitalizeName('jessie ann smith davis'); //Jessie Ann Smith Davis
// capitalizeName('kin peter'); //Kin Peter
//
// //padding
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+')); //++++++++++++Go to gate 23
// console.log('Peti'.padStart(25, '+')); //+++++++++++++++++++++Peti
// console.log(message.padStart(25, '+').padEnd(30, '+')); //++++++++++++Go to gate 23+++++
//
// //real world padding example
// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
//
// console.log(maskCreditCard(37459192739155)); //**********9155
// console.log(maskCreditCard('343428997666113')); //**********6113
//
// //Repeat
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5)); //Bad weather... All Departures Delayed... Bad weather... All Departures Delayed... Bad weather... All Departures Delayed... Bad weather... All Departures Delayed... Bad weather... All Departures Delayed...
// const planeInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };
// planeInLine(3); //There are 3 planes in line ✈✈✈
// planeInLine(5); //There are 5 planes in line ✈✈✈✈✈
//--------------------------------------------------------
// const airline = 'TAP air Portugal';
// const plane = 'A230';
//
// console.log(airline.toLowerCase()); // tap air portugal
// console.log(airline.toUpperCase()); //TAP AIR PORTUGAL
//
// // Fix capitalization in name
// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
//
// console.log(passengerCorrect); // Jonas
//
// //------------------------
// let passenger2 = 'pEtI';
// const passengerNameChange = function (name) {
//   const passengerLower = name.toLowerCase();
//   return passengerLower[0].toUpperCase() + passengerLower.slice(1);
// };
//
// const correctName = passengerNameChange(passenger2);
// console.log(correctName);
//
// const passenger3 = 'cHEyun';
// const correct2 = passengerNameChange(passenger3);
// console.log(correct2);
//
// console.log(passengerNameChange('alFrEd'));
//
// //Comparing emails
// const email = 'hello@peti.io';
// const loginEmail = ' Hello@peti.Io \n';
//
// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);
//
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);
//
// //replacing
// const priceGB = '€288,97';
// const priceUS = priceGB.replace('€', '$').replace(',', '.');
// console.log(priceUS); //$288.97
//
// const announcement =
//   'All passengers come to Boarding door 23, Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// //All passengers come to Boarding gate 23, Boarding door 23!
// console.log(announcement.replaceAll('door', 'gate'));
// //All passengers come to Boarding gate 23, Boarding gate 23!
//
// //Booleans
// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320')); //true
// console.log(plane2.startsWith('Air')); //true
//
// if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
//   console.log('part of the new airbus family');
// }
//
// //practice exercise
//
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('you are not allowed ');
//   } else {
//     console.log('welcome');
//   }
// };
// checkBaggage('I have a laptop, some of foods and knife'); // not
// checkBaggage('camera'); //welcome
//----------------------------------
// console.log(plane[0]); //A
// console.log(plane[1]); //2
// console.log(plane[2]); //3
//
// console.log(airline.length); //16
//
// console.log(airline.indexOf('r')); //6 space 도 카운트함
// console.log(airline.lastIndexOf('r')); //10
//
// console.log(airline.slice(4)); // air Portugal
// console.log(airline.slice(0, airline.indexOf(' '))); // TAP
// console.log(airline.slice(airline.lastIndexOf(' '))); // portugal (with space)
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //portugal
//
// console.log(airline.slice(-2)); //al
// console.log(airline.slice(1, -1)); //AP Air portuga
//
// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😒');
//   else console.log('You got lucky');
// };
// checkMiddleSeat('11B'); // You got the middle seat 😒
// checkMiddleSeat('23C'); //You got lucky

// ------------------------------------------------------------------------------
// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);
// // Your tasks:
// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// const event = [...new Set(gameEvents.values())];
// console.log(event);
//
// // 2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
//
// gameEvents.delete(64);
// console.log(gameEvents);
//
// // 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );
//
// // 4. Loop  half or second half (after 45 min) of the game, like this:
// //   [FIRST HALF] 17: ⚽ GOAL
// // GOOD LUCK �
//
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'First' : 'second';
//   console.log(`${half}[HALF]${min}:${event}`);
// }
//-------------------------------------------------------------------------
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
//
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// };

//   // ES6 enhanced object literals
//   openingHours,
//
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//
//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },
//
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   }
// };
// //property Name
// const property = Object.keys(openingHours);
// console.log(property);
//
// let openstr = `we are open on ${property.length} days: `;
//
// for (const day of property) {
//   openstr += `${day}`;
// }
// console.log(openstr);
//
// //property values
// const values = Object.values(openingHours);
// console.log(values);
//
// //entire object
// const entries = Object.entries(openingHours);
//
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

/////////////////map iteration

// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct🎉'],
//   [false, 'Try again'],
// ]);
//
// console.log(question);
//
// //Convert object to map
// console.log(Object.entries(openingHours));
//
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
//
// //quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));
//
// //covert map to array
// console.log([...question]);

////////////////////////////////map
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal')); //set 이 map에입력된정보를 return, 그리고 아래와 같이 chain 을 할수있다
//
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'wer are open')
//   .set(false, 'we are closed');
//
// console.log(rest.get('name'));
// console.log(rest.get(true));
//
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //we are open : if the current time is between 11 to 23
//
// console.log(rest.has('categories')); //해당 키를 가지고있는지 확인
//
// rest.delete(2); //2에정의한 포루트칼 사라짐
// console.log(rest);
// // rest.clear() rest에있는 키 다 지워버리기
// console.log(rest.size);
//
// rest.set([1, 2], 'test'); //어레이에 테스트넣기 가능한데 // 0x0065477
// console.log(rest.get([1, 2])); // 0x0088888 //이렇게하면 undifined 왜냐면 get[1,2]는 다른 메모리로 인식되서.. 그래서 array에 넣고싶으면
// rest.set(document.querySelector('h1'), 'Heading');
// const arr = [1, 2]; // 0x002145
// rest.set(arr, 'test');
// console.log(rest.get(arr));

//////////////////////////////////////////////////////////////////set
// //SET = Never can be duplicate
// const ordersets = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'Rissoto',
//   'pasta',
//   'pizza',
// ]);
// console.log(ordersets); //{'pasta', 'pizza', 'Rissoto'}
// console.log(ordersets.size); //3
// console.log(ordersets.has('Pizza')); //true
//
// ordersets.add('Garlic Bread');
// console.log(ordersets); //{'pasta', 'pizza', 'Rissoto', 'Garlic Bread'}
// // orderset.claer(); 다지우는거
// console.log(new Set('petike')); //{'p', 'e', 't', 'i', 'k'}
//
// for (const order of ordersets) console.log(order);
// /*pasta
// script.js:90 pizza
// script.js:90 Rissoto
// script.js:90 Garlic Bread*/
//
// //example
// const staff = ['waiter', 'chef', 'waiter', 'Manger', 'chef', 'waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique); //new set(staff) ...없이는 {'waiter', 'chef', 'Manger'}
//
// //how many alphabet
// console.log(new Set('peterkin').size); //7
