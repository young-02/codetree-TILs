const fs = require('fs')
const input = fs.readFileSync(0).toString()
const y = Number(input)

if(y % 4 === 0 ){
    if(y % 100 === 0 ){
   
        if(y % 400 === 0){
            console.log('true')
        }else{
            console.log('false')
        }
    }else{
        console.log('true')
    }
}else{
    console.log('false')
}