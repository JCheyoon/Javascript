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


const PesronProto = {
 clacAge(){
  console.log(2037 - this.birthYear)
 },

 init(firstName,birthYear){
  this.firstName = firstName
  this.birthYear = birthYear
 }
}

const cheyoon = Object.create(PesronProto)
console.log(cheyoon)

cheyoon.name = 'cheyoon'
cheyoon.birthYear = 1994
cheyoon.clacAge()

const peti = Object.create(PesronProto)
peti.init('peti',1985)
peti.clacAge()
*/

/*
Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h

class CarCl {
 constructor(make,speed) {
  this.make = make
  this.speed = speed
 }

 accelerate() {
  this.speed +=10
  console.log(`${this.make} is going ${this.speed}km/h`)
 }

 brake(){
  this.speed -=5
  console.log(`${this.make} is going back ${this.speed}km/h`)
 }

 get speedUs() {
  return this.speed/1.6

 }

 set speedUs(speed){
  this.speed = speed*1.6
 }
}

const ford= new CarCl('Ford',120)


ford.accelerate()



// Inheritance Between Classes
//person : parent class
const Person = function (firstName, birthYear) {
 this.firstName = firstName;
 this.birthYear = birthYear;
};


Person.prototype.calcAge = function () {
 console.log(2037 - this.birthYear);
};

//Student : child class
// const Student = function (firstName,birthYear,course){
//  this.firstName = firstName
//  this.birthYear = birthYear
//  this.course = course
// }
//위와같이 똑같은걸 반복하고 싶지않아서 부모요소껄 불러오는 방식
const Student = function (firstName,birthYear,course){
 Person.call(this, firstName,birthYear)
 this.course = course
}
//Linking prototype
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function (){
 console.log(`My Name is ${this.firstName} and I am majored ${this.course}`)
}
const cheyoon = new Student('Cheyoon',1994,'Movie design')
console.log(cheyoon)
cheyoon.introduce()
cheyoon.calcAge()

Student.prototype.constructor =Student
console.dir(Student.prototype.constructor)
 */

/*
Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism �
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%



const Car = function (make,speed){
  this.make = make
  this.speed = speed
}
Car.prototype.accelerate = function (){
  this.speed +=10
  console.log(`${this.make} is going ${this.speed}km/h`)
}

Car.prototype.brake = function (){
  this.speed -=5
  console.log(`${this.make} is going back ${this.speed}km/h`)
}
const Ev = function (make,speed,charge){
 Car.call(this, make, speed)
  this.charge = charge
 }
Ev.prototype = Object.create(Car.prototype)

Ev.prototype.chargeBattery = function (chargeTo){
  this.charge = chargeTo
}

 const Tesla = new Ev('Tesla',120,23)

Tesla.chargeBattery(100)
console.log(Tesla) */
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}


class StudentCl extends PersonCl{
  constructor(fullName,birthYear,course) {
    //Always needs to happen first
    super(fullName,birthYear);
    this.course = course
  }
  introduce(){
    console.log(`My Name is ${this.fullName} and I am majored ${this.course}`)
  }
}
const peti = new StudentCl('Peter Kin',1985,'Programming')

peti.introduce()
peti.calcAge()

// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

};

const steven = Object.create(PersonProto);
const SudentProto = Object.create(PersonProto)

SudentProto.init = function (firstName,birthYear,course){
  PersonProto.init.call(this,firstName,birthYear)
  this.course = course

}
SudentProto.introduce = function (){
  console.log(`My Name is ${this.firstName} and I am majored ${this.course}`)
}
const jay = Object.create(SudentProto)

jay.init('jay',1993,'Computer science')
jay.introduce()
jay.calcAge()
//-------------------------------------------------------------------------------------
// 1) Public (fields = property)
// 2) Private fields
// 3) Public methods
// 4) Private methods
//또한 static으로 private하게 할수 있는데 안쓰임

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());*/

// Coding Challenge #4

/*
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);

