let input = '';

function appendNumber(number) {
  input += number;
  document.getElementById('result').value = input;
}

function appendOperator(operator) {
  // Check if the last character is an operator
  if (input === '' || ['+', '-', '*', '/'].includes(input.slice(-1))) {
    // If it's an operator, replace the last operator with the new one
    input = input.slice(0, -1) + operator;
  } else {
    // Otherwise, append the operator as normal
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
      input = eval(input).toString(); // Evaluate the expression and convert to string
      document.getElementById('result').value = input;
    }
  } catch (error) {
    // If there's an error (like invalid input), show "Error"
    document.getElementById('result').value = 'Error';
    input = '';
  }
}
