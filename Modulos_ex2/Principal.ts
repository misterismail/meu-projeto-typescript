import { Financeiro } from './Financeiro';

//mostrando
const orcamentoEx = new Financeiro.Orcamento(122, ['Cadernos', 'Canetas', 'Borrachas']);
console.log(orcamentoEx.exibir());

const valorImposto = Financeiro.calcularImposto(150, 0.15)
console.log(`Valor com imposto: R$${valorImposto}.`);

const valorDesconto = Financeiro.calcularDesconto(150, 0.10)
console.log(`Valor com o desconto: R$${valorDesconto}.`);