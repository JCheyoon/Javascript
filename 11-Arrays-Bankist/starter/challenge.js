'use strict'

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