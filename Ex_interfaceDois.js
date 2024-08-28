function Contrato(pessoa, empregado) {
    return "Nome: ".concat(pessoa.nome, ", Idade: ").concat(pessoa.idade, ", Empresa: ").concat(empregado.empresa, ", Salario: ").concat(empregado.salario);
}
var ExemploPessoa = { nome: "Mahmoud", idade: 20 };
var ExemploEmpresa = { empresa: "VR Benefícios", salario: 20703 };
console.log(Contrato(ExemploPessoa, ExemploEmpresa));
