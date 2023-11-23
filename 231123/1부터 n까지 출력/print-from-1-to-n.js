const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)


let result = ''
for(let i = 1; i <= n; i++){
    result += `${i} `
}
console.log(result)