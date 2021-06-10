let btn = document.querySelector('button');
let span = document.querySelector('span');
let clicksN = 0;

btn.addEventListener('click', () => {
  span.innerText = clicksN += 1;
});