"use strict";
function Contrato(pessoa, empregado) {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Empresa: ${empregado.empresa}, Salario: ${empregado.salario}`;
}
const ExemploPessoa = { nome: "Mahmoud", idade: 20 };
const ExemploEmpresa = { empresa: "VR Benefícios", salario: 20703 };
console.log(Contrato(ExemploPessoa, ExemploEmpresa));
