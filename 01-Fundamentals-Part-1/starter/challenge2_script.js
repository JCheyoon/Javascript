const markMass = 78
const markHeight = 1.69
const johnMass = 92
const johnHeight = 1.95

const markBmi = markMass / markHeight ** 2
const johnBmi = johnMass / (johnHeight * johnHeight)
const markHigherBMI = markBmi > johnBmi

if (markBmi > johnBmi) { console.log(`Mark's BMI(${markBmi}) is higher than John's(${johnBmi})!`) }
else { console.log(`John's BMI(${johnBmi.toFixed(2)}) is higher than Mark's(${markBmi})!`) }