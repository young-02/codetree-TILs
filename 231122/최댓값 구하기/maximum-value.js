const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')

const a = Number(input[0])
const b =Number(input[1])
const c = Number(input[2])

let max ;

if(a > b){
    max = a
}else{
    max = b
}

if(max > c){
    max 
}else{
    max = c
}
console.log(max)