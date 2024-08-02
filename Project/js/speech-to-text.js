// speech-to-text.js

// Check for speech recognition support
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
  alert('Speech Recognition is not supported in this browser.');
} else {
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  const textarea = document.getElementById('speechToTextArea');
  const startButton = document.getElementById('startRecognition');
  const stopButton = document.getElementById('stopRecognition');
  const clearButton = document.getElementById('clearText');
  const copyButton = document.getElementById('copyText');

  startButton.addEventListener('click', () => {
    recognition.start();
  });

  stopButton.addEventListener('click', () => {
    recognition.stop();
  });

  clearButton.addEventListener('click', () => {
    textarea.value = '';
  });

  copyButton.addEventListener('click', () => {
    // Select the text in the textarea
    textarea.select();
    // Copy the text to the clipboard
    document.execCommand('copy');
    // Optional: Alert the user
    alert('Text copied to clipboard!');
  });

  recognition.addEventListener('result', event => {
    const transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
    textarea.value = transcript;
  });

  recognition.addEventListener('end', () => {
    recognition.stop();
  });
}
