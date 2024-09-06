"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Financeiro = void 0;
var Financeiro;
(function (Financeiro) {
    function calcularImposto(valor, taxa) {
        //calculo do imposto
        return valor * taxa;
    }
    Financeiro.calcularImposto = calcularImposto;
    function calcularDesconto(valor, taxa) {
        return valor - (valor * taxa);
    }
    Financeiro.calcularDesconto = calcularDesconto;
    class Orcamento {
        constructor(valorTotal, itens) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
        exibir() {
            return `Itens selecionados: ${this.itens.join(', ')} e o valor total de R$${this.valorTotal}.`;
        }
    }
    Financeiro.Orcamento = Orcamento;
})(Financeiro || (exports.Financeiro = Financeiro = {}));
