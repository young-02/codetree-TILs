const fs =require('fs')
const input = fs.readFileSync(0).toString().split(' ')

const b = Number(input[0])
const a = Number(input[1])

let i = b
let result = ''
while(i >= a){
    if(i %2 ===0){
        result += i + ' '
    }
    i--
}

console.log(result)