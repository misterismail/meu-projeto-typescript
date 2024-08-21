interface Produto {
    nome: string;
    preço: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function teste(): string {
    return `${Produto.nome}`
}