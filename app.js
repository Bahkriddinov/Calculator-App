const calDisplay = document.querySelector('.result');

function appendToDisplay(value) {
  calDisplay.textContent += value;
}

function clearDisplay() {
  calDisplay.textContent = '0';
}

function calculate() {
  try {
    calDisplay.textContent = eval(calDisplay.textContent);
  } catch (error) {
    calDisplay.textContent = 'Error';
  }
}
