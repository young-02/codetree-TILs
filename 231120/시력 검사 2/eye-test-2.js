const fs = require('fs')
const input = fs.readFileSync(0).toString()
const sight = Number(input)

if(sight >= 1.0){
    console.log('High')
}else if( sight >= 0.5){
    console.log('Middle')
}else{
    console.log('Low')
}