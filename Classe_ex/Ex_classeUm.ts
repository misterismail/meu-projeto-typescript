class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) { }
    descricao(): string {
        return `Bom dia, meu nome é ${this.nome}, meu cargo é ${this.cargo} e ganho ${this.salario} de salário.`
    }
}

class gerente extends Funcionario {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
        super(nome, cargo, salario);
    }
    apresentacao(): string {
        return `${super.descricao()} Atualmente sou do departamento de ${this.departamento}.`;
    }
}

const funcionarios1 = new gerente('Mahmoud', 'Estagiário', 150, 'Customer Experience');
console.log(funcionarios1.apresentacao());