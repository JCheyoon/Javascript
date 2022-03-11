//es6 stuff

//-------------template literal ------------------
let word1 = 'Dylan';
let word2 = 'Israel';

const fullName = `${word1} ${word2}`;

console.log(fullName);


//-------------destructuring object ------------------


const player = {
  name: 'Lebron James',
  club: 'LA Lakers',
  address: {
    city: 'Los Angeles'
  }
};
/*
console.log( player.address.city );*/

const { name, club } = player;

console.log(`${name} plays for ${club}`);

const { name, club, address: { city } } = player;


console.log(`${name} lives in ${city}`);

//-------------destructuring-arrays ------------------

let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

lastName = 'Clements';

console.log(lastName)


//-------------object-literal ------------------

function addressMaker(city, state) {
  const newAdress = {city: city, state: state};

  console.log(newAdress);
}

addressMaker('Austin', 'Texas'); //{city: "Austin", state: "Texas"}

function addressMaker2(address) {
  const {city, state} = address;

  const newAddress2 = {
    city,
    state,
    country: 'United States'
  };
  console.log(`${newAddress2.city}, ${newAddress2.state}, ${newAddress2}`)
}

//-------------for-of-loop ------------------

let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
  console.log(income);
  total += income;
}

// console.log(total); //62000 ›67000 ›75000

const students = [
  { name: "John", city: "New York" },
  { name: "Peter", city: "Paris"},
  { name: "Kate", city: "Sidney" }
];


for( const student of students ) {
  console.log( student.name + " lives in " + student.city );
}
//John lives in New York
// ›Peter lives in Paris
// ›Kate lives in Sidney

// ---------------------Spread Operator ------------------

let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = [ "David", ...contacts, "Lily" ];

contacts.push("John");


let person = {
  name: "Adam",
  age: 25,
  city: "Manchester"
}

let employee = {
  ...person,
  salary: 50000,
  position: "Software Developer"
}
//console {name: "Adam", age: 25, city: "Manchester", salary: 50000, position: "Software Developer"}


//---------------------Rest Operator ------------------

function add(...nums) {

  console.log(nums);
}

add(4, 5, 7, 8, 12) // console [4, 5, 7, 8, 12]

// ------------------ Arrow Functions ------------------

//function declaration
function breakfastMenu() {
  return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
  return "I'm going to eat pizza for lunch";
}

const dinnerMenu = (food, drink) => `I'm going to eat a ${food} for dinner`;

console.log( dinnerMenu("chicken salad") );

//------------------ default-params ------------------

const leadSinger = (artist = "someone") => {
  console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger(); //- > 아무것도 전달하지 않으면 결과는 undefined 대신에 someone 된다

//------------------includes() -----------------

let numArray = [1,2,3,4,5];

console.log(numArray.includes(2)) // true

//----- let , const --------
//----- import , export----

//------------------ padStart() & padEnd() -----------------

let example = 'Dylan';

console.log(example.padEnd(10, 'a')); //Dylanaaaaa

//-------------------class ---------------------
/*
import { Animal } from './animal.js';

let cat = new Animal('Cat', 4);

console.log(cat.metaData)

// this will be index.js
 */
export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound = 'Loud Noise') {
    console.log(sound);
  }

  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }

  static return10() {
    return 10;
  }
}
//console -> Type: Cat, Legs: 4

// ---------------------Promises---------------------

const buyFlightTicket = () => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      const error = true;

      if( error ) {
        reject("Sorry your payment was not successful")
      } else {
        resolve("Thank you, your payment was successful");
      }
    }, 3000)
  })
}

buyFlightTicket()
  .then( (success) => console.log(success))
  .catch( (error) => console.log(error) );

// --------------------------------------------fetch ------------------------------

// fetch('https://jsonplaceholder.typicode.com/comments/1')
//     .then(response => response.json())
//     .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments', {
  method: "POST",
  body: JSON.stringify({
    postId: 1,
    name: 'Dylan',
    email: 'dylansemail310@gmail.com',
    body: 'That was dope!'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))

// ----------------- async & await --------------------

const photos = [];

async function photoUpload() {
  let uploadStatus = new Promise( (resolve, reject) => {
    setTimeout( () => {
      photos.push("Profile Pic");
      resolve("Photo Uploaded")
    }, 3000)
  })

  let result = await uploadStatus;

  console.log(result);
  console.log(photos.length);
}

photoUpload();