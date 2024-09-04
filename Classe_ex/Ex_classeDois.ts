class ContaBancaria {
    constructor(public titular: string, public saldo: number){}

    exibirSaldo(): string {
        return `O dono, ${this.titular}, possui ${this.saldo} de saldo na conta.`
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(titular: string, saldo: number, public limiteCredito: number) {
        super(titular,saldo)
    }

    exibirSaldo(): string {
        const total = this.saldo + this.limiteCredito
        return `Olá, Tudo bem? ${super.exibirSaldo()} E o saldo total com credito ${total}`
    }
}
const ContaCorrenteExemplo = new ContaCorrente('Mahmoud', 150, 400);
console.log(ContaCorrenteExemplo.exibirSaldo());