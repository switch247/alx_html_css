document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var errorElement = document.getElementById('error');
    var successElement = document.getElementById('success');

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();

    if (name === '' || email === '') {
        // Display error message if any required field is empty
        errorElement.textContent = 'Please fill in all required fields.';
        successElement.textContent = '';
    } else {
        // All validations pass, display success message
        errorElement.textContent = '';
        successElement.textContent = 'Form submitted successfully!';
        // Submit the form (optional)
        // this.submit();
    }
});
