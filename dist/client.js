"use strict";
const execSync = require('child_process').execSync;
const output = execSync('dir', { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', output);
