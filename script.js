// Get elements
const phoneInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const resultDisplay = document.getElementById('results-div');

// Updated regex for valid US phone number formats
const usPhoneRegex = /^(?:1\s*|1?\+)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

// Function to check and display the result
function checkPhoneNumber() {
  const phoneNumber = phoneInput.value.trim();
  
  // Check if the input is empty
  if (phoneNumber === '') {
    resultDisplay.textContent = "Please provide a phone number";
    resultDisplay.classList.remove('hidden'); // Show the message
    return; // Stop further execution of the function
  }

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
}

// Check button click event
checkButton.addEventListener('click', checkPhoneNumber);

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
