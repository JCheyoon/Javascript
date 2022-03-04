'use strict'
// Import module
// import {addToCart,totalPrice as price,totalQuantity} from './shoppingCart.js'

console.log('Importing module')

import add from "./shoppingCart.js"
add('pizza',3)

// import add ,{cart} from "./shoppingCart.js"
// add('pizza',3)
// add('apple',1)
// add('cheese',6)
// console.log(cart)

//Top level await -> top level에 있는 await은 async없이 사용가능

// async function x(){
//   await  blabla
// }

// console.log('Start fetching')
//
// const res = await fetch("https://jsonplaceholder.typicode.com/posts")
// const data = await  res.json()
// console.log(data)
//
// console.log('something')

//Top level await : REAL WORLD EXAMPLE

/*
const getLastPost = async function(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await  res.json()

  return {title: data.at(-1).title , text: data.at(-1).body}
}
const lastpost = getLastPost()
lastpost.then(last => console.log(last))

const lastpost2 = await getLastPost()
console.log(lastpost2)

 */
// The Module Pattern
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);

*/
/*
// CommonJS Modules
// Export
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};

// Import
const { addTocart } = require('./shoppingCart.js');
*/

//clonedeep 가져오기

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js'

const state ={
  cart:[
    {product: 'apple' , quantity: 5},
    {product: 'banana', quantity: 3},
  ],
  user: {loggedIn: true},
}
//엤날엔 이렇게
const stateClone =Object.assign({},state)

state.user.loggedIn= false
//cloneDeep 으로, array를 바꾸고나서 만들어서 그럼.
const stateDeepClone = cloneDeep(state)
console.log(stateDeepClone)