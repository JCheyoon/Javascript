'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
          <div class="movements__value">${mov}€</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  //create balance field under account object
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc){
  //display movement
  displayMovement(currentAcc.movements)
  //display balance
  calcDisplayBalance(currentAcc)
  //display summary
  calcDisplaySummary(currentAcc)
}

//Event Handler
let currentAcc

btnLogin.addEventListener('click',function (e){
  //prevent form from submitting ->버튼 클릭이 form으로 만들어졌는데 디폴트값이 값이 입력되면 페이지를 리로드하는거, 그래서 그걸 없에주기위해 preventDefault
  e.preventDefault()

  currentAcc = accounts.find((acc) => acc.username === inputLoginUsername.value)
  console.log(currentAcc)
  if(currentAcc?.pin === Number(inputLoginPin.value)){
    //display UI & welcome message
    labelWelcome.textContent =`Welcome back, ${currentAcc.owner.split(' ')[0]}`
    containerApp.style.opacity = '1'
    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // inputLoginPin.blur();
    updateUI(currentAcc)
  }
})

btnTransfer.addEventListener('click',function (e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(acc => acc.username ===inputTransferTo.value)
  inputTransferAmount.value = inputTransferTo.value = '';

  if(amount > 0 && receiverAcc &&
    currentAcc.balance >= amount && receiverAcc.username !== currentAcc){
    currentAcc.movements.push(-amount);
    receiverAcc.movements.push(amount)

    //update UI
    updateUI(currentAcc)
  }
});
btnLoan.addEventListener('click',function (e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount>0 && currentAcc.movements.some(mov => mov >= amount*0.1)){
   //add movement
   currentAcc.movements.push(amount)
   //update ui
    updateUI(currentAcc)
  }
  inputLoanAmount.value = ''
});

btnClose.addEventListener('click',function (e){
  e.preventDefault()
  if (inputCloseUsername.value === currentAcc.username && Number(inputClosePin.value) === currentAcc.pin){
    const index = accounts.findIndex(acc => acc.username === currentAcc.username)
    //findIndex,find can get access current index, current entire array
    //delete account
    accounts.splice(index, 1);
    //hide Ui
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value='';

})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*

//Slice
let arr =['a','b','c','d','e']
console.log(arr.slice(2)) // ['c','d','e']
console.log(arr.slice(2,4)) // ['c','d']
console.log(arr.slice(-2)) // ['d','e']
console.log(arr.slice(1,-2)) // ['b','c']

//splice ->오리지널 어레이를 바꿔버림
console.log(arr.splice(2)) // ['c','d','e']
console.log(arr)//['a','b']

//reverse ->오리지널 어레이를 바꿔버림
arr = ['a','b','c','d','e']
const arr2 = ['j','i','h','g','f']
console.log(arr2.reverse()) //['f', 'g', 'h', 'i', 'j']

//concat
const letter = arr.concat(arr2)
console.log(letter) //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//join
console.log(letter.join('-')) //a-b-c-d-e-f-g-h-i-j


 const arr = ['23','11','64']

console.log(arr[0])
 console.log(arr.at(0))

//getting last array element
console.log(arr[arr.length-1]) //64
console.log(arr.slice(-1)[0]) //64
 console.log(arr.at(-1)) //64

//--
console.log('cheyun'.at(0)) //c
console.log('cheyun'.at(-1)) //n


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const[i,movement] of movements.entries()){
  if(movement > 0){
    console.log(`Movement ${i+1}:You deposited ${movement}`)
  }else {
    console.log(`Movement ${i+1}:You withdrew ${Math.abs(movement)} `)
  }
}

console.log('-------------------for each-------------')
movements.forEach(function (mov,i,arr){
  if(mov > 0){
    console.log(`Movement ${i+1}: You deposited ${mov}`)
  }else {
    console.log(`Movement ${i+1}: You withdrew ${Math.abs(mov)} `)
  }
})

//map
const currencies = new Map ([
  ['USD','United States dollar'],
  ['EUR','Euro'],
  ['GBP','Pound sterling'],

]);

currencies.forEach((function (value, key, map){
  console.log(`${key} :${value}`)
}))

//set
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR'])
console.log(currenciesUnique)
currenciesUnique.forEach(function (value,_,map){
  console.log(`${value} :${value}`)
})
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//

*/
//
//
// const eurToUsd = 1.1
// //functional programming
// const movementsUSD = movements.map(mov => mov * eurToUsd)
// console.log(movements)
// console.log(movementsUSD)
// //--
// const movementUSDfor = [];
// for(const mov of movements) movementUSDfor.push(mov * eurToUsd)
// console.log(movementUSDfor);
// //--
// const movementDescriptions = movements.map((mov,i)=>
//   `Movement ${i+1}: You ${mov>0 ? 'deposited' : 'withdrew'}${Math.abs(mov)}`
// )
//
// console.log(movementDescriptions);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// const deposits = movements.filter(function (mov){
//   return mov > 0;
// })
// console.log(movements)
// console.log(deposits) //[200, 450, 3000, 70, 1300]
//
// // regular for loop
// const depositFor = [];
// for (const mov of movements) if (mov>0) depositFor.push(mov)
// console.log(depositFor)
//
// //-
// const withdrawals = movements.filter(function (mov2){
//   return mov2 < 0
// })
// console.log(withdrawals)
//
// //--------------------------------reduce----------------
// //accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc,cur,i,arr){
//   console.log(`Iteration ${i}:${acc}`)
//   return acc + cur
// },0)
// console.log(balance)
//
// //regular fr loop
// let balance2 =0;
// for (const mov of movements)balance2 +=mov
// console.log(balance2)
//
// //Maximum value
// const max = movements.reduce((acc,mov)=>{
//   // if(acc > mov) return acc
//   // else return mov
//   return acc > mov ? acc :mov
// },movements[0])
// console.log(max)
//-------------
/*
const eurToUsd = 1.1;
const totalDepositUsd = movements
  .filter(mov => mov > 0)
  // .map(mov=>mov*eurToUsd)

  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUsd);
//만약 filter에서 실수했는지 아닌지 결과를 보고 싶을때 map에서 저렇게 어레이를 확인가능

//find method -> filter 와 다른점은 filter은 해당값이 찾아지면 계속 넘어가 어레이를 만들고,find는 값이 찾아지면 멈춘다
const firstWithdrawal = movements.find(mov => mov <0)
console.log(movements)
console.log(firstWithdrawal)

console.log(accounts)
0: {owner: 'Jonas Schmedtmann', movements: Array(8), interestRate: 1.2, pin: 1111, username: 'js'}
1: {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222, username: 'jd'}
2: {owner: 'Steven Thomas Williams', movements: Array(8), interestRate: 0.7, pin: 3333, username: 'stw'}
3: {owner: 'Sarah Smith', movements: Array(5), interestRate: 1, pin: 4444, username: 'ss'}
length: 4
const account = accounts.find(acc=>acc.owner ==='Jessica Davis')
console.log(account)//{owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222, username: 'jd'}
*/

//some & every
console.log(movements);

//equality
console.log(movements.includes(-130)) // true

//some: condition
// movements.some((mov) => mov === -130)
const anyDeposits = movements.some((mov) => mov > 0)
console.log(anyDeposits) //true

//every ->모든 값이 해당조건과 맞냐?
console.log(movements.every(mov => mov >0)) //false

console.log('separate callback')
//separate callback -여러개테스트할때
const deposit = mov => mov >0
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit))