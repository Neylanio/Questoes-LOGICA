// Verificar se substring está contida em string maior

var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split('\n');
let a = valores[0].split('');
let b = valores[1];

let count = 0;

for(let i=0; i < a.length; i++) {
  var sub = '';
  for(let j=i; j <= i + (b.length - 1); j++) {
    if(a[i + (b.length - 1)] != undefined) {
      sub+= a[j];
    }
  }

  if(sub === b) {
    count++;
  }
}

console.log(count == 1 ? 'SIM' : 'NÃO')
