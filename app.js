const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.button');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equal');

let currentInput = '';
let answer = null;
let resultDisplayed = false;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonValue = e.target.textContent;

    if (buttonValue === 'AC') {
      currentInput = '';
      display.textContent = '0';
      resultDisplayed = false;
    } else if (buttonValue === '=') {
      try {
        answer = eval(currentInput);
        display.textContent = answer;
        currentInput = answer.toString();
        resultDisplayed = true;
      } catch (error) {
        display.textContent = 'Error';
      }
    } else if (isOperator(buttonValue)) {
      if (resultDisplayed) {
        currentInput += buttonValue;
        display.textContent = currentInput;
        resultDisplayed = false;
      } else if (currentInput !== '') {
        currentInput += buttonValue;
        display.textContent = currentInput;
      }
    } else {
      if (resultDisplayed) {
        currentInput = buttonValue;
        display.textContent = currentInput;
        resultDisplayed = false;
      } else {
        currentInput += buttonValue;
        display.textContent = currentInput;
      }
    }
  });
});

clear.addEventListener('click', () => {
  currentInput = '';
  display.textContent = '0';
  resultDisplayed = false;
});

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}
