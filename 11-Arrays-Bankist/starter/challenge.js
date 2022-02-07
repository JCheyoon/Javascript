'use strict';
/*
const dogsJulia = [3, 5, 2, 12, 7]
const dogsKate =  [4, 1, 15, 8, 3]

function checkDogs (julia,kate){
  const juliaDogs = julia.slice(1,-2)
  const kateDogs = kate.slice() // [...kate]

  function checkAge(age,i){
    if(age>=3){
      console.log(`Dog number ${i+1} is an adult, and is ${age} years old`)
    } else {
      console.log(`Dog number ${i+1} is an puppy, and is ${age} years old`)
    }
  }
  const dogs = juliaDogs.concat(kateDogs)

dogs.forEach(checkAge)

}
checkDogs(dogsJulia,dogsKate)
 */

/*
//challenge2 :my code
const dogsAge = [5, 2, 4, 1, 15, 8, 3]

const calcAverageHumanAge = dogsAge.map((age) => {
  const humanAge = age <=2 ? 2 * age : 16 + age * 4
  return humanAge
})
// const calcAverageHumanAge2 = dogsAge.map((age) => age <=2 ? 2 * age : 16 + age * 4)

// console.log(calcAverageHumanAge)
const exclude18ageDogs = calcAverageHumanAge.filter(age => age >=18)
// console.log(exclude18ageDogs)
const averageHumanAge = exclude18ageDogs.reduce((acc,cur,) => {return acc + cur},0)/ exclude18ageDogs.length

console.log(averageHumanAge)

// const doSthg1 = (a, b) => (a + b)
// const doSthg2 = (a, b) => {return a + b}

//teacher code
const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  const average2 = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

  return average2;
};
const avg1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

//challenge3 :my code
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
  Test data:
  § Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
 */
const calcAverageHumanAge = ages => {
  // const result = ages
  //   .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
  //   .filter(age => age >= 18)
  //   .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  //
  // return result;
  return ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

// const add = (a, b) => {
//   // const result = a + b
//   //
//   // return result
//
//   return a + b;
// }
