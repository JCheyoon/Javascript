'use strict'
//Exporting module
console.log('Exporting module')

const shippingCost = 10
export const cart =[]


const totalPrice = 237
const totalQuantity = 23

export{totalPrice,totalQuantity}

export default function (product,quantity) {
  cart.push({product,quantity})
  console.log(`${quantity} and ${product} has added to cart`)
}