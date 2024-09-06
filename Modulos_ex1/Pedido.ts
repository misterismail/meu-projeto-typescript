import { Cliente } from './Cliente';


export class Pedido {
    constructor(public cliente: Cliente, public produto: string, public valor: number) { }

    exibir(): string {
        return `Cliente: ${this.cliente.nome} comprou o produto ${this.produto} que custa R$${this.valor}.`;
    }
}