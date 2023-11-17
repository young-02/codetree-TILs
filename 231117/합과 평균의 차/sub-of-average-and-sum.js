const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')

const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])

const sum = a+b+c
const avarage = parseInt(sum/3)
const total = sum-avarage
console.log(sum)
console.log(avarage)
console.log(total)