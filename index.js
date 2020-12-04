// Ambiente para testes jscript

// Lógica da FILA - FIFO

var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split(',');

console.log(`${valores}\n`)

while(valores.length > 0) {
  valores.shift();
  console.log(`${valores}\n`)
}