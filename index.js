// Ambiente para testes jscript em questoes URI

var input = require("fs").readFileSync("stdin", "utf8");

var values = input.split('\n');

const x = Number(values[0]);
const y = Number(values[1]).toFixed(1);

const total = x / y;

console.log(`${total.toFixed(3)} km/l`)