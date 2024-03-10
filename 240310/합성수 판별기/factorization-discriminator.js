const fs = require('fs')
let n = Number(fs.readFileSync(0).toString())


  for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return console.log('C');
        }
    }
return console.log('N')


합성수란? 1과 나자신의의 수 이외의 다른 약수가 존재 하는것 (1과 자기 자신 이외의 다른 약수를 가지는 수)
