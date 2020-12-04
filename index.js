// Ambiente para testes jscript


// Lógica da PILHA - LIFO

var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split(',');

console.log(`${valores}\n`)

while(valores.length > 0) {
  valores.pop();
  console.log(`${valores}\n`)
}
