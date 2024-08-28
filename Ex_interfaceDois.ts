type Pessoa = {
    nome: string;
    idade: number;
}
type Empregado = {
    empresa: string;
    salario: number;
}

type Funcionario = Pessoa & Empregado;

function Contrato(pessoa: Pessoa, empregado: Empregado): string {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Empresa: ${empregado.empresa}, Salario: ${empregado.salario}`
}

const ExemploPessoa: Pessoa = { nome: "Mahmoud", idade: 20 };
const ExemploEmpresa: Empregado = { empresa: "VR Benefícios", salario: 20703 };

console.log(Contrato(ExemploPessoa, ExemploEmpresa));