'use strict';
/*
Coding Challenge #1
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.

  Your tasks:
  1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
  1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
  0: JavaScript
1: Python
2: Rust
3: C++

(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by

1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.

5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
  The Complete JavaScript Course 21

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section �
GOOD LUCK �
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  displayResults() {
    alert('Poll results are: ' + this.answers);
  },

  registerNewAnswer() {
    let promptString = this.question + '\n';
    for (const option of this.options) {
      promptString += option + '\n';
    }
    promptString += '(Write option number)';
    const answer = prompt(promptString);
    const answerAsNumber = Number(answer);
    if (answerAsNumber >= 0 && answerAsNumber <= 3) {
      const currentValueOfAnswer = this.answers[answerAsNumber];

      this.answers[answerAsNumber] = currentValueOfAnswer + 1;

      this.displayResults();
    } else {
      alert('You entered a wrong number!');
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//----

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
//-

// -----------------------------------------------------------
// const lufthansa = {
//   airline: 'Lufthansa',
//   iatacode: 'LH',
//   bookings: [],
//   //book: function() {}
//   book (flightNum , name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);
//     this.bookings.push({flight:` ${this.iatacode}${flightNum}`,name})
//   },
// }
// // Method 는 object 안에있는 function.
//
// lufthansa.book(239,'Kin Peter') //Kin Peter booked a seat on Lufthansa flight LH239
// lufthansa.book(985, 'Jung cheyoon') //Jung cheyoon booked a seat on Lufthansa flight LH985
// console.log(lufthansa);
// /*{airline: 'Lufthansa', iatacode: 'LH', bookings: Array(2), book: ƒ}
// airline: "Lufthansa"
// book: ƒ book(flightNum , name)
// bookings: (3) [{…}, {…}, {…}]
// iatacode: "LH"
// [[Prototype]]: Object*/
//
// const eurowings = {
//   airline: 'Eurowings',
//   iatacode: 'EW',
//   bookings: [],
// }
//
// const book = lufthansa.book
//
// //Not working
// //book(23, 'sara williams') -> undefined at book
//
// // Call Method
// book.call(eurowings, 231, 'sara williams') //sara williams booked a seat on Eurowings flight EW231
// console.log(eurowings);
//
// book.call(lufthansa, 234, 'Siri Ipad') //Siri Ipad booked a seat on Lufthansa flight LH234
//
// //Apply Method
// const flightData = [584, 'Galaxy series']
// book.apply(eurowings, flightData) // Galaxy series booked a seat on Eurowings flight EW584
// console.log(eurowings);
// // book.call(eurowings, ...flightData) = book.apply(eurowings, flightData)
//
// //bind Method
//
// const bookEW = book.bind(eurowings) // use the book method in the lufthansa object but 'this' keyword point to eurowings obj.
//
// bookEW(23, 'Steven williams')
//
// const bookEW23 = book.bind(eurowings, 23)
// bookEW23 ('Petikem')
//
// //with event listeners
// lufthansa.planes =300;
// lufthansa.buyPlane = function(){
//   console.log(this);
//
//   this.planes++
//   console.log(this.planes);
// };
//
// // function buyPlaneForLufthansa() {
// //   lufthansa.buyPlane()
// // }
//
// // with passing the method but binding the original object to it
// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa))
//
// // with named function:
// // document.querySelector('.buy').addEventListener('click', buyPlaneForLufthansa)
//
// // with anonymous arrow function:
// // document.querySelector('.buy').addEventListener('click', () => lufthansa.buyPlane())
//
// //Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200)); //220
//
// const addVAT = addTax.bind(null, 0.23) //23% set
// // addVAT = value = value + value * 0.23;
//
// console.log(addVAT(100)); //123
//
// // - - - - - - - - - - - - - - - - -  위와 같음 - - - - - -
// const addTaxRate = function(rate){
//   return function(value){
//     return value + value * rate;
//   }
// }
// const  addVAT2 = addTaxRate(0.23)
//
// console.log(addVAT2(100)); //123
//------------------------------------------------------------------
// const greet = function(greeting){
//   return function(name){
//     console.log(`${greeting} ${name}`);
//   }
// }
//
// const greeterHey = greet('Hey')
//
// greeterHey('peti') //Hey peti
//
// greet('Hello')('petike') //Hello petike
//
// //Change it to Arrow function
// const greetArr = greeting => name =>  console.log(`${greeting} ${name}`);
//
// greetArr('Szia')('petike') // Szia petike
//------------------------------------------------------------------
// //First class and Higher order functions
//
// const oneWord = function(str){
//   return str.replace(/ /g, '').toLowerCase() // / /g-> regular expression(모든 space 를 찾음
// }
//
// const upperFirstWord = function(str){
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ')
// }
//
// //Higher-order function
// const transformer =function(str, fn){
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string ${fn(str)}`);
//
//   console.log(`Transformed by: ${fn.name}`);
//
// }
//
// transformer('JavaScript is the best!',upperFirstWord)
// /*Original string: JavaScript is the best!
// script.js:16 Transformed string JAVASCRIPT is the best!
// script.js:18 Transformed by: upperFirstWord*/
// transformer('JavaScript is the best!',oneWord)
// /*Original string: JavaScript is the best!
// script.js:16 Transformed string javascriptisthebest!
// script.js:18 Transformed by: oneWord*/
//
// //JS uses callback all the time
// const high5 = function(name){
//   console.log(typeof name === 'string' ? name : 'event', '✋✋');
// }
// document.body.addEventListener('click', high5);
// ['peti', 'cheyun' ,'siri'].forEach(high5);

//------------------------------------------------------------------
// // How passing  argument : value and reference
//
// const flight = 'LH234' //string - primitive(value) 원시타입
// const peti ={
//   name: 'peter kin',
//   passport: 2343434
// } // object : reference 참조 타입 .. 같은 메모리
//
// const checkIn = function(flightNum,passenger){
//   flightNum = 'LH899';
//   passenger.name= 'Mr. ' + passenger.name
//
//   if (passenger.passport === 2343434) {
//     alert('check in')
//   }
//   else {alert('wrong passport!')}
// }
// checkIn(flight,peti)
//
//
// console.log(flight);
// console.log(peti);
//
// //is the same as doing..
// // const flightNum = flight
// // const passenger = peti
//
// const newPassport = function(person){
//   person.passport = Math.trunc(Math.random() * 10000000000)
// }
//
// newPassport(peti);
// checkIn(flight,peti)
//---------------------------------------------------------------------
//default value

// const bookings = [];
// const  createBooking = function(flightNum, numPassengers =1,price =199*numPassengers)
// /* 정의된numpassenger을 연산자와함께저렇게 디폴트 벨류에 쓸려면 이미 이전에 정의되어있어야한다. 예를들어 numpasseger가 price보다 뒤에 있으면 작동x */{
//   const booking = {
//     /*ES5 default value set
//    numPassengers = numPassengers || 1;
//    price = price || 199;*/
//     flightNum,
//     numPassengers,
//     price,
//   }
//   console.log(booking);
//   bookings.push(booking)
// }
// createBooking('LH123') //{flightNum: 'LH123', numPassengers: 1, price: 199}
// createBooking('LH124',2,880) //{flightNum: 'LH124', numPassengers: 2, price: 880}
// createBooking('LH125',3) //{flightNum: 'LH125', numPassengers: 3, price: 597}
// createBooking(' lh156',undefined,233)//디폴트 벨류를 스킵하고 싶을땐 undifined를 적으면 된다
