import { Cliente } from './Cliente';
import { Pedido } from './Pedido';


const clienteEx = new Cliente('Mahmoud', 'mahmoud.ahmadismail@gmail.com');
const pedidoEx = new Pedido(clienteEx, 'Caneta', 2);

console.log(pedidoEx.exibir());