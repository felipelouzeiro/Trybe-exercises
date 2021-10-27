let btn = document.getElementsByTagName('button');
let span = document.getElementsByTagName('span');
let clicksN = 0;

btn.addEventListener('click', () => {
  span.innerText = clicksN += 1;
});