const button = document.getElementById("check-btn");
const inputElement = document.getElementById("text-input");
const resultElement = document.getElementById("result");

button.addEventListener("click", function () {
  const inputValue = inputElement.value.trim();

  if (inputValue === "") {
    alert("Please input a value");
    return;
  }

  const cleanedInput = inputValue.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const isPalindrome = cleanedInput === cleanedInput.split("").reverse().join("");

  if (isPalindrome) {
    resultElement.textContent = `${inputValue} is a palindrome`;
  } else {
    resultElement.textContent = `${inputValue} is not a palindrome`;
  }
});