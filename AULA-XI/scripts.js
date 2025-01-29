let primeiro_numero = prompt('Digite o primeiro numero para ser somado')
let segundo_numero = prompt('Digite o segundo numero para ser somado')

// os numeros serão inseridos no navegador como string e é necessário colcoar essa função para conversão
primeiro_numero = Number(primeiro_numero);
segundo_numero = Number(segundo_numero);

const resultadoSoma = primeiro_numero + segundo_numero;

window.alert('O resultado da soma em questão foi ' + resultadoSoma)

console.log(resultadoSoma);