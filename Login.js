// Login.js - Login Form Validation

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is registered
    if (localStorage.getItem('isRegistered') !== 'true') {
        // Not registered, redirect to registration page
        window.location.href = 'RegForm.html';
    }

    const form = document.getElementById('LoginForm');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Get input values
        const username = document.getElementById('loginUsername').value.trim();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;

        // Basic validation
        if (!username || !email || !password) {
            alert('Please fill in all required fields.');
            return;
        }
        // Email format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        // Check registration status and credentials
        const regData = JSON.parse(localStorage.getItem('regData') || '{}');
        if (
            localStorage.getItem('isRegistered') === 'true' &&
            regData.username === username &&
            regData.email === email &&
            regData.password === password
        ) {
            alert('Login successful!');
            form.reset();
            window.location.href = 'Calculator.html';
        } else {
            alert('Credentials do not match our records. Please sign up again.');
            localStorage.removeItem('isRegistered');
            localStorage.removeItem('regData');
            window.location.href = 'RegForm.html';
        }
    });
});
