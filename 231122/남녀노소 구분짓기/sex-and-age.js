const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')

const gender = Number(input[0])
const age = Number(input[1])

if(gender === 1){
    if(age >=19 ){
        console.log('WOMAN')
    }else{
        console.log('GIRL')
    }
}else{
    if(age >=19){
        console.log('MAN')
    }else{
        console.log("BOY")
    }
}