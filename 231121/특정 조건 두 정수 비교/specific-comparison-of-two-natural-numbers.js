const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')

const a = Number(input[0])
const b = Number(input[1])

let answer1 ;
let answer2

if( a < b || a ===b){
    answer1 = 1
}else{
    answer1 = 0
}

if( a === b){
    answer2  = 1
}else{
      answer2 =0
}
console.log(answer1, answer2)