//Saber qual o número de ocorrencias de cada palavra em uma frase

var input = "Atirei o pau no gato, mas o gato não morreu.";

var words = input.trim();

words = input.replace(/[^a-zA-Zs-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, '');

words = words.split(' ');

var array = [];

words.forEach(element => {
  const qtd = words.filter(word => word === element);
  
  const filteredWord = array.find(item => item.word === element);

  if(!filteredWord && element != '') {
    array.push({
      word: element,
      count: qtd.length
    })
  }
});

console.log(array)