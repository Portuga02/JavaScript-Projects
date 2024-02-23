
function soma(x, y) {
    const resultado = x + y;
    return resultado;

}

function divisaoSimples(x, y) {
    // divisao por numero fixo e formatado
    let resultado = x / y;
    return resultado

}
function divisaoComplexa(x, y) {
    // divisao por numero Simples
    let resultado = x / y;


    return resultado.toFixed(7);
    // return resultado.toFixed(2);

}

function multiplicacao(A, B) {
    const multiplicar = A * B;
    return multiplicar;
}

function subtrair(C, D) {
    const multiplicar = C - D;
    return multiplicar;
}

const raiz = function (Z) {  // função anonima
    return Z ** 0.5;

}
const raizComAeroFunction = (n) => {
    return n ** 0.5 // função anonima com aerofunction

}

console.log(soma(2, 3));
console.log(divisaoSimples(5, 4));
console.log('Divisão com formatação e o fixed: ', divisaoComplexa(533, 444));
console.log(subtrair(10, 3))
console.log('Com raiz quadrada:', raiz(10, 3))
console.log('Com aero Function:', raizComAeroFunction(1111, 444))