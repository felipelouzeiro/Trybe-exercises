const func = require('./ms');

describe('testando funções da ms', () => {

  it('testando função subtrair', () => {
    func.subtrair = jest.fn();

    func.subtrair();

    expect(func.subtrair).toHaveBeenCalled();
  })

  it('testando função multiplicar',() => {
    func.multiplicar = jest.fn().mockReturnValue(10);

    func.multiplicar();
    expect(func.multiplicar).toHaveBeenCalled();
    expect(func.multiplicar()).toEqual(10);
  })

  it('testando a função somar', async () => {
    func.somar = jest.fn().mockImplementation((a, b) => a + b);

    func.somar(1, 2);
    expect(func.somar).toBeCalled();
    expect(func.somar).toBeCalledWith(1, 2);
    expect(func.somar(1, 2)).toBe(3);
  })

  it('testando função dividir', () => {
    func.dividir = jest.fn()

    func.dividir.mockReturnValue(15);
    func.dividir.mockReturnValueOnce(2);
    func.dividir.mockReturnValueOnce(5);
    
    expect(func.dividir(4, 2)).toBe(2);
    expect(func.dividir).toBeCalled();
    expect(func.dividir).toHaveBeenCalledTimes(1);
    expect(func.dividir).toBeCalledWith(4, 2);

    expect(func.dividir(25, 5)).toBe(5);
    expect(func.dividir).toBeCalled();
    expect(func.dividir).toBeCalledWith(25, 5);
    expect(func.dividir).toHaveBeenCalledTimes(2);

    expect(func.dividir(45, 3)).toBe(15);
    expect(func.dividir).toBeCalled();
    expect(func.dividir).toBeCalledWith(45, 3);
    expect(func.dividir).toHaveBeenCalledTimes(3);
  })

  it('testando função subtrair com restauração', () => {
    const funcsubtrair = jest.spyOn(func, 'subtrair');
    funcsubtrair.mockImplementation((a, b) => a + b);
    
    funcsubtrair.mockReturnValueOnce(26);
    expect(funcsubtrair(23, 3)).toBe(26);
    expect(funcsubtrair).toBeCalled();    
    expect(funcsubtrair).toBeCalledTimes(2);

    funcsubtrair.mockRestore();

    funcsubtrair.mockReturnValue(20);
    expect(funcsubtrair(23, 3)).toBe(20)
    expect(funcsubtrair).toBeCalled();
    expect(funcsubtrair).toBeCalledTimes(1);
  })
});

// Faça o mock da funcão subtrair e teste sua chamada.
// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
// Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
// Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.
