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
  
  // Check if the phone number matches US format
  const resultText = usPhoneRegex.test(phoneNumber)
    ? `Valid US number: ${phoneNumber}`
    : `Invalid US number: ${phoneNumber}`;

  // Create a new paragraph element for each result
  const resultElement = document.createElement('p');
  resultElement.textContent = resultText;
  
  // Append the result element to the result display
  resultDisplay.appendChild(resultElement);

  // Show result display if hidden
  resultDisplay.classList.remove('hidden');

  // Clear the input field for a new entry
  phoneInput.value = '';
});

// Clear button click event
clearButton.addEventListener('click', () => {
  phoneInput.value = ''; // Clear input field
  resultDisplay.innerHTML = ''; // Clear all results in the result display
  resultDisplay.classList.add('hidden'); // Hide the result display
});

// Trigger checkPhoneNumber on "Enter" key press
phoneInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      checkPhoneNumber();
    }
  });