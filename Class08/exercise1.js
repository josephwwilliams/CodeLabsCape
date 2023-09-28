const input = document.querySelector('#name');

const output = document.querySelector('.output');

const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', () => {
  output.innerText = input.value;
});
