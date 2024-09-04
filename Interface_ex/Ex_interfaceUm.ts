interface Produto {
    nome: string;
    preço: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function teste(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: ${produto.preço}, Metodo de Pagamento: ${pagamento}`
}

const Exemplo1: Produto = { nome: "Civicria", categoria: "Carro de manobras", preço: 12903 };
const Pagamento1: FormaPagamento = "pix";

console.log(teste(Exemplo1, Pagamento1));