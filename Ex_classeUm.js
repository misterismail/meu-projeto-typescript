var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var funcionarios = /** @class */ (function () {
    function funcionarios(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    funcionarios.prototype.descricao = function () {
        return "Bom dia, meu nome \u00E9 ".concat(this.nome, ", meu cargo \u00E9 ").concat(this.cargo, " e ganho ").concat(this.salario, " de sal\u00E1rio.");
    };
    return funcionarios;
}());
var gerente = /** @class */ (function (_super) {
    __extends(gerente, _super);
    function gerente(nome, cargo, salario, departamento) {
        var _this = _super.call(this, nome, cargo, salario) || this;
        _this.departamento = departamento;
        return _this;
    }
    gerente.prototype.apresentacao = function () {
        return "".concat(_super.prototype.descricao.call(this), " Atualmente sou do departamento de ").concat(this.departamento, ".");
    };
    return gerente;
}(funcionarios));
var funcionarios1 = new gerente('Mahmoud', 'Estagiário', 150, 'Customer Experience');
console.log(funcionarios1.apresentacao());
