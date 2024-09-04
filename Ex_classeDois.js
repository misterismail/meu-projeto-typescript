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
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.exibirSaldo = function () {
        return "O dono, ".concat(this.titular, ", possui ").concat(this.saldo, " de saldo na conta.");
    };
    return ContaBancaria;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(titular, saldo, limiteCredito) {
        var _this = _super.call(this, titular, saldo) || this;
        _this.limiteCredito = limiteCredito;
        return _this;
    }
    ContaCorrente.prototype.exibirSaldo = function () {
        var total = this.saldo + this.limiteCredito;
        return "Ol\u00E1, Tudo bem? ".concat(_super.prototype.exibirSaldo.call(this), " E o saldo total com credito ").concat(total);
    };
    return ContaCorrente;
}(ContaBancaria));
var ContaCorrenteExemplo = new ContaCorrente('Mahmoud', 150, 400);
console.log(ContaCorrenteExemplo.exibirSaldo());
