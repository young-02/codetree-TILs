const fs = require('fs')
const input = fs.readFileSync(0).toString()

const n =Number(input)

let result =''
for(let i = n; i <= 100; i++){
    result += `${i} `
}
console.log(result)