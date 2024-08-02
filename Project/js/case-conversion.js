// Function to convert text to uppercase
document.getElementById('to-uppercase').addEventListener('click', function() {
    const inputText = document.getElementById('case-conversion-input').value;
    document.getElementById('case-conversion-output').value = inputText.toUpperCase();
});

// Function to convert text to lowercase
document.getElementById('to-lowercase').addEventListener('click', function() {
    const inputText = document.getElementById('case-conversion-input').value;
    document.getElementById('case-conversion-output').value = inputText.toLowerCase();
});

// Function to convert text to title case
document.getElementById('to-titlecase').addEventListener('click', function() {
    const inputText = document.getElementById('case-conversion-input').value;
    const titleCase = inputText.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    document.getElementById('case-conversion-output').value = titleCase;
});

// Function to clear all fields
document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('case-conversion-input').value = '';
    document.getElementById('case-conversion-output').value = '';
});

// Function to copy text
document.getElementById('copy-text').addEventListener('click', function() {
    const outputTextArea = document.getElementById('case-conversion-output');
    outputTextArea.select();
    document.execCommand('copy');
});
