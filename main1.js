class RegistrationValidator {
    validateRegistration(event) {
        event.preventDefault();
    
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
    
        // Validation for username
        if (usernameInput.value.length < 3 || usernameInput.value.length > 15) {
            alert('Username must be between 3 and 15 characters');
            return;
        }
    
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address');
            return;
        }
    
        if (passwordInput.value.length < 8 || passwordInput.value.length > 20) {
            alert('Password must be between 8 and 20 characters');
            return;
        }
    
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Password does not match');
            return;
        }
    
        // Your existing registration validation code
        alert('Registration successful!');
    
        const userInfo = {
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        };
        localStorage.setItem('registeredUser', JSON.stringify(userInfo));
    
        console.log('Registered User Information:', userInfo);
    
        }
    
        validateLogin(event) {
        event.preventDefault();
    
        const emailInput = document.getElementById('loginEmail');
        const passwordInput = document.getElementById('loginPassword');

        const storedUserInfo = localStorage.getItem('registeredUser');
    
        if (!storedUserInfo) {
            alert('No registered user found. Please register first.');
            return;
        }
    
        const userInfo = JSON.parse(storedUserInfo);
    
        // Check if the entered email and password match the stored user information
        if (emailInput.value !== userInfo.email || passwordInput.value !== userInfo.password) {
            alert('Invalid email or password');
            return;
        }
    
        alert('Welcome ' + userInfo.username);
    }
}
    
    const registrationValidator = new RegistrationValidator();
    
    document.getElementById('registrationForm').addEventListener('submit', (event) => registrationValidator.validateRegistration(event));
    document.getElementById('loginForm').addEventListener('submit', (event) => registrationValidator.validateLogin(event));
    