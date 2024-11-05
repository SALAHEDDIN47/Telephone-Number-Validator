// Get elements
const phoneInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const resultDisplay = document.getElementById('result-div');

// Regex for valid US phone number (basic example)
const usPhoneRegex = /^(?:\+1\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

// Check button click event
checkButton.addEventListener('click', () => {
  const phoneNumber = phoneInput.value.trim();
  
  if (usPhoneRegex.test(phoneNumber)) {
    resultDisplay.textContent = `Valid US number: ${phoneNumber}`;
  } else {
    resultDisplay.textContent = `Invalid US number: ${phoneNumber}`;
  }

  // Show result display
  resultDisplay.classList.remove('hidden');
});

// Clear button click event
clearButton.addEventListener('click', () => {
  phoneInput.value = ''; // Clear input field
  resultDisplay.textContent = ''; // Clear result display text
  resultDisplay.classList.add('hidden'); // Hide the result display
});
