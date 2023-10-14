document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('submitForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (validateForm(name, email)) {
            displaySuccessMessage();
        } else {
            displayErrorMessage();
        }
    });

    function validateForm(name, email) {
        return !(name === '' || email === '');
    }

    function displaySuccessMessage() {
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Form submitted successfully!';
        successMessage.style.color = 'green';
        submitForm.appendChild(successMessage);
    }

    function displayErrorMessage() {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Please fill in all required fields.';
        errorMessage.style.color = 'red';
        submitForm.appendChild(errorMessage);
    }
});