// Ambiente para testes jscript

// Encontrar numero na posição solicitada. Posições iniciadas em 1

// Percorrendo do ultimo p/ o primeiro

var input = require("fs").readFileSync("stdin", "utf8");

var entradas = input.split('\n');

var numeros = entradas[0].split(',');

var position = entradas[1];


function findPosition(numeros, position) {
  let count = 1;
  for(let i=numeros.length -1; i >= 0; i--) {
    if(count == position) {
      return numeros[i];
    }
    
    if(i == 0) {
      i = numeros.length;
    }
    count++;
  }
}

console.log(`Array => ${numeros}`)
console.log(`Posição => ${position}`)

console.log(`Encontrado => ${findPosition(numeros, position)}`);

