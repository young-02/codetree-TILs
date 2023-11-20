const fs = require('fs')
const input = fs.readFileSync(0).toString()
const n = Number(input)

if(input >= 3000){
    console.log('book')
}else if(input >= 1000){
    console.log('mask')
}else{
    console.log('no')
}