// script.js
const display = document.getElementById('display');
let currentInput = '0';
let previousInput = null;
let activeOperator = null;
let shouldResetDisplay = false;

// Helper: update display text
function updateDisplay(value) {
  display.innerText = value;
}

// Reset calculator state
function resetCalculator() {
  currentInput = '0';
  previousInput = null;
  activeOperator = null;
  shouldResetDisplay = false;
  updateDisplay('0');
}

// Handle number input (0-9)
function inputDigit(digit) {
  if (shouldResetDisplay) {
    currentInput = digit;
    shouldResetDisplay = false;
  } else {
    if (currentInput === '0') {
      currentInput = digit;
    } else {
      currentInput += digit;
    }
  }
  updateDisplay(currentInput);
}

// Handle decimal point
function inputDecimal() {
  if (shouldResetDisplay) {
    currentInput = '0.';
    shouldResetDisplay = false;
  } else if (!currentInput.includes('.')) {
    currentInput += '.';
  }
  updateDisplay(currentInput);
}

// Handle operator (+, -, *, /)
function handleOperator(op) {
  const inputValue = parseFloat(currentInput);

  // If there's an existing operator and we have previousInput, compute intermediate result
  if (activeOperator && previousInput !== null && !shouldResetDisplay) {
    const result = performCalculation(previousInput, inputValue, activeOperator);
    if (result === 'Error') {
      resetCalculator();
      updateDisplay('Error');
      return;
    }
    currentInput = String(result);
    previousInput = result;
    updateDisplay(currentInput);
  } else {
    previousInput = inputValue;
  }

  activeOperator = op;
  shouldResetDisplay = true;
}

// Perform calculation based on operator
function performCalculation(a, b, op) {
  switch (op) {
    case 'add': return a + b;
    case 'subtract': return a - b;
    case 'multiply': return a * b;
    case 'divide':
      if (b === 0) return 'Error';
      return a / b;
    default: return b;
  }
}

// Handle equals
function handleEquals() {
  if (!activeOperator || previousInput === null) return;

  const inputValue = parseFloat(currentInput);
  const result = performCalculation(previousInput, inputValue, activeOperator);

  if (result === 'Error') {
    resetCalculator();
    updateDisplay('Error');
    return;
  }

  // Format result to avoid long floating point garbage
  const formattedResult = formatResult(result);
  currentInput = formattedResult;
  updateDisplay(currentInput);

  // Reset operator state but keep result for further calculations
  previousInput = null;
  activeOperator = null;
  shouldResetDisplay = true;
}

// Format result: limit decimals, remove trailing zeros
function formatResult(value) {
  if (typeof value === 'string') return value;
  if (Number.isInteger(value)) return value.toString();
  // Limit to 10 decimal places, remove trailing zeros
  const decimalStr = value.toFixed(10).replace(/\.?0+$/, '');
  return decimalStr;
}

// Handle percentage
function handlePercent() {
  const currentValue = parseFloat(currentInput);
  let percentValue;

  if (activeOperator && previousInput !== null) {
    // If in the middle of an operation, percentage is relative to previousInput
    percentValue = (previousInput * currentValue) / 100;
  } else {
    percentValue = currentValue / 100;
  }

  currentInput = formatResult(percentValue);
  updateDisplay(currentInput);
  shouldResetDisplay = true; // next number will overwrite
}

// Handle backspace
function handleBackspace() {
  if (shouldResetDisplay) return;
  
  if (currentInput.length === 1 || (currentInput.length === 2 && currentInput.startsWith('-'))) {
    currentInput = '0';
  } else {
    currentInput = currentInput.slice(0, -1);
  }
  updateDisplay(currentInput);
}

// Main event listener using data attributes
document.querySelector('.buttons-grid').addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (!button) return;

  const action = button.dataset.action;

  // Numbers
  if (/^[0-9]$/.test(action)) {
    inputDigit(action);
    return;
  }

  // Decimal
  if (action === 'decimal') {
    inputDecimal();
    return;
  }

  // Operators
  if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
    handleOperator(action);
    return;
  }

  // Equals
  if (action === 'equals') {
    handleEquals();
    return;
  }

  // Clear
  if (action === 'clear') {
    resetCalculator();
    return;
  }

  // Backspace
  if (action === 'backspace') {
    handleBackspace();
    return;
  }

  // Percent
  if (action === 'percent') {
    handlePercent();
    return;
  }
});

// Optional: keyboard support (bonus)
window.addEventListener('keydown', (e) => {
  const key = e.key;

  // Numbers
  if (/^[0-9]$/.test(key)) {
    e.preventDefault();
    inputDigit(key);
    return;
  }

  // Decimal
  if (key === '.' || key === ',') {
    e.preventDefault();
    inputDecimal();
    return;
  }

  // Operators
  if (key === '+') {
    e.preventDefault();
    handleOperator('add');
    return;
  }
  if (key === '-') {
    e.preventDefault();
    handleOperator('subtract');
    return;
  }
  if (key === '*') {
    e.preventDefault();
    handleOperator('multiply');
    return;
  }
  if (key === '/') {
    e.preventDefault();
    handleOperator('divide');
    return;
  }

  // Equals / Enter
  if (key === 'Enter' || key === '=') {
    e.preventDefault();
    handleEquals();
    return;
  }

  // Backspace
  if (key === 'Backspace') {
    e.preventDefault();
    handleBackspace();
    return;
  }

  // Escape for clear
  if (key === 'Escape') {
    e.preventDefault();
    resetCalculator();
    return;
  }

  // Percent
  if (key === '%') {
    e.preventDefault();
    handlePercent();
    return;
  }
});

// Initialize display
updateDisplay('0');
