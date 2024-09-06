"use strict";
class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    descricao() {
        return `Bom dia, meu nome é ${this.nome}, meu cargo é ${this.cargo} e ganho ${this.salario} de salário.`;
    }
}
class gerente extends Funcionario {
    constructor(nome, cargo, salario, departamento) {
        super(nome, cargo, salario);
        this.departamento = departamento;
    }
    apresentacao() {
        return `${super.descricao()} Atualmente sou do departamento de ${this.departamento}.`;
    }
}
const funcionarios1 = new gerente('Mahmoud', 'Estagiário', 150, 'Customer Experience');
console.log(funcionarios1.apresentacao());
