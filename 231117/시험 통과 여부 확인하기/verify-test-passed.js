const fs = require('fs')
const input = fs.readFileSync(0).toString()
const score = Number(input)

if(score > 80){
    console.log('pass')
}else{
    console.log(`${80-score} more score`)
}