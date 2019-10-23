/*jshint esversion: 6 */

const fs = require('fs');
const data  = fs.readFileSync('data.json');
const word = JSON.parse(data);
console.log(word);
