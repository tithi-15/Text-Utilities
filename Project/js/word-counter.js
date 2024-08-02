document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('input-text');
    const wordCountDisplay = document.getElementById('word-count');
    const clearBtn = document.getElementById('clear-btn');
  
    function updateWordCount() {
      const text = inputText.value.trim();
      const words = text === '' ? 0 : text.split(/\s+/).length;
      wordCountDisplay.textContent = words;
    }
  
    inputText.addEventListener('input', updateWordCount);
  
    clearBtn.addEventListener('click', function () {
      inputText.value = '';
      wordCountDisplay.textContent = '0';
      inputText.focus(); // Optional: Focus on the textarea after clearing
    });
  });
  