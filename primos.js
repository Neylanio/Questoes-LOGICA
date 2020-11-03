var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split(',');

let primos = [];

for(let i=0; i < valores.length; i++) {
  if(valores[i] !== 1) {
    let count = 0;
    for(let j=valores[i]; j > 0; j--) {
      let total = valores[i] / j;
      if (typeof total == 'number' && total % 1 == 0){
        count++;
      }
    }
    if(count == 2) {
      primos.push(valores[i]);
    }
  }
}

console.log(primos);