const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')
const a = Number(input[0])
const b = Number(input[1])

let result = ''
if(a > 0){
    for(let i =1; i <= b; i++){
        result += a
    }
}else if( a === 0){
    result = 0
}

console.log(result)