const fs = require('fs')
const input = fs.readFileSync(0).toString()

const month = Number(input)


//1 3 5 7 9  11
if(month === 2){
    console.log(28)
}else if(month === 1 || month === 3 || month === 5 || month === 7|| month ===9 || month ===11){
    console.log(31)
}else{
    console.log(30)
}