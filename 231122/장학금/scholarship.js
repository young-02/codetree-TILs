const fs = require('fs')
const input = fs.readFileSync(0).toString().split(' ')

const a = Number(input[0])
const b = Number(input[1])


if(a >= 90){
    if(b >=95){
        console.log(100000)
    }else if(b>= 90){
        console.log(50000)
    }
}else{
    console.log(0)
}