const process = require('child_process');

const buffer = process.execSync ("randoms-generator");
console.log (buffer.toString ());

