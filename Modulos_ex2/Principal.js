"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Financeiro_1 = require("./Financeiro");
//mostrando
const orcamentoEx = new Financeiro_1.Financeiro.Orcamento(122, ['Cadernos', 'Canetas', 'Borrachas']);
console.log(orcamentoEx.exibir());
const valorImposto = Financeiro_1.Financeiro.calcularImposto(150, 0.15);
console.log(`Valor com imposto: R$${valorImposto}.`);
const valorDesconto = Financeiro_1.Financeiro.calcularDesconto(150, 0.10);
console.log(`Valor com o desconto: R$${valorDesconto}.`);
