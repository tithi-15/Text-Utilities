// Function to remove multiple spaces from text
function removeMultipleSpaces(text) {
  return text.replace(/\s{2,}/g, ' ');
}

// Function to remove all spaces from text
function removeAllSpaces(text) {
  return text.replace(/\s+/g, '');
}

// Event listener for "Remove Multiple Spaces" button
document.getElementById('remove-spaces-btn').addEventListener('click', function() {
  const inputText = document.getElementById('input-text').value;
  const outputText = removeMultipleSpaces(inputText);
  document.getElementById('output-text').value = outputText;
});

// Event listener for "Remove All Spaces" button
document.getElementById('remove-all-spaces-btn').addEventListener('click', function() {
  const inputText = document.getElementById('input-text').value;
  const outputText = removeAllSpaces(inputText);
  document.getElementById('output-text').value = outputText;
});

// Event listener for "Clear" button
document.getElementById('clear-text-btn').addEventListener('click', function() {
  document.getElementById('input-text').value = '';
  document.getElementById('output-text').value = '';
});

// Event listener for "Copy" icon
document.getElementById('copy-icon').addEventListener('click', function() {
  const outputTextArea = document.getElementById('output-text');
  outputTextArea.select();
  document.execCommand('copy');
});
