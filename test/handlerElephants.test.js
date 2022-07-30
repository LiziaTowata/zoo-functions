const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('requisito 6, retorne a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('requisito 6, retorne um array com a relacao dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('requisito 6, etorne a media de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('requisito 6, retorne a localizacao dos elefantes dentro do Zoologico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('requisito 6, retorne a inteligencia dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  it('requsito 7, retorne um array com relacao de dias em que e possivel visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('requisito 7, nao passado argumentos a funcao deve retornar', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('requisito 15, rassado por argumento um objero vario deve retornar uma string', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('requisito 15, passada uma string que nao contempla uma funcionalidade deve retornar um', () => {
    expect(handlerElephants('celular')).toBe(null);
  });
});
