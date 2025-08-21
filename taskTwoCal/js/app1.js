document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".button, .roundBtn"); // Include roundBtn too

  buttons.forEach(button => {
    button.addEventListener("click", () => handleInput(button.dataset.value));
  });

  function handleInput(value) {
    if (value === "AC") {
      clearDisplay();
    } else if (value === "=") {
      calculate();
    } else if (value === "+/-") {
      toggleSign();
    } else if (value === "%") {
      percentage();
    } else {
      appendToDisplay(value);
    }
  }

  function appendToDisplay(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = "";
  }

  function toggleSign() {
    if (display.value) {
      display.value = (parseFloat(display.value) * -1).toString();
    }
  }

  function percentage() {
    if (display.value) {
      display.value = (parseFloat(display.value) / 100).toString();
    }
  }

  function calculate() {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }
});
