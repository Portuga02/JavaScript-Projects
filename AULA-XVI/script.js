const alunos = ['savio', 'gleyce', 'bio', 'quinho', 'poico', 1, null ]
console.log(alunos.slice(0, -2)); // pegar por indicies
const removendoUltimo = alunos.pop(); // remove o ultimo item do array e sai o indice também
const removendoPrimeiro = alunos.shift();  // adiciona o ultimo item do array sempre melhor para trabalhar caso precise adicionar mais dados
console.log( alunos instanceof Array);  // perguntando se alunos é uma intancia de um arary
alunos.push('Saulo'); // adiciona um novo indice ao array e valor
delete alunos[1] //apaga os indices/
delete alunos[31] //apaga os indices que não existe /
console.log(alunos[2]); // pegar por indicies

console.log(alunos); // pegar por indicies
