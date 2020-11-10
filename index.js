// Lista ordenada

var input = require("fs").readFileSync("stdin", "utf8");

var values = input.split(',');


// Orderm crescente

// for (let i = 0; i < values.length-1; i++) {
  
//   let min = i;
//   for (let j = i + 1; j < values.length; j++) {
    

//     if(values[j] < values[min]) {
//       min = j;
//     }

//   }  

//   if(i != min) {
//     let aux = values[i];
//     values[i] = values[min];
//     values[min] = aux;
//   }

// }


// ------------------------------------------------------

// Ordem decrescente

for (let i = 0; i < values.length-1; i++) {
  
  let max = i;
  for (let j = i + 1; j < values.length; j++) {
    

    if(values[j] > values[max]) {
      max = j;
    }

  }  

  if(i != max) {
    let aux = values[i];
    values[i] = values[max];
    values[max] = aux;
  }

}


console.log(values)
