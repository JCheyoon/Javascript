'use strict';
/*
//oop class 에선 Capital letter 로 시작, arrow function은 this를 사용 못해서 사용못함

const Person = function (firstName,birthYear){
 this.firstname = firstName;
 this.birthyear = birthYear;
}

const cheyoon = new Person('Cheyoon', '1994')
console.log(cheyoon)
//1. New empty {} is created
//2.function is called, this = {}
//3. {} link to prototype
//4. function automatically return {}

const peti = new Person('Peter', '1985')
const glaxybook = new Person('laxy', '2021')
console.log(peti,glaxybook)

console.log(cheyoon instanceof Person)

//prototype
Person.prototype.calcAge = function (){
 console.log(2037 -this.birthyear)
}
console.log(Person.prototype)

cheyoon.calcAge()
peti.calcAge()

console.log(cheyoon.__proto__)
console.log(cheyoon.__proto__ === Person.prototype) //true

console.log(Person.prototype.isPrototypeOf(cheyoon))//true
console.log(Person.prototype.isPrototypeOf(peti))//true
console.log(Person.prototype.isPrototypeOf(Person)) //false

Person.prototype.specis = 'Homo sapiens'

console.log(cheyoon.specis,peti.specis)

console.log(cheyoon.hasOwnProperty('firstname'))
console.log(cheyoon.hasOwnProperty('specis'))

const arr = [6,7,4,2,2,4]
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)

Array.prototype.unique = function (){
 return[...new Set(this)]
}

console.log(arr.unique())
*/

/*
challenge
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h

 */
/*
const Car = function (make,speed){
 this.make = make
 this.speed = speed
}
const bmw= new Car('BMW',120)
const mercedes = new Car('Mercedes',95)

Car.prototype.accelerate = function (){
 this.speed +=10
 console.log(`${this.make} is going ${this.speed}km/h`)
}

Car.prototype.brake = function (){
 this.speed -=5
 console.log(`${this.make} is going back ${this.speed}km/h`)
}



bmw.accelerate()
mercedes.brake()


class PersonCL{
 constructor(firstName,birthYear) {
  this.myfirstName = firstName
  this.mybirthYear = birthYear
 }
 clacAge(){
  console.log(2037 - this.mybirthYear)
 }

 greet(){
  console.log(`Hi ${this.myfirstName}`)
 }
}
//여기서 clacAge, greet 는 prototype 이랑 같다

const cheyoon = new PersonCL('Cheyoon',1994)
console.log(cheyoon)

cheyoon.clacAge()
cheyoon.greet()

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
 */

// Setters and Getters
const account = {
 owner: 'Jonas',
 movements: [200, 530, 120, 300],

 get latest() {
  return this.movements.slice(-1).pop();
 },

 set latest(mov) {
  this.movements.push(mov);
 },
};

//latest() 들은 property 같음

console.log(account.latest);//300

account.latest = 50;
console.log(account.movements);

//--------
class PersonCl {
 constructor(fullName, birthYear) {
  this.fullName = fullName;
  this.birthYear = birthYear;
 }

 calcAge() {
  console.log(2037 - this.birthYear);
 }

 greet() {
  console.log(`Hey ${this.fullName}`);
 }

 get age() {
  return 2037 - this.birthYear;
 }

 // Set a property that already exists
 set fullName(name) {
  if (name.includes(' ')) this._fullName = name;
 }

 get fullName() {
  return this._fullName;}

 static hey() {
  console.log('Hey there 👋');
  console.log(this);}
}

PersonCl.hey()

const cheyoon = new PersonCl('Cheyoon',1994)
cheyoon.hey()