document.getElementById('numFields').addEventListener('change', function() {
    var selectedValue = parseInt(this.value);
    generateInputFields(selectedValue);
});

document.getElementById('dynamicForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var inputFields = document.querySelectorAll('#inputContainer input');
    if (validateForm(inputFields)) {
        this.submit(); // Submit the form
    } else {
        alert('Please fill in all fields.'); // Display error message
    }
});

function generateInputFields(numFields) {
    var inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // Clear previous fields

    for (var i = 1; i <= numFields; i++) {
        var input = document.createElement('input');
        input.type = 'text';
        input.name = 'field' + i;
        inputContainer.appendChild(input);
    }
}

function validateForm(inputFields) {
    for (var i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value.trim() === '') {
            return false; // Field is empty, form is not valid
        }
    }
    return true; // All fields are filled, form is valid
}
