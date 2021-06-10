const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
const expected = sum(4, '5');

// implemente seus testes aqui
// A função sum(a, b) retorna a soma do parâmetro a com o b

// assert.strictEqual(typeof sum, 'function'); // Testei se a função existe kk;

// assert.strictEqual(expected, 9, '4 + 5 = 9'); // Teste se o retorno de sum(4, 5) é 9;

// assert.strictEqual(expected, 0, '0 + 0 = 0'); // Teste se o retorno de sum(0, 0) é 0;

// assert.strictEqual(expected); // Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5);

assert.throws(expected, /^Error: parameters must be numbers$/); // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5");
