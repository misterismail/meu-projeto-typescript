function teste(produto, pagamento) {
    return "Produto: ".concat(produto.nome, ", Categoria: ").concat(produto.categoria, ", Pre\u00E7o: ").concat(produto.preço, ", Metodo de Pagamento: ").concat(pagamento);
}
var Exemplo1 = { nome: "Civicria", categoria: "Carro de manobras", preço: 12903 };
var Pagamento1 = "pix";
console.log(teste(Exemplo1, Pagamento1));
