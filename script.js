let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

const colors = ['red', 'blue', 'green', 'purple', 'orange'];
const colorBox = document.getElementById("color-box");
document.getElementById("change-color").addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = randomColor;
});

const quotes = [
  "Believe in yourself!",
  "Keep pushing forward!",
  "Every day is a new beginning.",
  "Success is not final, failure is not fatal.",
  "Dream big and dare to fail."
];
const quoteDisplay = document.getElementById("quote-display");
document.getElementById("show-quote").addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDisplay.textContent = randomQuote;
});
