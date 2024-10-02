let input = '';

function appendNumber(number) {
  input += number;
  document.getElementById('result').value = input;
}

function appendOperator(operator) {
  // Prevent adding operators next to each other or at the beginning
  if (input === '' || ['+', '-', '*', '/'].includes(input.slice(-1))) {
    return;
  }
  input += operator;
  document.getElementById('result').value = input;
}

function clearScreen() {
  input = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    // Calculate the result and display it
    if (input) {
      input = eval(input).toString(); // eval() calculates the math expression
      document.getElementById('result').value = input;
    }
  } catch (error) {
    // If there's an error (e.g., invalid input), show "Error" and reset input
    document.getElementById('result').value = 'Error';
    input = '';
  }
}
