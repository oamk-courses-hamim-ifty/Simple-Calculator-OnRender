let input = '';

function updateDisplay() {
  document.getElementById('result').value = input;
}

function appendNumber(number) {
  input += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (input === '') return;

  const lastChar = input.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    input = input.slice(0, -1) + operator;
  } else {
    input += operator;
  }
  updateDisplay();
}

function clearScreen() {
  input = '';
  updateDisplay();
}

function appendFunction(func) {
  try {
    const value = eval(input || '0');
    let result;

    switch (func) {
      case 'sin':
        result = Math.sin(toRadians(value));
        break;
      case 'cos':
        result = Math.cos(toRadians(value));
        break;
      case 'tan':
        result = Math.tan(toRadians(value));
        break;
      case 'log':
        result = Math.log10(value);
        break;
      case 'sqrt':
        result = Math.sqrt(value);
        break;
      case 'pow2':
        result = Math.pow(value, 2);
        break;
      case 'exp':
        result = Math.exp(value);
        break;
      default:
        result = value;
    }

    input = result.toString();
    updateDisplay();
  } catch (error) {
    input = '';
    document.getElementById('result').value = 'Error';
  }
}

function calculate() {
  try {
    if (input) {
      const result = eval(input);
      input = result.toString();
      updateDisplay();
    }
  } catch (e) {
    document.getElementById('result').value = 'Error';
    input = '';
  }
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
