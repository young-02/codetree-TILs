const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')
const A = input[0].split(' ')
const B = input[1].split(' ')

const A_math = Number(A[0])
const A_english = Number(A[1])

const B_math = Number(B[0])
const B_english = Number(B[1])

console.log(A_math > B_math && A_english > B_english ? 1 :0)