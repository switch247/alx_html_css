document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var emailInput = document.getElementById('email');
    var errorElement = document.getElementById('error');

    var email = emailInput.value;

    if (validateEmail(email)) {
        // Email format is valid, allow form submission
        errorElement.textContent = ''; // Clear error message
        this.submit(); // Submit the form
    } else {
        // Email format is invalid, display error message
        errorElement.textContent = 'Please enter a valid email address.';
    }
});

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
