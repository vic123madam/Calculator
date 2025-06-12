// Reg.js - Registration Form Validation and Submission

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('RegistrationForm');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Collect form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const username = document.getElementById('username').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const genderMale = document.getElementById('genderMale').checked;
        const genderFemale = document.getElementById('genderFemale').checked;

        // Basic validation
        if (!firstName || !lastName || !email || !password || !confirmPassword || !username || !phoneNumber) {
            alert('Please fill in all required fields.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        if (!genderMale && !genderFemale) {
            alert('Please select your gender.');  
            return;
        }
        // Email format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        // Phone number check (basic)
        if (!/^\d{7,15}$/.test(phoneNumber)) {
            alert('Please enter a valid phone number.');
            return;
        }
        // Success
        alert('Registration successful!');
        form.reset();
         window.location.href = 'Loginforms.html'
    });
   
});
