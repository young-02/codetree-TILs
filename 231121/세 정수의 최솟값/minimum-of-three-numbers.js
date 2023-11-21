const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')
const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])

let min ;

if(a < b){
    min = a
}else{
    min = b
}

if(min < c){
    min
}else{
    min = c
}

console.log(min)