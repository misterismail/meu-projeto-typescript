"use strict";
function teste(produto, pagamento) {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: ${produto.preço}, Metodo de Pagamento: ${pagamento}`;
}
const Exemplo1 = { nome: "Civicria", categoria: "Carro de manobras", preço: 12903 };
const Pagamento1 = "pix";
console.log(teste(Exemplo1, Pagamento1));
