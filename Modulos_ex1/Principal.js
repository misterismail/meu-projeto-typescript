"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const Pedido_1 = require("./Pedido");
const clienteEx = new Cliente_1.Cliente('Mahmoud', 'mahmoud.ahmadismail@gmail.com');
const pedidoEx = new Pedido_1.Pedido(clienteEx, 'Caneta', 2);
console.log(pedidoEx.exibir());
