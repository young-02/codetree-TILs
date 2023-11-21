const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')
const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])

let min ;
let result1 ;
let result2


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

if(a === min){
  result1 = 1
}else{
    result1 = 0
}


if(a === b && b === c && a === c){
    result2 =1
}else{
   result2 = 0
}

console.log(result1, result2)