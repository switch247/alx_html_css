document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var passwordInput = document.getElementById('password');
    var errorElement = document.getElementById('error');
    while (errorElement.firstChild) {
        errorElement.removeChild(errorElement.firstChild);
    }
    var password = passwordInput.value;

    var errors = validatePassword(password);

    if (errors.length === 0) {
        // Password meets all criteria, allow form submission
        errorElement.textContent = ''; // Clear error message
        this.submit(); // Submit the form
    } else {
        // Password does not meet criteria, display error messages
        errors.map((p)=>{
            x = document.createElement('p')
            x.textContent = p
            errorElement.appendChild(x)
        })
        // errorElement.textContent = errors.join('\n');
    }
});

function validatePassword(password) {
    var errors = [];

    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long.\n');
    }

    if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter.\n');
    }

    if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter.\n');
    }

    if (!/\d/.test(password)) {
        errors.push('Password must contain at least one numeric digit.\n');
    }

    if (!/[!@#$%^&*]/.test(password)) {
        errors.push('Password must contain at least one special character (!@#$%^&*).\n');
    }

    return errors;
}
