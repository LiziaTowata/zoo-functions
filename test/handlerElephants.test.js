const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorne a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('retorne um array com a relacao dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('retorne a media de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('retorne a localizacao dos elefantes dentro do Zoologico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('retorne a inteligencia dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  it('retorne um array com relacao de dias em que e possivel visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
