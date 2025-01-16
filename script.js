const form = document.getElementById('signupForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(event) {
    let isValid = true;

    // Validate username
    const username = usernameInput.value.trim();
    const usernameRegex = /^[a-zA-Z]+$/; // Only letters allowed
    if (username === '') {
        usernameError.textContent = "Username cannot be empty.";
        isValid = false;
    } else if (!usernameRegex.test(username)) {
        usernameError.textContent = "Username must not contain spaces, numbers, or special characters.";
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    // Validate password
    const password = passwordInput.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/; // At least 6 chars, one uppercase, one special char
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must contain at least one uppercase letter and one special character.";
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});