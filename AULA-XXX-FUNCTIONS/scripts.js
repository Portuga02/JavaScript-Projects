function soma(x, y) {
    const resultado = x + y;
    return resultado;// tudo que ta aqui dentro da função está protegido

}

console.log(soma(1, 2)); // pode ser assim ou

const resultado = soma(2,2);
console.log(resultado);

//segunda forma, setando valores nos parametros
function soma2(x = 40, y= 32) {
    const resultado2 = x + y;
    return resultado2;// tudo que ta aqui dentro da função está protegido

}
const resultado2 = soma2();
console.log(resultado2);