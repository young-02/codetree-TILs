const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')
const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])
const min1 = b < c ? b : c
const min2 = b < a ? b : a
const min = min1 < min2 ? min1:min2

let result1 ;
let result2



if(a === min){
  result1 = 1
}else{
    result1 = 0
}


if(a === b=== c){
    result2 =1
}else{
   result2 = 0
}

console.log(result1, result2)