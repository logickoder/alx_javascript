const error = document.getElementById('error');
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function validateEmail() {
    const email = document.getElementById('email').value;

    if (email.length === 0) {
        error.textContent = 'Email is required';
        return false;
    }
    if (!email.match(regex)) {
        error.textContent = 'Please enter a valid email address.';
        return false;
    }
    error.textContent = '';
    return true;
}