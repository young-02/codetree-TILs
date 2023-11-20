const fs = require('fs')
const input = fs.readFileSync(0).toString()

const temperature = Number(input)


if(temperature < 0){
     console.log('ice')
}
else if(temperature >= 100){
console.log('vapor')
}
else{   
    console.log('water')
}