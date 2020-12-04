// Ambiente para testes jscript

// Encontrar numero na posição solicitada. Posições iniciadas em 1

var input = require("fs").readFileSync("stdin", "utf8");

var entradas = input.split('\n');

var numeros = entradas[0].split(',');

var position = entradas[1];


function findPosition(numeros, position) {
  let count = 1;
  for(let i=0; i < numeros.length; i++) {
    if(count == position) {
      return numeros[i-1];
    }

    if(i == numeros.length-1) {
      i = 0;
    }

    count++;
  }
}

console.log(`${numeros}\n`)

console.log(findPosition(numeros, position));

