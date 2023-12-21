// script.js
const textInput = document.getElementById("text-input");
const countButton = document.getElementById("count-button");
const wordCount = document.getElementById("word-count");

countButton.addEventListener("click", () => {
  const text = textInput.value;
  const words = text.trim().split(/\s+/).length;
  const characters = text.length; // This line counts all characters, including spaces
  wordCount.textContent = `Word count: ${words}, Character count: ${characters}`;
});

