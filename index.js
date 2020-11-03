var input = require("fs").readFileSync("stdin", "utf8");


let primos = [];

// selecionar os primos
// var valores = input.split(',');

// for(let i=0; i < valores.length; i++) {
//   if(valores[i] !== 1) {
//     let count = 0;
//     for(let j=valores[i]; j > 0; j--) {
//       let total = valores[i] / j;
//       if (typeof total == 'number' && total % 1 == 0){
//         count++;
//       }
//     }
//     if(count == 2) {
//       primos.push(valores[i]);
//     }
//   }
// }

// console.log(primos)


// N-ésimo primo
for(let i = 1; i < 10**10; i++) {
  if(i != 1) {
    let count = 0;
    for(let j=i; j > 0; j--) {
      let total = i / j;
      if (typeof total == 'number' && total % 1 == 0){
        count++;
      }
    }
    if(count == 2) {
      primos.push(i);
    }
    
    if(primos.length > input) {
      i = 10**10;
    }
  }  
}

console.log(primos[input-1]);