const fs = require('fs')
let n = Number(fs.readFileSync(0).toString())


  for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return console.log('C');
        }
    }
return console.log('N')