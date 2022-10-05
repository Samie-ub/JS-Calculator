let calculatorScreen = document.getElementById("screen");
let calculatorBtn = document.querySelectorAll("button");
let screenValue = "";

for (btns of calculatorBtn) {
  btns.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      calculatorScreen.value = screenValue;
    } else if (buttonText == "%") {
      buttonText = "/";
      screenValue += buttonText;
      calculatorScreen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = " ";
      calculatorScreen.value = screenValue;
    } else if (buttonText == "=") {
      calculatorScreen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      calculatorScreen.value = screenValue;
    }
  });
}
