const fs = require('fs')
const input = fs.readFileSync(0).toString()

const a = Number(input)

a === 1 ? console.log('t'): console.log('f')