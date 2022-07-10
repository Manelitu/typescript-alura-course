import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date(), 5, 20);
console.log(negociacao.quantidade);
