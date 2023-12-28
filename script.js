function evaluateExpression(expression) {
  try {
    return Function("return " + expression)();
  } catch (error) {
    return "Error";
  }
}

let string = "";
let buttons = document.querySelectorAll(".button");
let inputField = document.getElementById("inputId");

Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let buttonText = e.target.innerHTML;

    if (buttonText === "=") {
      string = evaluateExpression(string);
      inputField.value = string;
    } else if (buttonText === "Ac") {
      string = "";
      inputField.value = string;
    } else if (buttonText === "C") {
      string = string.slice(0, -1);
      inputField.value = string;
    } else {
      if (buttonText === "X") {
        buttonText = "*";
        string = string + buttonText;
        inputField.value = string;
      } else if (
        (buttonText == "00" && string == "") ||
        (buttonText == "0" && string == "")
      ) {
        string = "";
      } else {
        string = string + buttonText;
        inputField.value = string;
      }
    }
  });

  btn.addEventListener("keypress", (e) => {
    let buttonText = e.key;

    if (buttonText === "=") {
      string = evaluateExpression(string);
      inputField.value = string;
    } else if (buttonText === "Ac") {
      string = "";
      inputField.value = string;
    } else if (buttonText === "C") {
      string = string.slice(0, -1);
      inputField.value = string;
    } else {
      if (buttonText === "X") {
        buttonText = "*";
        string = string + buttonText;
        inputField.value = string;
      } else if (
        (buttonText == "00" && string == "") ||
        (buttonText == "0" && string == "")
      ) {
        string = "";
      } else {
        string = string + buttonText;
        inputField.value = string;
      }
    }
  });
});
