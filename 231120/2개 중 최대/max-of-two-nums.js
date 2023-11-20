const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')

const a = Number(input[0])
const b = Number(input[1])

a  > b ? console.log(a) : console.log(b)