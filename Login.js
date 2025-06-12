// Login.js - Login Form Validation

document.addEventListener('DOMContentLoaded', function() {
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
        // Success (replace with real authentication in production)
        alert('Login successful!');
        form.reset();
         window.location.href = 'Calculator.html'
    });
});
