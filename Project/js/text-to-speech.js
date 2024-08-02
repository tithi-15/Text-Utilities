// text-to-speech.js

const readButton = document.getElementById('readText');
const clearButton = document.getElementById('clearText');
const textArea = document.getElementById('textToRead');

// Function to read text using the SpeechSynthesis API
function readText() {
  const text = textArea.value;
  if (text === '') {
    alert('Please enter some text.');
    return;
  }

  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
}

// Function to clear the text area
function clearText() {
  textArea.value = '';
}

readButton.addEventListener('click', readText);
clearButton.addEventListener('click', clearText);
