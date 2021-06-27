let estados = document.getElementById('name-state');
let options = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

for (let index = 0; index < options.length; index += 1) {
  let createOption = document.createElement('option');
  estados.appendChild(createOption).innerText = options[index];
  estados.appendChild(createOption).value = options[index];
}