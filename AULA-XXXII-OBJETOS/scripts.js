const pessoa1 = {
    nome: 'Avelã',
    sobrenome: 'Poico',
    idade: 2,

    // criando metodo dentro do objeto
    fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();