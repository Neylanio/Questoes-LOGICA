// Ambiente para testes jscript em questoes URI

var input = require("fs").readFileSync("stdin", "utf8");

var values = input.split('\n');

const A = values[0]
const B = values[1]
const C = values[2]

let total = ((A * 2) + (B * 3) + (C * 5)) / 10;

console.log(`MEDIA = ${total.toFixed(1)}`)
