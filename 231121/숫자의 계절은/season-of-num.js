const fs = require('fs')
const input = fs.readFileSync(0).toString()
const month = Number(input)


if(month >=3 && month <= 5 ){
    console.log('Spring')
}else if(month >=6 && month <= 8){
    console.log('Summer')
}else if(month >=9 && month >= 11){
     console.log('Fall')
}else if(month <= 2 || month == 12 ){
    console.log('Winter')
}