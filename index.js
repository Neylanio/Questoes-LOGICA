// Ambiente para testes jscript em questoes URI

var input = require("fs").readFileSync("stdin", "utf8");

var values = input.split(' ');

const A = Number(values[0]);
const B = Number(values[1]);
const C = Number(values[2]);

let maior = (A + B + Math.abs(A - B)) /2;
let total = (maior + C + Math.abs(maior - C))/2;

console.log(`${total} eh o maior`)