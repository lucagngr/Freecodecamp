const input = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");

const numerals = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    convert.click();
  }
});

convert.addEventListener("click", () => {
  let value = input.value.trim();
  
  if (!value) {
    output.innerText = "Please enter a valid number";
  } else if (value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    let result = "";

    for (const [number, roman] of numerals) {
      while (value >= number) {
        result += roman;
        value -= number;
      }
    }
    output.innerText = result;
  }
});
