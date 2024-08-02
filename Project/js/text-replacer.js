// Function to perform text replacement
function replaceText() {
    const inputText = document.getElementById('input-text').value;
    const wordToReplace = document.getElementById('replace-word').value;
    const replaceWith = document.getElementById('replace-with').value;
  
    const outputText = inputText.replace(new RegExp(wordToReplace, 'g'), replaceWith);
    document.getElementById('output-text').value = outputText;
  }
  
  // Event listener for "Replace" button
  document.getElementById('replace-btn').addEventListener('click', replaceText);
  
  // Event listener for "Clear" button
  document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('input-text').value = '';
    document.getElementById('replace-word').value = '';
    document.getElementById('replace-with').value = '';
    document.getElementById('output-text').value = '';
  });
  
  // Event listener for "Copy" icon
  document.getElementById('copy-icon').addEventListener('click', function() {
    const outputTextArea = document.getElementById('output-text');
    outputTextArea.select();
    document.execCommand('copy');
  });
  