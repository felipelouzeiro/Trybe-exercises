prices = {
  Adult: 49.99,
  Senior: 24.99,
  Child: 20.99,
};

function increasePrices(percentage) {
  // seu código aqui

Object.keys(prices)
.forEach((value) => {
  const increase = Math.round((percentage * value) / 100);
  prices[value] = Number(increase.toFixed(2));
  }); 
};
console.log(increasePrices(50));