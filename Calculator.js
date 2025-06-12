// Calculator.js - Basic Calculator Logic

let currentInput = '';
let isOn = true;

function setCalculatorOn(state) {
    isOn = state;
    if (!isOn) {
        currentInput = '';
        updateDisplay();
        document.getElementById('display').disabled = true;
        // Disable all buttons except On
        document.querySelectorAll('.buttons button').forEach(btn => {
            if (btn.textContent !== 'On') btn.disabled = true;
            else btn.disabled = false;
        });
    } else {
        currentInput = '0'; // Show zero when turned on
        updateDisplay();
        document.getElementById('display').disabled = false;
        document.querySelectorAll('.buttons button').forEach(btn => {
            btn.disabled = false;
        });
    }
}

function append(value) {
    if (!isOn) return;
    // If display is empty or zero, allow 0 to be shown
    if (currentInput === '' && value === '0') {
        currentInput = '0';
    } else if (currentInput === '0' && value !== '.') {
        // Replace leading zero with new number/operator (except for decimal)
        if (!isNaN(value)) {
            currentInput = value;
        } else {
            currentInput += value;
        }
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    if (!isOn) return;
    currentInput = '';
    updateDisplay();
}

function delchar() {
    if (!isOn) return;
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    if (!isOn) return;
    try {
        // Evaluate the expression safely
        let result = eval(currentInput);
        if (result === undefined) result = '';
        currentInput = result.toString();
        updateDisplay();
    } catch (e) {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(() => {
            clearDisplay();
        }, 1200);
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

// Optional: Keyboard support
window.addEventListener('keydown', function(e) {
    const key = e.key;
    if (!isOn) return;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
        append(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        delchar();
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});

window.addEventListener('DOMContentLoaded', function() {
    // Set initial state: calculator is ON
    setCalculatorOn(true);
    // Attach event listeners to On/Off buttons
    document.querySelectorAll('.buttons button').forEach(btn => {
        if (btn.textContent === 'On') {
            btn.addEventListener('click', function() { setCalculatorOn(true); });
        }
        if (btn.textContent === 'Off') {
            btn.addEventListener('click', function() { setCalculatorOn(false); });
        }
    });
});
