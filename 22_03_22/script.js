
const q = (selector) => document.querySelector(selector);

let firstOperator = q("#firstOp");
let operation = q("#operation");
let secondOperator = q("#secondOp");
const resultBtn = q("#resultBtn");
const resultDiv = q(".resultDiv");

const calculator = (firstOperator, operation, secondOperator) => {
  let result;
 
  if (operation === "+") result = firstOperator + secondOperator;
  else if (operation === "-") result = firstOperator - secondOperator;
  else if (operation === "/") result = firstOperator / secondOperator;
  else if (operation === "*") result = firstOperator * secondOperator;
  return result;
};

resultBtn.addEventListener("click", () => {
  const first = parseInt(firstOperator.value);
  const op = operation.value;
  const second = parseInt(secondOperator.value);


  setTimeout(() => {
    resultDiv.textContent = `Il risultato è: ${calculator(first, op, second)}`;
  }, 10000);
});

