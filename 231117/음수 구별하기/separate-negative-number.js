const fs = require('fs')
const input = fs.readFileSync(0).toString()

const a = Number(input)

if(a < 0){
    console.log(a)
    console.log('minus')
    return
}
console.log(a)