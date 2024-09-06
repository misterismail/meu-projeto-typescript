"use strict";
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    exibirSaldo() {
        return `O dono, ${this.titular}, possui ${this.saldo} de saldo na conta.`;
    }
}
class ContaCorrente extends ContaBancaria {
    constructor(titular, saldo, limiteCredito) {
        super(titular, saldo);
        this.limiteCredito = limiteCredito;
    }
    exibirSaldo() {
        const total = this.saldo + this.limiteCredito;
        return `Olá, Tudo bem? ${super.exibirSaldo()} E o saldo total com credito ${total}`;
    }
}
const ContaCorrenteExemplo = new ContaCorrente('Mahmoud', 150, 400);
console.log(ContaCorrenteExemplo.exibirSaldo());
