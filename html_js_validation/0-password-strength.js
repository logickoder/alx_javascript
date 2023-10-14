const error = document.getElementById('error')

function validatePassword() {
    const password = document.getElementById('password').value;

    if (password.length === 0) {
        error.textContent = 'Password is required';
        return false;
    }

    if (password.length < 8) {
        error.textContent = 'Password should be at least 8 characters long';
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        error.textContent = 'Password should be at least one uppercase letter';
        return false;
    }

    if (!/[a-z]/.test(password)) {
        error.textContent = 'Password should be at least one lowercase letter';
        return false;
    }

    if (!/[0-9]/.test(password)) {
        error.textContent = 'Password should be at least one numeric digit';
        return false;
    }

    if (!/[., !@#$%^&*]/.test(password)) {
        error.textContent = 'Password should be at least one special character (e.g., !@#$%^&*)';
        return false;
    }

    error.textContent = '';
    return true;
}