// Ambiente para testes jscript em questoes URI

var input = require("fs").readFileSync("stdin", "utf8");

var values = input.split('\n');

const salary = values[1]
const salesAmount = values[2]

let total = (salesAmount * 0.15) + Number(salary)

console.log(`TOTAL = R$ ${total.toFixed(2)}`)
