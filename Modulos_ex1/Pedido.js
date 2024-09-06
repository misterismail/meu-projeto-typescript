"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(cliente, produto, valor) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }
    exibir() {
        return `Cliente: ${this.cliente.nome} comprou o produto ${this.produto} que custa R$${this.valor}.`;
    }
}
exports.Pedido = Pedido;
