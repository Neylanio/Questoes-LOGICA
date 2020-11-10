// Ambiente para testes jscript em questoes URI

var input = require("fs").readFileSync("stdin", "utf8");

var values = input.split('\n');

const A = values[0]
const B = values[1]
const C = values[2]
const D = values[3]

let total = A * B - C * D

console.log(`DIFERENCA = ${total}`)