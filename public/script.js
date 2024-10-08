let input = '';

function appendNumber(number) {
  input += number;
  document.getElementById('result').value = input;
}

function appendOperator(operator) {
  if (input === '' || ['+', '-', '*', '/'].includes(input.slice(-1))) {
    input = input.slice(0, -1) + operator;
  } else {
    input += operator;
  }
  document.getElementById('result').value = input;
}

function clearScreen() {
  input = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    if (input) {
      input = eval(input).toString();
      document.getElementById('result').value = input;
    }
  } catch (error) {
    document.getElementById('result').value = 'Error';
    input = '';
  }
}
