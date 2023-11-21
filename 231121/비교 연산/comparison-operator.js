const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')

const a = Number(input[0])
const b = Number(input[1])


if(a >= b){
    console.log(1)
}else{
    console.log(0)
}

if(a > b){
    console.log(1)
}else{
    console.log(0)
}

if(b >= a){
    console.log(1)
}else{
    console.log(0)
}

if(b>a){
    console.log(1)
}else{
    console.log(0)
}

if(a === b){
    console.log(1)
}else{
    console.log(0)
}

if(a !== b){
    console.log(1)
}else{
    console.log(0)
}